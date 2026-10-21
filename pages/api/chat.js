const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1000;
const BOOKING_URL = 'https://calendar.app.google/DZNvXZdjJ7vQ5paF8';

const portfolioContext = `
You are Em's AI Guide, the clearly identified AI portfolio assistant for Emmanuel Cyprian Ememe. Answer questions about Emmanuel using only the portfolio facts below. Be warm, concise, professional, and useful to recruiters, collaborators, and potential consulting clients. Do not invent credentials, achievements, project details, employment details, availability, or claims about confidential work. If a detail is not listed, say so and offer the contact page.

PROFILE
- Emmanuel is an AI and machine learning software engineer and consultant.
- He works as a Software Engineer at the Office for National Statistics (ONS), 2020–present.
- His portfolio presents work in applied AI, machine-learning pipelines, AI-powered interfaces, intelligent automation, full-stack software, API integration, data workflows, cloud systems, technical discovery, and solution architecture.
- His stated tools and skills include Python, JavaScript, React, Next.js, HTML, CSS, WordPress, APIs, Figma, Framer, Adobe XD, and Photoshop.
- Other listed experience: Full Stack Developer at Toptal (Mar 2020–present); Solutions Architect at HypercoreIt (Mar 2020–Sep 2022); Project Manager at N.N.P.C (Mar 2019–Nov 2019).
- Education listed: BSc Mechanical Engineering (2017), Fullstack Development boot camp (2020), MSc Engineering Management (2021), MSc Business Administration (2022).
- Emmanuel is open to AI and software consulting, collaborations, and engineering opportunities.
- Visitors can book a free 30-minute Google Meet call here: ${BOOKING_URL}
- Contact page: /contact

PORTFOLIO PROJECTS
- NASA Project: https://nasa-project-wxjm.onrender.com/launch
- Self-calibrating Interface: https://emmanuel-ee.github.io/self-calibrating/
- Self-calibrating Interface 02: https://emmanuel-ee.github.io/self-calibrating-02/
- Projects index: /projects
- About page: /about
- Home page: /

NAVIGATION
When a visitor asks to see or go to a portfolio section, include the relevant clickable Markdown link in your answer. Use only these internal links: [Home](/), [About](/about), [Projects](/projects), [Contact](/contact). For booking, use [book a free 30-minute Google Meet call](${BOOKING_URL}). You may share the listed project URLs. Never create links to other internal routes.
`;

const isValidConversation = (messages) => {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return false;
  }

  let totalLength = 0;

  for (let index = 0; index < messages.length; index += 1) {
    const message = messages[index];
    const expectedRole = index % 2 === 0 ? 'user' : 'assistant';

    if (
      !message ||
      message.role !== expectedRole ||
      typeof message.content !== 'string' ||
      !message.content.trim() ||
      message.content.length > MAX_MESSAGE_LENGTH
    ) {
      return false;
    }

    totalLength += message.content.length;
  }

  return messages[messages.length - 1].role === 'user' && totalLength <= 8000;
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16kb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!isValidConversation(req.body?.messages)) {
    return res.status(400).json({ error: 'Please send a valid message and try again.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL;

  if (!apiKey || !model) {
    return res.status(503).json({
      error: 'The AI guide is not configured yet. Please use the contact page instead.',
    });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 600,
        system: portfolioContext,
        messages: req.body.messages,
      }),
      signal: AbortSignal.timeout(20000),
    });

    if (!response.ok) {
      if (response.status === 429 || response.status === 529) {
        return res.status(503).json({
          error: 'The AI guide is busy right now. Please try again in a moment.',
        });
      }

      console.error(`Anthropic chat request failed with status ${response.status}.`);
      return res.status(502).json({
        error: 'The AI guide could not answer just now. Please try again.',
      });
    }

    const result = await response.json();
    const reply = result.content
      ?.filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('')
      .trim();

    if (!reply) {
      console.error('Anthropic chat response did not contain a text reply.');
      return res.status(502).json({
        error: 'The AI guide returned an empty answer. Please try again.',
      });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    const timedOut = error.name === 'TimeoutError' || error.name === 'AbortError';

    if (!timedOut) {
      console.error('Anthropic chat request could not be completed.');
    }

    return res.status(timedOut ? 504 : 502).json({
      error: timedOut
        ? 'The AI guide took too long to respond. Please try again.'
        : 'The AI guide is temporarily unavailable. Please try again.',
    });
  }
}
