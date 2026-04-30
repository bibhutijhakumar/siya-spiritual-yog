import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-8 bg-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl md:rounded-[4rem] overflow-hidden relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center text-center p-6 sm:p-10 md:p-20"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuioH2Ao47OrgpSuPliA5k5HuvdJ3CCD0bNimxc7YbPw79pjfSMQbI7RjyLsv5b-Xgx9rWwokfe8C-7FpjFWejbeXlLSL6cc7RCOWrcwUUGvj20IPYlgNoNciaBL5cVaRdoyvErkvtiV8b0sxQ0xVFfzVskuELpxPeP1WtXkmKB4zeMOVhtDb1Q_ZhLkha4nrQAvckKlrCyteCVSyYwASLe2gEjGQRviDRG3-BkqHLEkAMAi78LC1JhiK3uasxLUtKGZ-jX6A3FsoF" 
            alt="Healing Atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 md:mb-8 font-bold leading-tight">
            Start your healing <br className="hidden md:block" /> journey today.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed">
            Our specialists are ready to guide you back to your best self. Limited session availability per month.
          </p>
          <button className="bg-primary-container text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:scale-105 transition-transform shadow-orange-600/40">
            Book Initial Consult
          </button>
        </div>
      </motion.div>
    </section>
  );
}
