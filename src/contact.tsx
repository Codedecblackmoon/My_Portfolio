import React, { useState } from 'react';
import image from './assets/send.png'


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: massage }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contact">
        <div className="min-h-screen text-white flex items-center justify-center p-6 sm:p-10 border-t border-white/20">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center md:items-start">
            {/* Form card */}
            <form
              onSubmit={handleFormSubmit}
              className="order-2 md:order-2 w-full border border-white rounded-3xl p-4 sm:p-5 flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="Message"
                id="massage"
                rows={5}
                value={massage}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-transparent border border-white rounded-2xl px-4 py-3 text-sm placeholder-white/50 resize-none focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="self-center sm:self-start mt-2 border border-white/60 rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-400">Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>

            <div className="order-1 md:order-1 mb-30 md:mb-120">
              <h1
                className="text-center leading-none"
                style={{
                    fontFamily: '"Archivo Black", sans-serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 200,
                    fontStyle: 'normal',
                    WebkitTextStroke: '0.5px white',
                    color: 'transparent',
                    fontSize: 'clamp(2.25rem, 5.5vw, 6.5rem)',
                    margin: '0px',
                    padding: '0',
                }}
              >
                CONTACT
                <br />
                ME
              </h1>
              <img
                src={image}
                alt="send"
                className="absolute top-20 sm:top-5 md:top-30 left-1/2 md:left-60 -translate-x-1/2 md:translate-x-0 z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain drop-shadow-[0_0_20px_rgba(80,140,255,0.6)] animate-slide-fade-in-right"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;