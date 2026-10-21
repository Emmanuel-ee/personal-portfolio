import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  HiArrowUpRight,
  HiMiniMicrophone,
  HiPaperAirplane,
  HiSparkles,
} from 'react-icons/hi2';

const BOOKING_URL = 'https://calendar.app.google/DZNvXZdjJ7vQ5paF8';
const QUICK_PROMPTS = [
  'What does Emmanuel do?',
  'Show me his projects',
  'How can I book a call?',
];

const renderMessage = (text) => {
  const linkPattern = /\[([^\]]+)\]\((\/(?:about|projects|contact)?|https:\/\/calendar\.app\.google\/DZNvXZdjJ7vQ5paF8)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    parts.push(
      href === BOOKING_URL ? (
        <a
          key={`${match.index}-${href}`}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-accent underline underline-offset-4 hover:text-white'
        >
          {label} <HiArrowUpRight className='inline' aria-hidden='true' />
        </a>
      ) : (
        <Link
          key={`${match.index}-${href}`}
          href={href}
          className='font-medium text-accent underline underline-offset-4 hover:text-white'
        >
          {label}
        </Link>
      ),
    );
    lastIndex = linkPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const AIChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi, I’m Em’s AI Guide. Ask me about Emmanuel’s AI and machine learning work, experience, or projects—or ask me to help you find something on this site.',
    },
  ]);

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const sendMessage = async (message) => {
    const cleaned = message.trim();
    if (!cleaned || isSending) return;

    const nextMessages = [...messages, { role: 'user', text: cleaned }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages
            .slice(1)
            .slice(-12)
            .map(({ role, text }) => ({ role, content: text })),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'The assistant could not answer just now.');
      }

      setMessages((current) => [
        ...current,
        { role: 'assistant', text: result.reply },
      ]);
    } catch (requestError) {
      setError(requestError.message || 'Could not reach the assistant. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const startVoiceInput = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError('Voice input is not supported in this browser. You can type your question instead.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => {
      setIsListening(false);
      setError('Voice input could not be started. Please type your question instead.');
    };
    recognition.onresult = (event) => {
      const transcript = event?.results?.[0]?.[0]?.transcript || '';
      if (transcript) {
        setInput(transcript);
      }
    };

    recognition.start();
  };

  return (
    <div className='fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-3 xl:bottom-8'>
      {open && (
        <section
          aria-label='Em’s AI Guide chat'
          className='flex max-h-[min(34rem,calc(100dvh-8rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#141a17]/[0.98] shadow-2xl backdrop-blur-md'
        >
          <header className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
            <div className='flex items-center gap-2'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10'>
                <HiSparkles className='text-lg text-accent' aria-hidden='true' />
              </span>
              <div>
                <h2 className='text-sm font-semibold text-white'>Em’s AI Guide</h2>
                <p className='text-xs text-white/50'>Portfolio assistant</p>
              </div>
            </div>
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='min-h-11 min-w-11 text-sm text-white/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              aria-label='Close chat'
            >
              Close
            </button>
          </header>

          <div
            aria-live='polite'
            aria-label='Conversation'
            className='min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4'
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[90%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === 'assistant'
                    ? 'bg-white/[0.08] text-white/90'
                    : 'ml-auto border border-accent/30 bg-accent/10 text-white'
                }`}
              >
                {renderMessage(message.text)}
              </div>
            ))}
            {isSending && (
              <p className='text-sm text-white/50' role='status'>
                Em’s AI Guide is thinking…
              </p>
            )}
            {error && (
              <p className='rounded-lg border border-red-300/20 bg-red-400/10 px-3 py-2 text-sm text-red-200' role='alert'>
                {error}
              </p>
            )}
            {messages.length === 1 && (
              <div className='flex flex-wrap gap-2 pt-1'>
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type='button'
                    onClick={() => sendMessage(prompt)}
                    disabled={isSending}
                    className='min-h-10 rounded-full border border-white/15 px-3 text-left text-xs text-white/70 transition-colors hover:border-accent/60 hover:text-accent disabled:opacity-50'
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            className='border-t border-white/10 p-3'
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <div className='flex items-center gap-2'>
              <label className='sr-only' htmlFor='portfolio-chat-input'>
                Ask Em’s AI Guide a question
              </label>
              <input
                id='portfolio-chat-input'
                type='text'
                value={input}
                maxLength={1000}
                onChange={(event) => setInput(event.target.value)}
                placeholder='Ask about AI, experience, projects…'
                className='h-11 min-w-0 flex-1 rounded-xl border border-white/20 bg-white/[0.06] px-3 text-sm text-white placeholder:text-white/45 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
              />
              <button
                type='submit'
                disabled={isSending || !input.trim()}
                className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50'
                aria-label='Send message'
              >
                <HiPaperAirplane aria-hidden='true' />
              </button>
              <button
                type='button'
                onClick={startVoiceInput}
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isListening
                    ? 'border-accent bg-accent/20 text-accent'
                    : 'border-white/20 text-white/75 hover:border-accent hover:text-accent'
                }`}
                aria-label={isListening ? 'Listening for a question' : 'Ask by voice'}
                title='Ask by voice'
              >
                <HiMiniMicrophone aria-hidden='true' />
              </button>
            </div>
            <p className='px-1 pt-2 text-[10px] leading-relaxed text-white/40'>
              AI replies are powered by Anthropic. Please don&apos;t share sensitive information.
            </p>
          </form>
        </section>
      )}

      <button
        type='button'
        onClick={() => setOpen((previous) => !previous)}
        className='flex h-14 items-center gap-2 rounded-full border border-white/20 bg-accent px-5 text-primary shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
        aria-label={open ? 'Close Em’s AI Guide' : 'Chat with Em’s AI Guide'}
        aria-expanded={open}
      >
        <HiSparkles className='text-xl' aria-hidden='true' />
        <span className='text-sm font-semibold'>Ask Em</span>
      </button>
    </div>
  );
};

export default AIChatAssistant;
