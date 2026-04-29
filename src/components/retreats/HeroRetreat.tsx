import { motion } from "motion/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Leaf, 
  MapPin, 
  Dumbbell as FitnessCenter, 
  Brain as Psychology, 
  CloudRain as Spa, 
  Globe, 
  Mail, 
  Menu,
  ChevronRight,
  Play
} from "lucide-react";

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
export default function HeroRetreat() {
  const navigate = useNavigate();
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[550px] sm:min-h-[650px] md:h-[870px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Peaceful meditation in nature" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdK4gFsResOfVh655KeebEc5RsRhEwG5ybB0OjyZRtVI3tujWz0RCD3rM13KQ2rIm9QUDkiNqVSLEZULZHR337cquWfy3uCCVETi9mLFm95LemTqNrjpbtBL6kslk-qaGAoDAWrB30uQljEf-wr0Qk5ynxb3G141qHIdWw9tnnfpEyMMCnCONm4OowFpvadIjrOWw07NAs83iy4CLfyJeGsquw638eZN3D2Z6ibwupyg0HH16dzM0L_UQElJLQ6GBdOZGWKOcKGoXf" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Reconnect. Rebalance. Renew.</h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white/90 leading-relaxed">
              Experience a peaceful yoga retreat away from daily stress, designed to restore your inner harmony.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="bg-primary-container text-white font-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition-transform text-sm sm:text-base">
                Explore Retreats
              </button>
              <button className="border-2 border-white text-white font-label-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl backdrop-blur-sm hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play size={16} fill="currentColor" />
                Watch Experience
              </button>
            </div>
          </motion.div>
        </section>

        {/* Experience Bento Grid */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-bold px-4 py-1 rounded-full uppercase tracking-widest text-[9px] sm:text-[10px]">
              Curated Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">What You'll Experience</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-6 h-auto md:h-[700px]">
            {/* Daily Yoga */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 relative rounded-xl sm:rounded-2xl md:rounded-[32px] overflow-hidden group min-h-[300px] sm:min-h-[350px] md:min-h-0"
            >
              <img 
                alt="Daily Yoga Session" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuLmihPmeXa59iQeIjJzV6GdJzyyDx-SkglAHrcPqcprf3f6sAwHlCKaIS13H9-U6WAME97naXvUBiP9Mm0nJri0XusWCJgOkjXG3IvgJXinjKZhnWU8jJBlPCu4sdgYFortKjK5DJ3NS0_iTwxTmDO2kSr1zwSreqqzenfMCdhJPY4yWupR4LLeURbNaQ1-WG-nY5YZg-fYT4-APAGxxx_AHfflaTbWdjOGuZLx48bvPFataGYnadOzLl9JeM66LSDQNUgUk_9qW0" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white pr-4 sm:pr-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Daily Yoga</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/80">Guided sessions for all levels in our sun-drenched pavillion.</p>
              </div>
            </motion.div>

            {/* Meditation */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 relative rounded-xl sm:rounded-2xl md:rounded-[32px] overflow-hidden group min-h-[250px] sm:min-h-[300px] md:min-h-0"
            >
              <img 
                alt="Meditation Session" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzVZYsYBV9zjKKMatEfmIeHTnp7GIzD_qP-JNhSnGmegQMxnO5FJ15kcJVz_t54r5e-bnBS8_VEThYgVPS1_JVc41anO57xkn29OyG8IBq7Q1bmcke1HS3r5qWSOA5_iknCVscvCvfCX21PsS70GR1osq42YzSQ4EBSQQyiuMEtvPPFlK9GFNG7ITseU0wyT-gaVHOs7i_IGOYrUFkcx1n4K1iCsBkyurJX8Ed5pcRNCtmQaqNXkl5MctvDWImsy4N5ssEfCUNt1-1" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Meditation</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/80">Deep mindfulness practices to quiet the mind.</p>
              </div>
            </motion.div>

            {/* Nature */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative rounded-xl sm:rounded-2xl md:rounded-[32px] overflow-hidden group min-h-[200px] sm:min-h-[250px] md:min-h-0"
            >
              <img 
                alt="Nature Walks" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8C8SdPXlW5va2IWbUwdMFMwMxMfn0fUZz5LMlic_05ZD2KBW8KpblTg_LiCWW1bz2fAwTMIouX90qw9P3RcTWnU3cOctrANoRxNNxg9U-43lnu_X8hJJbQRUKifSHid4nfMO7XRvTE6KYb1hIPbsCvnJJxdtiUnCQWJQFN4ygfhnAudiXUMGjVb4Uxa-tQnxdt1445ofAdwnA5lc0lUDEdqRG2h1IMrNWSz6IyfrU_Z-Bgi2ic8EoPBFl6e__ni4XsmgfuYwC1h5" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white text-lg sm:text-xl md:text-2xl font-title font-semibold">
                Nature
              </div>
            </motion.div>

            {/* Personal Guidance */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative rounded-xl sm:rounded-2xl md:rounded-[32px] overflow-hidden group min-h-[200px] sm:min-h-[250px] md:min-h-0"
            >
              <img 
                alt="Personal Guidance" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqGWdwIDxVp-m9sexd9XPPox56buk0eXg4hmImNspJfU8n3dY9hmKCw6ePKk_RezU29Qz0mT0nc74oR4uS6xdLJIK9elmSKNnE8pa3Mz8gd_DmSCjCuOdv56LU3tdyfQV7MJAm7XDagAi4C2HEtSorkllmM9BGEiAz_cm04zKv4a7xDOz68yE9rS0kLnX59O2wwdWMUY20hSPkJ1vJucTNGZ_dzVQDQZFqJM7Ujvw3geIS6_tbxor3_9ebKMIjh-RZD5sxblWeJLSf" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white text-lg sm:text-xl md:text-2xl font-title font-semibold">
                Personal Guidance
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="bg-surface-container-low py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              <HighlightCard 
                icon={<Users className="w-6 h-6 text-primary" />}
                title="Small Groups"
                description="Intimate settings with a maximum of 12 participants ensuring personalized attention and deep connection."
                colorClass="bg-red-50"
              />
              <HighlightCard 
                icon={<Leaf className="w-6 h-6 text-slate-700" />}
                title="Beginner Friendly"
                description="No experience required. Our retreats are designed to nurture everyone from curious novices to advanced practitioners."
                colorClass="bg-blue-50"
              />
              <HighlightCard 
                icon={<MapPin className="w-6 h-6 text-primary" />}
                title="Peaceful Locations"
                description="Secluded sanctuaries far from urban noise, curated for their natural energy and profound serenity."
                colorClass="bg-orange-50"
              />
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-start">
            <div className="md:w-1/3 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">A Day of Rituals</h2>
              <p className="text-sm sm:text-base md:text-lg text-on-surface-variant mb-6 sm:mb-8">
                Our days are structured to follow the natural rhythm of the sun, balancing active movement with profound stillness.
              </p>
              <div className="rounded-lg sm:rounded-2xl md:rounded-[32px] overflow-hidden shadow-xl aspect-square md:aspect-auto">
                <img 
                  alt="Healthy Meal" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu4QS9UZhm79153rVp4lQMKwFkgDKLFaTXBcdtDOhjtOQN37BqiCnYQ122Tm_e9J9oeJURGPzi0tNqIVyHa6eJluOILpodDrOMkU7ZltpalLflaKpVEbMZeHU2fF8u7VK98Kalr8aoB9t2bQ11touDicnT7L4JMAnJChtKo-E_WamW0ZSW2wfJv6mIPJmbUTkFzhzO2dJTmuNPeza3R0U-m2nV2r1mIIXNTNSl8t8fvxZzWrm8peJKIkKlDgkawck7IqPxByUOkn63" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 w-full space-y-3 sm:space-y-4">
              <ScheduleItem time="07:00" title="Morning Meditation" description="Awaken the senses with guided pranayama." />
              <ScheduleItem time="08:30" title="Morning Yoga Flow" description="Vinyasa session to energize the body." />
              <ScheduleItem time="11:00" title="Healthy Nutritious Meals" description="Organic farm-to-table brunch experience." />
              <ScheduleItem time="14:00" title="Relaxation & Spa" description="Personal time for treatments or forest bathing." />
              <ScheduleItem time="17:00" title="Restorative Evening Yoga" description="Gentle stretches to prepare for deep sleep." />
            </div>
          </div>
        </section>

        {/* Path to Transformation */}
        <section className="py-section bg-primary text-on-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10 w-full aspect-[4/5]">
                  <img 
                    alt="Person in yoga pose" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxpd2twKVvUPH9ErDzMELJyPvx6Msd-OvrE3DpSa4P8qhh0Dl72jb9kI8XbuW3pU5fiuTtdf28F2CVME0uz1u-JZo4CzzsWRmVbLZe-AjC7pB6T_qi_RwqALiX13K0gfdGp89NVHEbyJX4u3DL6GecY4vvPaLn-kpGWlY0JbvABuUE0WkUCPylhgGszuTC-jftKYU02rz9HPLK6hq0ToSiDLD_HMznM6N2OVM6j9QokmBl_Jg1vmYskIp767IrgfBZwqNr-zHpV6K-" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <div>
                <h2 className="text-headline-lg mb-12">The Path to Transformation</h2>
                <div className="space-y-10">
                  <BenefitItem 
                    icon={<FitnessCenter size={36} className="text-orange-200" />}
                    title="Improved Flexibility"
                    description="Release physical tension and improve mobility through expert-led movement sessions."
                  />
                  <BenefitItem 
                    icon={<Psychology size={36} className="text-orange-200" />}
                    title="Mental Clarity"
                    description="Clear the mental fog and rediscover your focus in an environment free of distractions."
                  />
                  <BenefitItem 
                    icon={<Spa size={36} className="text-orange-200" />}
                    title="Reduced Stress"
                    description="Lower cortisol levels and find lasting calm through integrated wellness practices."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section px-6 md:px-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline-lg mb-8">Ready to begin your journey?</h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              Limited spaces available for our upcoming seasonal retreats. Secure your spot in paradise today.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary text-white font-label-bold px-12 py-5 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20 cursor-pointer"
            >
              Book your retreat now
            </button>
          </motion.div>
        </section>
      </main>
  );
}

function HighlightCard({ icon, title, description, colorClass }: { icon: ReactNode, title: string, description: string, colorClass: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="p-10 bg-white rounded-[32px] shadow-sm border border-slate-50 hover:shadow-xl hover:shadow-primary/5 transition-all"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
        {icon}
      </div>
      <h3 className="text-xl mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ScheduleItem({ time, title, description }: { time: string, title: string, description: string }) {
  return (
    <div className="flex items-center gap-6 p-6 rounded-[24px] bg-white border border-slate-100 hover:border-primary/20 transition-all hover:translate-x-2">
      <div className="font-title font-bold text-primary w-20 text-xl">{time}</div>
      <div className="h-10 w-px bg-slate-200"></div>
      <div>
        <h4 className="font-title font-bold text-lg">{title}</h4>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
function BenefitItem({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-headline-md text-2xl mb-2">{title}</h4>
        <p className="text-white/70 text-body-md">{description}</p>
      </div>
    </div>
  );
}

function FooterLink({ children, active = false }: { children: ReactNode, active?: boolean }) {
  return (
    <li>
      <a href="#" className={`text-sm transition-all hover:text-primary ${active ? "text-primary font-bold" : "text-slate-500 hover:underline underline-offset-4"}`}>
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
      {children}
    </a>
  );
}