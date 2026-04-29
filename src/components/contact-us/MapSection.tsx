import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="h-[400px] w-full relative bg-surface-container-highest overflow-hidden">
      <div className="absolute inset-0 grayscale opacity-40">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3mSGDhM5TPLBxEww8cytxQih6azeZsB9Tv5TzeBK2QmnDSIrSNJoPwurrtTpWUtIQ6fs9vhymle_LMAcptihJcXjDsUj98g1BT2g7obIiIUxQmCbBrNzf9Ff2oofXUrNVbEKWI9mVBfSgjuAO0JD1GTfubP9LYodCghhICRU4S6v1tX2SI1Cs4GsCi5_Zen2fclaHPqBK_Z2nleCukZsFgx1-DWomrMpyAZqCa2aNLPOOSX4N0V9VnKSGXNDWGfJSZHnscDf2DHCv"
          alt="Map context"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-5 rounded-2xl shadow-2xl border border-primary/20 z-10"
        >
          <MapPin className="text-primary" size={40} fill="currentColor" fillOpacity={0.1} />
        </motion.div>
      </div>
      
      {/* Overlay gradient to blend map */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface via-transparent to-surface opacity-30"></div>
    </section>
  );
}
