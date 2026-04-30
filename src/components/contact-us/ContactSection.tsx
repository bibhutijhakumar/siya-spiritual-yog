import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, CheckCircle2, X, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';
import emailjs from '@emailjs/browser';

const icons = {
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
  Instagram: Instagram,
};

// ✅ EmailJS Configuration
// EmailJS dashboard se ye keys copy karein aur .env file mein daalein:
// VITE_EMAILJS_SERVICE_ID=service_p342v4h
// VITE_EMAILJS_TEMPLATE_ID=template_g72bl9l
// VITE_EMAILJS_PUBLIC_KEY=-8z5iX9SW59j21S43
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_p342v4h';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_g72bl9l';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-8z5iX9SW59j21S43';

// ─── Success Modal ────────────────────────────────────────────────────────────
function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={22} />
          </button>

          {/* Animated Check Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3"
          >
            Message Sent! 🎉
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed mb-2"
          >
            Your form has been submitted successfully!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-sm leading-relaxed mb-8"
          >
            We will review your details and contact you soon. Thank you! 🙏
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
            className="bg-orange-600 text-white px-10 py-3 rounded-xl font-bold text-base hover:brightness-110 transition-all"
          >
            Done
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Error Toast ──────────────────────────────────────────────────────────────
function ErrorToast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-sm w-full"
    >
      <AlertCircle className="w-5 h-5 shrink-0" />
      <p className="text-sm font-medium flex-1">{message}</p>
      <button onClick={onClose}><X size={18} /></button>
    </motion.div>
  );
}

// ─── Main ContactSection ──────────────────────────────────────────────────────
export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Individual form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg('');

    // Using emailjs.send() — direct data passing, no template variable mismatch
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        // These keys MUST match the {{variables}} used in the EmailJS template
        name: name,            // → From Name field: {{name}}
        from_name: name,       // → Body: {{from_name}}
        phone_number: phone,   // → Body: {{phone_number}}
        email: email,          // → Reply To field & Body: {{email}}
        reply_to: email,       // → extra alias for reply_to
        message: message,      // → Body: {{message}}
      },
      PUBLIC_KEY
    )
      .then(() => {
        setIsSending(false);
        setShowSuccess(true);
        setName(''); setPhone(''); setEmail(''); setMessage('');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSending(false);
        const status = error?.status;
        if (status === 401 || status === 403) {
          setErrorMsg('Authentication failed. Please check EmailJS Public Key.');
        } else if (status === 400) {
          setErrorMsg('Template error. Please verify EmailJS template variables.');
        } else {
          setErrorMsg('Something went wrong. Please try again later.');
        }
      });
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

      {/* Error Toast */}
      <AnimatePresence>
        {errorMsg && (
          <ErrorToast message={errorMsg} onClose={() => setErrorMsg('')} />
        )}
      </AnimatePresence>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">

          {/* Left side: Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8 sm:gap-12"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold leading-tight">
                Your journey starts <br /> here.
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
                We are here to support your path to spiritual and physical restoration.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {CONTACT_INFO.map((item) => {
                const Icon = icons[item.icon as keyof typeof icons];
                const isLink = !!(item as any).href;
                const CardWrapper = isLink ? 'a' : 'div';
                const linkProps = isLink
                  ? {
                      href: (item as any).href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {};
                return (
                  <CardWrapper
                    key={item.title}
                    {...linkProps}
                    className={`flex items-start gap-4 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 transition-all ${
                      isLink
                        ? 'hover:border-pink-400/60 hover:shadow-md hover:shadow-pink-100 cursor-pointer group'
                        : ''
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 transition-colors ${isLink ? 'group-hover:bg-pink-100 group-hover:text-pink-600' : ''}`}>
                      {Icon && <Icon size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className={`transition-colors whitespace-pre-line ${isLink ? 'text-on-surface-variant group-hover:text-pink-600' : 'text-on-surface-variant'}`}>
                        {item.value}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Right side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-sm border border-outline-variant/20"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 00000 00000"
                    required
                    className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Your Message</label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your wellness goals..."
                  required
                  className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none resize-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSending}
                className={`w-full ${isSending ? 'bg-gray-400 opacity-70 cursor-not-allowed' : 'bg-primary hover:brightness-110'} text-white py-5 rounded-xl font-bold text-lg shadow-lg transition-all`}
                type="submit"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}