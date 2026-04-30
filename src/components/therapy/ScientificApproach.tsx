import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function ScientificApproach() {
  return (
    <section className="py-6 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-2xl sm:rounded-3xl md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk4kAN4WZcRpwjtNtBUc5sE4xYuIsFkB956tfN9QZfgC-NLHhFY5TvqBC0VUmrDl0MHbLiKkdwzlqeqyq3CKgEkp-pkPWlo1w44r7YwY48decWU-H2GukMu2mBSeEkIG_fuDCu88YmrvJrqntQIxcX7ty8LUm9YVGtKYgULoQhixOf6wjbQgYPp3XHwyjYjCIdO8WNBP7SkN4GkIvHZN8vMkEgMrcDwO8wOTW-qMVRTZa6nBTSdFQLpIkIJVIm1cmsY1KdrfSkMZQV" 
              alt="Scientific Yoga Approach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-2 sm:-right-4 md:-right-8 bg-white/80 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl md:rounded-[2rem] max-w-[250px] sm:max-w-[280px] shadow-2xl border border-white/50">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-orange-800 rounded-full p-2">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <span className="font-bold text-xs sm:text-sm tracking-tight">Clinical Precision</span>
            </div>
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">
              Our methods are grounded in physiological principles for safe and gradual improvement.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-6 sm:mb-8">Our Scientific Approach</h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed">
            We believe in healing that respects the body's natural pace. Our therapy isn't about pushing limits; it's about identifying restrictions and gently inviting space and movement back into the system.
          </p>
          
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="flex gap-4 sm:gap-6 group">
              <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-orange-800/20 flex items-center justify-center font-display text-orange-800 text-base sm:text-xl font-bold group-hover:bg-orange-800 group-hover:text-white transition-all duration-300">
                1
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-slate-950">Personalized Sessions</h4>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  Every body is different. We create 1:1 sessions that adapt to your daily energy levels and physical feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 group">
              <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-orange-800/20 flex items-center justify-center font-display text-orange-800 text-base sm:text-xl font-bold group-hover:bg-orange-800 group-hover:text-white transition-all duration-300">
                2
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-slate-950">Safe & Gradual Improvement</h4>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                  We prioritize longevity over quick fixes, ensuring each movement builds a foundation for long-term health.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
