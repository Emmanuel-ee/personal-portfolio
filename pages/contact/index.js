import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { HiArrowUpRight } from 'react-icons/hi2';
import { fadeIn } from '../../variants';

const Avatar = dynamic(() => import('../../components/Avatar'), {
  ssr: false,
  loading: () => <div className='h-[260px] w-full sm:h-[340px] lg:h-[460px]' aria-hidden='true' />,
});
const SphereScene = dynamic(() => import('../../components/SphereScene'), {
  ssr: false,
  loading: () => <div className='h-[150px] w-full' aria-hidden='true' />,
});

const Contact = () => {
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: 'sending', message: 'Sending your message...' });

    try {
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      const response = await fetch('https://formsubmit.co/ajax/ememeemmanuel3@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          _replyto: formValues.email,
          _subject: `[Portfolio] ${formValues.subject}`,
          message: formValues.message,
          _honey: formValues._honey,
          _template: 'table',
        }),
      });
      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        const contentType = response.headers.get('content-type') || 'unknown content type';
        const pageTitle = responseText.match(/<title[^>]*>(.*?)<\/title>/i)?.[1]?.trim();
        const detail = pageTitle ? `: ${pageTitle}` : '';
        throw new Error(
          `The email service returned a web page instead of a delivery response (HTTP ${response.status}, ${contentType}${detail}). Please email me directly.`,
        );
      }

      const accepted = result.success === true || result.success === 'true';

      if (!response.ok || !accepted) {
        throw new Error(result.message || 'Email delivery failed. Please email me directly.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Thanks for reaching out. Your message has been submitted. You will get a response on the email you provided.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please email me directly instead.',
      });
    }
  };

  return (
    <main className='min-h-full bg-primary/30 px-4 pb-32 pt-28 sm:px-8 sm:pt-32'>
      <div className='container mx-auto grid min-h-full max-w-6xl items-center gap-8 py-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:gap-12'>
        <section className='mx-auto w-full max-w-2xl'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-3 text-left'
          >
            Let&apos;s talk about what you&apos;re building.
          </motion.h2>
          <p className='mb-6 max-w-xl text-left'>
            Have a project, opportunity, or question? Send a note and I&apos;ll get back to you.
          </p>
          <a
            href='https://calendar.app.google/DZNvXZdjJ7vQ5paF8'
            target='_blank'
            rel='noopener noreferrer'
            className='mb-8 inline-flex min-h-12 items-center gap-3 border border-accent/40 px-5 font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
          >
            Book a free 30-minute Google Meet call
            <HiArrowUpRight aria-hidden='true' />
          </a>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex w-full flex-col gap-4'
          >
            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='flex flex-col gap-2 text-left text-sm text-white/75' htmlFor='contact-name'>
                Your name
                <input
                  id='contact-name'
                  name='name'
                  type='text'
                  autoComplete='name'
                  maxLength={100}
                  required
                  className='input normal-case'
                />
              </label>
              <label className='flex flex-col gap-2 text-left text-sm text-white/75' htmlFor='contact-email'>
                Email address
                <input
                  id='contact-email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  maxLength={254}
                  required
                  className='input normal-case'
                />
              </label>
            </div>
            <label className='flex flex-col gap-2 text-left text-sm text-white/75' htmlFor='contact-subject'>
              Subject
              <input
                id='contact-subject'
                name='subject'
                type='text'
                maxLength={160}
                required
                className='input normal-case'
              />
            </label>
            <label className='flex flex-col gap-2 text-left text-sm text-white/75' htmlFor='contact-message'>
              Message
              <textarea
                id='contact-message'
                name='message'
                maxLength={5000}
                required
                className='textarea normal-case'
              />
            </label>
            <div className='absolute -left-[10000px]' aria-hidden='true'>
              <label htmlFor='contact-honey'>Leave this field empty</label>
              <input id='contact-honey' name='_honey' type='text' tabIndex='-1' autoComplete='off' />
            </div>
            <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
              <button
                type='submit'
                disabled={status.type === 'sending'}
                className='inline-flex h-12 items-center gap-3 bg-accent px-5 font-semibold text-primary transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60'
              >
                {status.type === 'sending' ? 'Sending...' : 'Send message'}
                <BsArrowRight aria-hidden='true' />
              </button>
              <p
                role='status'
                aria-live='polite'
                className={`min-h-6 text-sm ${status.type === 'error' ? 'text-red-300' : status.type === 'success' ? 'text-accent' : 'text-white/60'}`}
              >
                {status.message}
              </p>
            </div>
          </motion.form>
        </section>
        <motion.aside
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mx-auto w-full max-w-[340px] lg:max-w-none'
          aria-label='Interactive 3D phone model'
        >
          <Avatar />
          <div className='mx-auto mt-2 w-full max-w-[280px]'>
            <p className='mb-1 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/50'>
              Interactive web experiment
            </p>
            <div className='h-[150px] w-full sm:h-[180px]' aria-label='Animated Three.js sphere'>
              <SphereScene />
            </div>
          </div>
        </motion.aside>
      </div>
    </main>
  );
};

export default Contact;
