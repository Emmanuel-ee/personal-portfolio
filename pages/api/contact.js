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

  try {
    const providerResponse = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        _replyto: email.trim(),
        _subject: `[Portfolio] ${subject.trim()}`,
        message: message.trim(),
        _honey: website || '',
        _template: 'table',
      }),
    });

    const result = await providerResponse.json();
    const accepted = result.success === true || result.success === 'true';

    if (!providerResponse.ok || !accepted) {
      console.error('FormSubmit rejected the contact message:', providerResponse.status);
      return res.status(502).json({ message: 'Email delivery failed. Please email me directly.' });
    }

    return res.status(200).json({ message: 'Message sent.' });
  } catch (error) {
    console.error('Unable to reach FormSubmit:', error);
    return res.status(502).json({ message: 'Email delivery failed. Please email me directly.' });
  }
}