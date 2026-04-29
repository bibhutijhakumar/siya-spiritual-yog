import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function ScientificApproach() {
  return (
    <section className="py-24 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk4kAN4WZcRpwjtNtBUc5sE4xYuIsFkB956tfN9QZfgC-NLHhFY5TvqBC0VUmrDl0MHbLiKkdwzlqeqyq3CKgEkp-pkPWlo1w44r7YwY48decWU-H2GukMu2mBSeEkIG_fuDCu88YmrvJrqntQIxcX7ty8LUm9YVGtKYgULoQhixOf6wjbQgYPp3XHwyjYjCIdO8WNBP7SkN4GkIvHZN8vMkEgMrcDwO8wOTW-qMVRTZa6nBTSdFQLpIkIJVIm1cmsY1KdrfSkMZQV" 
              alt="Scientific Yoga Approach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] max-w-[280px] shadow-2xl border border-white/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-800 rounded-full p-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight">Clinical Precision</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Our methods are grounded in physiological principles for safe and gradual improvement.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-headline-lg text-slate-950 mb-8">Our Scientific Approach</h2>
          <p className="text-body-lg mb-12">
            We believe in healing that respects the body's natural pace. Our therapy isn't about pushing limits; it's about identifying restrictions and gently inviting space and movement back into the system.
          </p>
          
          <div className="space-y-10">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-orange-800/20 flex items-center justify-center font-display text-orange-800 text-xl font-bold group-hover:bg-orange-800 group-hover:text-white transition-all duration-300">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-950">Personalized Sessions</h4>
                <p className="text-body-md text-slate-600">
                  Every body is different. We create 1:1 sessions that adapt to your daily energy levels and physical feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-orange-800/20 flex items-center justify-center font-display text-orange-800 text-xl font-bold group-hover:bg-orange-800 group-hover:text-white transition-all duration-300">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-950">Safe & Gradual Improvement</h4>
                <p className="text-body-md text-slate-600">
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
