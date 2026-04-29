import { motion } from "motion/react";
import { ClipboardList, FileText, UserCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "Initial assessment of your history and health goals.",
    icon: <ClipboardList className="w-8 h-8 text-orange-800" />
  },
  {
    title: "Personalized Plan",
    description: "A custom sequence designed for your recovery.",
    icon: <FileText className="w-8 h-8 text-orange-800" />
  },
  {
    title: "Guided Sessions",
    description: "Expert supervision to ensure correct form and safety.",
    icon: <UserCheck className="w-8 h-8 text-orange-800" />
  },
  {
    title: "Progress Tracking",
    description: "Regular check-ins to monitor and evolve your plan.",
    icon: <TrendingUp className="w-8 h-8 text-orange-800" />
  }
];

export default function HealingProcess() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center bg-white overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 md:mb-20">Your Healing Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-12 sm:top-14 left-[5%] right-[5%] h-0.5 bg-slate-300/30 z-0" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative z-10 flex flex-col items-center group"
          >
            <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-300/20 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:border-orange-800 transition-all duration-300 transform group-hover:-translate-y-2">
              {step.icon}
            </div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-2 sm:mb-3">{step.title}</h4>
            <p className="text-xs sm:text-sm text-secondary px-2 sm:px-4 leading-relaxed max-w-[240px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
