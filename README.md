# Emmanuel Ememe's portfolio

Next.js portfolio with an optional Claude-powered guide, a Google Calendar booking link, and a contact form.

## Run locally

Use Node.js 24 (see `.nvmrc`), then run:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Run `npm run lint` and `npm run build` before deploying.

## Set up the AI guide

The chat endpoint at `/api/chat` calls Anthropic on the server. Create an API key in the [Anthropic Console](https://platform.claude.com/settings/keys), select a model available to your account, and create a **git-ignored** `.env.local` in the project root:

```dotenv
ANTHROPIC_API_KEY=your-private-api-key
ANTHROPIC_MODEL=claude-haiku-5-5
```

Restart `npm run dev` after changing these values. Keep the key private: never put it in source code, use a `NEXT_PUBLIC_` variable, commit `.env.local`, or share the key in chat. Anthropic API usage can incur charges; review billing and set usage limits in the Console.

### Vercel deployment

In **Vercel → your project → Settings → Environment Variables**, create `ANTHROPIC_API_KEY` and `ANTHROPIC_MODEL` with the same values. Enable Production (and Preview if needed), then deploy the code or redeploy after changing environment variables. Test "Ask Em" on the deployed site. The chat needs a server-capable Next.js deployment; a static export cannot run `/api/chat`.

### If the AI service is unavailable

The guide shows an error and links visitors to the working **Contact** page and the **free 30-minute Google Meet booking** page. Neither requires the AI service. To troubleshoot:

1. If it says **not configured**, confirm both variables exist for the relevant Vercel environment and redeploy. If the model or key is invalid, check the Vercel function logs for `/api/chat` and confirm your Anthropic model access and billing.
2. If it says **busy**, retry later; check [Anthropic's status](https://status.anthropic.com/) and your account rate/usage limits.
3. If it **times out** or cannot answer, check the Vercel function logs and Anthropic's status. An API outage cannot be fixed by changing the visitor's question; visitors can still contact you or book a call.
4. If a conversation error persists after an update, refresh the page to start a new chat.

## Contact and booking

The contact form sends messages directly through FormSubmit to `ememeemmanuel3@gmail.com`. After deployment, submit a test message and confirm FormSubmit's activation email in that inbox (including Spam). Until confirmed, submissions will not be delivered. The booking buttons open the published Google Calendar appointment schedule, which supplies a Google Meet link after booking.
