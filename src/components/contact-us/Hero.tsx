import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:h-[614px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp7kB4NssZ7raOKLX6VK8yRYWn199JRY2XBufH308uTJpgp_ciUYZ5JPPBDCly50sAWFUOiw0FsAmutzI5KNrBiQ2HKlyk3Vt7uN_NJguxstpQCu7W3jqBIhgBouC-Ih9gAWMItn6_5BrIgTSQdrUlMyoCZpWeG88PfiKfLyaQYpBnkSHQvIyLVQsuRfqP6X5eGX2TaRItftjy0lqRrQCGOxD6nHJFVzEPGPV4E-04aFreIXdbS5A3BlL5j2JVGORlVswoFZMc4gGw"
          alt="Serene morning sunlight hitting a minimalist yoga studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-transparent to-surface"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary px-3 sm:px-4 py-1.5 rounded-full text-on-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 inline-block shadow-lg"
        >
          Connect With Us
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-4 sm:mb-6 leading-tight"
        >
          Let's Begin Your <br /> Wellness Journey
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Take the first step towards a balanced life. Reach out to our specialized consultants for a personalized retreat experience.
        </motion.p>
      </div>
    </section>
  );
}
