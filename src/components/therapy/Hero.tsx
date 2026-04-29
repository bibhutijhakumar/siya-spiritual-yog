import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuANnbNPERgYuRzoz7tNTbmDoGtrRn9QxVM9tjSfQOdS52N0F_127HYs1mHhL3aswddCAy3T16JIb4GVeMYNr9j9_zpXAIhNJ-zr80Ho-9OeSmlMBgPKDXxjwntKLRPmkDZx6hHp9XbH6XBFA0Xq44b1XMECELg9Vzn9V9iO7zT-jUPSlnkJYdT9qJys_gBhacF1OYdqDPshkNF7aDufJXErGLgxJ5DQa3iCUTzJlT0eMyMcVvu69XBxKZpOT7WyaC0pbfXpzhOuNJU0"
          alt="Yoga Therapy Session"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
            Restorative Care
          </span>
          <h1 className="text-display-xl text-on-surface mb-6">
            Heal Naturally with <br />
            <span className="text-primary italic font-medium">Yoga Therapy</span>
          </h1>
          <p className="text-body-lg mb-10 max-w-lg">
            Experience a professional, clinical approach to healing that combines ancient wisdom with modern physiological understanding. Personalized sessions designed for your unique recovery journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-[0_32px_64px_-16px_rgba(176,47,0,0.2)]">
              Book a Consultation
            </button>
            <button className="border-2 border-primary text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-800/5 transition-all">
              View Programs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
