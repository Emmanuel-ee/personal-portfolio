# personal-portfolio
# my-next-portfolio

## Contact form email

The contact form submits directly to FormSubmit and sends messages to `ememeemmanuel3@gmail.com`. No custom domain, API key, or environment variables are needed. After deploying, submit one test message and confirm FormSubmit's activation email in that inbox (check Spam if it is not visible). Form submissions will be delivered after confirmation. The email link on the Contact page remains available as a direct alternative.

## AI portfolio guide

The portfolio chat uses the Anthropic Messages API. Configure both variables on the server and in your deployment provider:

- `ANTHROPIC_API_KEY` — an Anthropic API key. Keep it private; never use a `NEXT_PUBLIC_` prefix or commit the key.
- `ANTHROPIC_MODEL` — a model ID enabled for your Anthropic account.

For local development, add these variables to `.env.local` in the project root. Add the same variables as server-side environment variables in your hosting provider before deploying. API usage may incur charges; configure usage limits with Anthropic and monitor usage. The chat endpoint limits conversation size and request duration.
