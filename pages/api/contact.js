const recipient = 'ememeemmanuel3@gmail.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidText = (value, maxLength) =>
  typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, subject, message, website } = req.body || {};

  if (website) {
    return res.status(200).json({ message: 'Message received.' });
  }

  if (
    !isValidText(name, 100) ||
    typeof email !== 'string' ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    !isValidText(subject, 160) ||
    !isValidText(message, 5000)
  ) {
    return res.status(400).json({ message: 'Please check the form fields and try again.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return res.status(503).json({ message: 'Email delivery is not configured yet. Please email me directly.' });
  }

  try {
    const providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email.trim(),
        subject: `[Portfolio] ${subject.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      }),
    });

    if (!providerResponse.ok) {
      console.error('Resend email request failed with status:', providerResponse.status);
      return res.status(502).json({ message: 'Email delivery failed. Please email me directly.' });
    }

    return res.status(200).json({ message: 'Message sent.' });
  } catch (error) {
    console.error('Unable to reach the email provider:', error);
    return res.status(502).json({ message: 'Email delivery failed. Please email me directly.' });
  }
}