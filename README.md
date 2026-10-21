# personal-portfolio
# my-next-portfolio

## Contact form email

The contact form sends messages to `ememeemmanuel3@gmail.com` through Resend. To enable delivery:

1. Create a Resend account, verify a sending domain, and create an API key.
2. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in your local `.env.local` and in the Vercel project environment variables. Use a sender address on the verified domain.
3. Redeploy the site after adding the variables.

The public email link remains available if email delivery is not configured or temporarily unavailable. Never expose `RESEND_API_KEY` in a `NEXT_PUBLIC_` variable.
