"use client"; // Agar Next.js use kar rahe hain toh ye line zaroori hai

import React, { useRef, useState } from 'react'; // useRef aur useState yaha se aate hain
import { motion } from 'framer-motion'; // Motion library import
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { CONTACT_INFO, PRACTICE_TIMINGS } from './constants';
import emailjs from '@emailjs/browser';

const icons = {
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
  Instagram: Instagram,
};

export default function ContactSection() {
  // 1. Hooks initialization
  const formRef = useRef(null); 
  const [isSending, setIsSending] = useState(false);

  // 2. Email sending logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Yaha apni EmailJS keys daalein
    const SERVICE_ID = 'service_xxxxxxx'; 
    const TEMPLATE_ID = 'template_xxxxxxx';
    const PUBLIC_KEY = 'your_public_key';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Message successfully sent!");
        setIsSending(false);
        formRef.current.reset(); // Form khali karne ke liye
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please check console for errors.");
        setIsSending(false);
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left side: Details */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-12"
        >
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold leading-tight">
              Your journey starts <br /> here.
            </h2>
            <p className="text-on-surface-variant text-lg">
              We are here to support your path to spiritual and physical restoration.
            </p>
          </div>

          <div className="grid gap-6">
            {CONTACT_INFO.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/20"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Full Name</label>
                <input 
                  name="from_name"
                  type="text" 
                  placeholder="Your Name"
                  required
                  className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Phone Number</label>
                <input 
                  name="phone_number"
                  type="tel" 
                  placeholder="+91 00000 00000"
                  required
                  className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Email Address</label>
              <input 
                name="reply_to"
                type="email" 
                placeholder="email@example.com"
                required
                className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Your Message</label>
              <textarea 
                name="message"
                rows={6} 
                placeholder="Tell us about your wellness goals..."
                required
                className="bg-surface-container-low border border-transparent focus:border-primary/50 focus:bg-white rounded-xl p-4 outline-none resize-none transition-all"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={isSending}
              className={`w-full ${isSending ? 'bg-gray-400 opacity-70' : 'bg-primary'} text-on-primary py-5 rounded-xl font-bold text-lg shadow-lg transition-all`}
              type="submit"
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}