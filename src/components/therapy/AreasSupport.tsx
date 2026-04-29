import { motion } from "motion/react";
import { Brain, Baby, ArrowRight, Activity } from "lucide-react";

const areas = [
  {
    title: "Back & Joint Pain",
    description: "Targeted therapeutic sequences to strengthen supporting muscles and release chronic tension.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCivNKkm1BrYllaSIgVTMIvWzL7xG912soMnEY7PeixeFogvpNzpqF96FTuzg3KMnBl7Zkj7YVTn9TEv6aoAzRTZSc0VAYRRv3rj4Dh5mjB1pwGinLct96Cprmq9DQ-rmPSZBdH2dM9WOEEJttMcF-xOept-mq09c5VhPZmN37ocVWvS2p1VVKnS1hte7perXBfzsBgScX0HV_Oaej_rlX0K5e0IEvPUGNPx1rH2SUsuPJeD8L9RvHVf0DENClJ3QWvcp_1Nc13DuO8",
    size: "md:col-span-2",
    icon: <Activity className="w-6 h-6 text-orange-800" />
  },
  {
    title: "Stress & Anxiety",
    description: "Advanced techniques to regulate the nervous system and restore balance.",
    icon: <Brain className="w-8 h-8 text-orange-800" />,
    size: "col-span-1",
    bgColor: "bg-slate-200"
  },
  {
    title: "Prenatal Care",
    description: "Safe, gentle movements tailored for expecting mothers during pregnancy.",
    icon: <Baby className="w-8 h-8 text-orange-800" />,
    size: "col-span-1",
    border: true
  },
  {
    title: "Sleep Issues",
    description: "Reset your circadian rhythm with restorative poses and yoga nidra.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPopWLXN0gkZEBgafwQcsvzvhZbjnvQz6VfZY06E-tDregEpBvfugzfYon642OtN_MY0XJhhmIFsTXAcKch_uS3-wYHVPX03GSdp-zitvjjD-S3Na8xcTP5Qd5wOROsYVqG4rYl_g4DB1WV2rOs2NcA8UptnkYNo5NMQ3OL84cSDaEpAExZoG9rGgfAzP0pTizzGMQF-gJaC1S43OF3ssB7_ed0Gp2z8x0fz3k0u8nw7J_xe2Lzxn30msykU4EYTX-bcXcMDvbo3tU",
    size: "md:col-span-2"
  }
];

export default function AreasSupport() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-headline-lg mb-4">Areas We Support</h2>
        <div className="h-1.5 w-20 bg-orange-800 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {areas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl min-h-[350px] p-8 flex flex-col ${
              area.size
              } ${area.bgColor || 'bg-white'} ${area.border ? 'border border-slate-300/30' : ''}`}
          >
            {area.image && (
              <>
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </>
            )}

            <div className={`relative z-10 h-full flex flex-col ${area.image ? 'text-white justify-end' : ''}`}>
              {!area.image && (
                <div className="w-16 h-16 rounded-2xl bg-orange-800/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
              )}
              
              <h3 className={`text-headline-md mb-4 ${area.image ? 'text-white' : 'text-slate-950'}`}>
                {area.title}
              </h3>
              <p className={`text-body-md max-w-md ${area.image ? 'opacity-90' : 'text-slate-600'}`}>
                {area.description}
              </p>

              {!area.image && (
                <div className="mt-auto pt-8 text-orange-800 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
