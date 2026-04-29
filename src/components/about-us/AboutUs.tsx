import { motion } from "motion/react";
import { ChevronRight, Hotel, Flower2, Users, Smile, Bed, Mountain, Flag, Eye, BadgeCheck, Instagram } from "lucide-react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida/ADBb0ugiFACWY_7CGa12gISSZNovdaN3HkTxYdj9fWeU0BzetmAVXXS7mnoOeq4fknIL57ofY_6jaljv6RHV-1TGvDUstt4kSctNpiIj4nU2T4XY4RS4R1jYT71Xk_QRMSKmGZCOFRx8vG3zN34beE4h81AtURkVPvqWyslvJU6CPZUsMYyh4LbvPmhLAnDVyR_pj8h4x1kswH-2j_2h3kScQW_FycCqkRe72-D__bkDIbzY3zl7C4VzkU86JiqI6QWl_hcPaM0RvDYmZG0",
  intro: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO6aTIMDT6tQw6FJbZADvxaE7TtavZU7UepHTXVi79_Ud8A-w3dpUJapcOr2gJcfWXE0nWCDhLonCwDCzLkdpRkh8xRGvqC_SZegONrRwp3kEyiYK3eIKvUAku-OLcF5CxPtHhzM3N7msTBhspmsGrJq6D5Yi8DJ5NNBwaWorW6DmAdxhQ5mDvlMZSuXZaJVTmsvtj64M9iReQs95xt8YbbKMW55Nccc1QVsn8L-trmL1fR97SOWgZMq_CDeveIA6IoN6cb2HNBPZ_",
  pool: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZDDZcZTFvXtYsv3R514NC1tVgLmqZ0WjGOcpSM0fjDvf6aGzKJu2vkbFQSYHL6zZpL92qN2YR63BEkPeAqU5d9R80afkqHl0f-xG2anQXDnzmxsc3fSF-8vohj6xpNHcyvOhdSGzS7fHlhF65sWxzaGfMBUtmj3UGMa8hdOmYbvi8C91GxHHDWSlTbUjXs8QUR3KElAOU2AoSUEf2OExOFjjszAGDh5kWQ0z_v-wy2z1-aodc8fufF8S81MWOfwo8Wo0KGMxE2FC_",
  room: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoobxiLjtaxgyM1xRjk031sUJ7qZeXA-UsqYtLXJ4-Vsis8sxw1Lfks0PYsz74Gj0r30uneYl1PpAkCeIGqDF6_XZ34dNOlzyge6P05Eyn5NpTIvAuOWeCgmY41Zvb5cVvdXrveZs_p8VE6m7vZPe21pJ8KCkGpaz3-kFqgSOBSWeiFxiMluZELWyzslAI_zQfn9fpyFdkJCnqVitCO3gz7TEcmjFLF9gTugewYiNC-vWydEez-XijOgNJduCpnqnVVXELM2xfeNRr",
  dining: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUX9kLN8S_o-aku9meL96aYNnzUCJOUrcYOoMEOmp5fjDuTldr-hHrYHUB95mTutqyFyh0yfuNK11CgHSW5bWZfchBntJr_04dkBaDogbUi9eUM_kW3bFWg4gBrOqzOxQOqSOI7INls7I8rScfhUKdvKklxl8_Ch00CF7tVHphnIQQ9Vnos0CwV09C4Uzz6uWky_EN1pW4LvLzB9I6y11HCPHJrarOWijIg9X9dnagKGP8G3TlJxBGGGabQzCTo03ngseziiKq6dT-",
  himalayas: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9BLCJXHrveW7a9kS9s8WVMKvasA32TiETZRETiXld9XdOYlVfKgEe4Zj-Ekv11a5347DAvbIC507EaZESb5Gb7R14yo1IxOKg1erLAYP6LfYnZm5SsySNfUCaYdgMVFLoGiTSMcIM02A6BYjjGTja5Fqsc2u_dZEDQLgsUdixquBmUz3616vU83njSXIAuLAISsb_YaPuYxdMjFYb6pgQA0Gwhv_k6WJwZU4EkPKeYY5Y2u35TEBDs4exXUNvLX5-X3-ENlLphulX",
  insta1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpMsPXcypIekGAvMt2SIz0MHZP4exD3ab7TjZHKrwjdAX6bMtQQbKB1JcyytxNCNQQ8omXuZnS3ckC2S6Lirbfn_UnitzaioyOFKKV-Zi1gPOUY88uxXeJ2sx4Znidrp22I2z2Lv5u41MaATPVD8N4_PKdns7FsOo-QDWJRWToWVOZE_L-wt_aiDWa8ItO8y1G2rTnvCjPNqFnhs85rj03VsZT7xMBkiUlrsl3sCnebtzz2v8KPc7Vr7mKhbF4lLyXoQStaMY6l_s2",
  insta2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxKNmuw4eB5MhbXX8KqlsCRZDbdVBQ-1ZfC--SXITz9qpLFmoOEgqAoUPBXMDlAF0XOWygGI50Xape74ygTtbXXctL0kTFfTUw91S-898BnzJOFzHtPWQgMa5_wR0zIa3jFmXMMeugH53ibWeie-VTvOdSJH06HUQKjTQgYPNusN4iM91UjEbOcqND6jKWBxYluvK4n-uaysUbOx-gXHOOVEVECX1sR5l_jYm99PzoDdjFz-r2SCQUz4aE_2PaeIIeELCcxU3-e87W",
  insta3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuP3OVj_zN1eZQkmcT_1Uk1l2iE_pTRq70crlVirk_pOfha1wscBUFt5v5SdW0GBupu7UMPDP3yKIJj0IqeYepWMpI_jDH3zx5cSeygIl0k1xP4c3CQOzGON311DpXYaaa-Qc-u2SA9-EcZqsufs4xWLZaqjk1RCfYKxPFG9oMSYPkzmkh2hGDAAVCO2Ainr9yZ58c6fShfqAXvv8BzmX_uxOTg7hc7_d5fn5X4lu-I9oQW78jxsY-Qv_Wz3104V3MDYTnL46ptxQq",
  insta4: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiSrUluSTFFjTMIKqt0oIZskGdVm8JLqdiRc0GnJbTiNVoAvNkY4rWaawPYhNf9sHO2RYOheW5sh3wXlzEolUOJc2W34I3APdTtAOsORNgqh3zPwtxLtNMm_O94eINKZ5Inonj84b708WdgZRUmBQYJt2Y8MjvVU474QnSHpVjytoxS8qimxsPXzlKRxRQ698ZW0exq_qZSx_v8ZfnpxLZ4QRfdclGNokK2GSAFNdzL_-_AJJbG8tLaLIkoL3HnOTQXE0XE3oX_Ir0"
};
export default function AboutUs() {
  return (
    <div className="pt-20">
     {/* Hero Section */}
      <header className="relative min-h-[85vh] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="SIYA Wellness Retreat Hero" 
            className="w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              About Siya
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 opacity-90 leading-relaxed max-w-2xl">
              Discover Your Path to Holistic Wellness through our curated experiences designed to rejuvenate your mind, body, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary shadow-[0_32px_64px_-16px_rgba(176,47,0,0.2)]">Explore Our Journey</button>
              <button className="btn-white">View Schedule</button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="container-custom flex items-center gap-3 text-xs md:text-sm font-medium text-slate-600/60">
          <a href="#" className="hover:text-orange-800 transition-colors">Home</a>
          <ChevronRight size={14} />
          <a href="#" className="hover:text-orange-800 transition-colors">About Us</a>
          <ChevronRight size={14} />
          <span className="text-orange-800 font-bold">About Siya</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-gray-900">Welcome to <br />SIYA SPIRITUAL YOG</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded on the principles of ancient wisdom and modern therapeutic science, SIYA has been a sanctuary for those seeking restoration since 2015. Our journey began with a single vision: to create a space where the soul finds its rhythm and the body finds its strength.
              </p>
              <p>
                Over the years, we have evolved into a premier destination for holistic healing, offering bespoke retreats that blend yoga, meditation, and nutritional excellence in the heart of nature.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src={IMAGES.intro} alt="Yoga Studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-10 -left-10 bg-orange-600 text-white p-8 rounded-2xl shadow-2xl hidden md:block">
              <div className="text-4xl font-bold mb-1">2015</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Established</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-surface-container border-y border-orange-50">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {[
            { icon: <Hotel className="text-orange-800" />, label: "25+", sub: "Luxurious Rooms" },
            { icon: <Flower2 className="text-orange-800" />, label: "5", sub: "Therapy Rooms" },
            { icon: <Users className="text-orange-800" />, label: "10+", sub: "Expert Teachers" },
            { icon: <Smile className="text-orange-800" />, label: "1000+", sub: "Happy Guests" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1 font-display">{stat.label}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-600/60">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">Our Beautiful Retreat</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[IMAGES.pool, IMAGES.room, IMAGES.dining].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100 group"
              >
                <img src={img} alt={`Retreat Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Feature */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-container to-[#d84315] rounded-[2.5rem] p-8 md:p-16 lg:p-24 text-white overflow-hidden relative shadow-3xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">Located in the Himalayas</h2>
                <p className="text-lg md:text-xl font-light mb-12 opacity-90 leading-relaxed">
                  Perched on the pristine foothills of the world's most spiritual mountain range, our location offers thin, pure air and silence that speaks to the soul. Here, the altitude meets attitude, allowing for a deeper level of meditative focus.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                    <Bed className="mb-4 text-orange-200" />
                    <h4 className="font-bold mb-2 text-lg">Accommodation</h4>
                    <p className="text-sm text-orange-50/80 leading-relaxed">Eco-friendly luxury suites with floor-to-ceiling mountain views.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                    <Mountain className="mb-4 text-orange-200" />
                    <h4 className="font-bold mb-2 text-lg">Activities</h4>
                    <p className="text-sm text-orange-50/80 leading-relaxed">Guided treks, nature forest bathing, and sunset yoga sessions.</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <img src={IMAGES.himalayas} alt="Himalayan View" className="w-full aspect-video lg:aspect-square object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom grid md:grid-cols-3 gap-16 md:gap-12">
          {[
            { 
              icon: <Flag className="text-orange-800" />, 
              title: "Mission", 
              quote: '"To empower individuals to reclaim their vitality through intentional stillness and guided transformation."',
              list: ["Authentic healing practices", "Sustainable environmental design", "Inclusive wellness for all levels"]
            },
            { 
              icon: <Eye className="text-orange-800" />, 
              title: "Vision", 
              text: "To become the global gold standard for restorative luxury retreats, where tradition meets innovation.",
              list: ["Expanding to five global locations", "Pioneering digital-detox protocols", "Integrating cutting-edge biohacking"]
            },
            { 
              icon: <BadgeCheck className="text-orange-800" />, 
              title: "Accreditation", 
              text: "We maintain the highest standards of safety and professional excellence in the wellness industry.",
              list: ["Yoga Alliance Gold Member", "International Spa Association (ISPA)", "Global Wellness Institute Certified"]
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col gap-6"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-900">{item.title}</h3>
              
              {item.quote && (
                <div className="border-l-4 border-orange-800 pl-6 py-2 italic text-gray-600 font-medium text-lg leading-relaxed">
                  {item.quote}
                </div>
              )}
              
              {item.text && (
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.text}
                </p>
              )}

              <ul className="space-y-4">
                {item.list.map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary group">
                    <BadgeCheck size={18} className="text-orange-800 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-sm font-semibold tracking-wide">{li}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-24 md:py-32 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">Follow Our Journey</h2>
            <div className="flex items-center justify-center gap-2 text-orange-800 font-bold text-lg hover:underline transition-all cursor-pointer">
              <Instagram size={20} />
              <span>@siya_spiritual_yoga</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[IMAGES.insta1, IMAGES.insta2, IMAGES.insta3, IMAGES.insta4].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md bg-gray-200"
              >
                <img src={img} alt={`Social ${idx}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-800 p-12 md:p-24 rounded-[3rem] text-center text-white relative shadow-[0_32px_64px_-16px_rgba(176,47,0,0.3)]"
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Ready to Begin Your Wellness Journey?</h2>
            <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Spaces are limited. Book your transformation today and step into a life of balance and peace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-orange-800 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-lg hover:bg-orange-50 transition-colors shadow-2xl active:scale-95">
                Book Your Retreat
              </button>
              <button className="border-2 border-white/50 text-white px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-orange-800 transition-all active:scale-95">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
