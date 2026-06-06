import { useEffect, useRef, useState } from 'react';
import { HiMiniMicrophone, HiPaperAirplane, HiSparkles } from 'react-icons/hi2';

const getBotReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes('name') || text.includes('who are you')) {
    return 'I am Emmanuel Cyprian\'s portfolio assistant. I can tell you about his AI projects, engineering experience, and how to contact him.';
  }

  if (text.includes('ai') || text.includes('ml') || text.includes('machine learning')) {
    return 'Emmanuel builds practical AI products: ML pipelines, AI-powered interfaces, and intelligent automation systems. He keeps a strong software engineering foundation in every build.';
  }

  if (text.includes('software engineer') || text.includes('role') || text.includes('title')) {
    return 'Emmanuel\'s core title is Software Engineer, with strong specialization in Machine Learning and AI engineering.';
  }

  if (text.includes('project') || text.includes('work')) {
    return 'His featured work includes AI-integrated web products, data-driven decision tools, and interactive 3D user experiences powered by modern JavaScript and Python ecosystems.';
  }

  if (text.includes('contact') || text.includes('hire') || text.includes('email')) {
    return 'You can use the contact page to send Emmanuel a direct message for collaborations, consulting, or full-time opportunities.';
  }

  return 'Great question. Ask me about Emmanuel\'s AI/ML background, software engineering experience, projects, or how to get in touch.';
};

const AIChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi! I\'m your AI assistant. Ask me anything about Emmanuel Cyprian and his work.',
    },
  ]);

  const recognitionRef = useRef(null);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const speakResponse = (text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const sendMessage = (message) => {
    const cleaned = message.trim();
    if (!cleaned) return;

    const reply = getBotReply(cleaned);

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: cleaned },
      { role: 'assistant', text: reply },
    ]);

    setInput('');
    speakResponse(reply);
  };

  const startVoiceInput = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Voice recognition is not supported in this browser. You can still type your question here.',
        },
      ]);
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event?.results?.[0]?.[0]?.transcript || '';
      if (transcript) {
        sendMessage(transcript);
      }
    };

    recognition.start();
  };

  return (
    <div className='fixed right-4 bottom-24 xl:bottom-8 z-[60] flex flex-col items-end gap-3'>
      {open && (
        <div className='w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-white/20 bg-[#14152a]/95 backdrop-blur-md shadow-2xl overflow-hidden'>
          <div className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
            <div className='flex items-center gap-2'>
              <HiSparkles className='text-accent text-lg' />
              <p className='text-sm font-semibold text-white'>AI Portfolio Assistant</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className='text-white/70 hover:text-accent transition-colors text-sm'
              aria-label='Close assistant'
            >
              Close
            </button>
          </div>

          <div className='h-64 overflow-y-auto px-4 py-3 space-y-3'>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === 'assistant'
                    ? 'bg-white/10 text-white'
                    : 'bg-accent/20 text-white border border-accent/40 ml-6'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className='border-t border-white/10 p-3'>
            <div className='flex items-center gap-2'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder='Ask about AI projects, skills, contact...'
                className='flex-1 h-10 rounded-xl bg-white/10 border border-white/20 px-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-accent'
              />
              <button
                type='button'
                onClick={() => sendMessage(input)}
                className='h-10 w-10 rounded-xl bg-accent/90 hover:bg-accent text-white flex items-center justify-center transition-colors'
                aria-label='Send message'
              >
                <HiPaperAirplane />
              </button>
              <button
                type='button'
                onClick={startVoiceInput}
                className={`h-10 w-10 rounded-xl border text-white flex items-center justify-center transition-colors ${
                  isListening
                    ? 'border-accent bg-accent/30'
                    : 'border-white/30 hover:border-accent'
                }`}
                aria-label='Start voice input'
                title='Speak your question'
              >
                <HiMiniMicrophone />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className='h-14 px-5 rounded-full bg-accent text-white shadow-xl border border-white/20 hover:scale-105 transition-transform flex items-center gap-2'
        aria-label='Open AI assistant'
      >
        <HiSparkles className='text-xl' />
        <span className='text-sm font-medium'>AI Chat</span>
      </button>
    </div>
  );
};

export default AIChatAssistant;