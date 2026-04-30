/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  CheckCircle2,
  Baby,
  ChevronRight,
  ArrowRight,
  Star,
  Instagram,
  Mail,
  MapPin,
  Users,
  Heart,
  Brain,
  Wind,
  ShieldCheck,
  Stethoscope,
  Move,
  Camera,
  Search,
  Link
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import homeBannerImg from "../../assets/images/home-banner.png";
import siyajha from "../../assets/images/siya-amity-2.png";
import siyalogo from "../../assets/images/logo.png";


// Fallback for icons not easily found in Lucide (using closest matches)
const KidsIcon = () => <Users className="w-6 h-6" />;
const SeniorIcon = () => <Heart className="w-6 h-6" />;

const IMAGES = {
  logo: siyalogo,
  homebanner: homeBannerImg,
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbSW5URfBQgQqVo9k2pmAo_9Ny782bBKp9QzT-KXwVv8uT8yWuEPgrhxQGcmIDP66AA2byRCQFFZNe9SWXmB89JpE7j1QBueZO-nofr6BAdrV2ZTTEVWRCi2_TqpAhWNkSBr0g5qKYIiyqrWukyjicwvreDkzAz8-VC1x6gEPaG4fJVwLr-qSNItbTbfSwwNneQd68XbHHM2T-3GIQkW0ay0jM3nuZK_ztTNXe9yV3OAALvFqnWsEcdd1j9UwfwqwsQNZt1ClTVef8",
  siyayog1: siyajha,
  bento1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdeA47u_oZqSsQPYqJTvE2c1OYsostQ63CCzgotD6aBorGkqNAiDzS8ZM50usDhVgm8JljM7vuXQkZXvSs98oW9QZOBGlosCB12WSDlDWfrEjYI35ka4L1toxHVWA89HlZU5_KKc_kfF_NUfANzZLaV5OR78vZi_xszZ7PxD4Zb5GUTVoe9RT1wuYUTw9MOk8kEU1vlbDhCJEicEchty9cTCXHcXTmEGfzPPCYi_QtzcQZ2TIggF4F1gcUjsijVR-8IBm_8bLAM3wi",
  bento2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUnarooy7YdZagBngyohKaDO7A2TpsSybv7B_4ixnGHgF21sQWVs4DIs0L_svSsW3y1pm1QYxpnF4aBJqteakdSiuvMXNowgQYBM8Objl8TU6wpH17y_EYKD9nb3RJ_-nEvUCWc73OOAWaWVbkF03ir8DWGVZFgGH1KzyHR2oH3nakWEbpJP2Joob8-qfPiJF_xoVUlK3YF0qdFeiL4NI5xbGv8Wu-NqazUHS1mTV7ANbArb4MONnlSppQNQRwhSbmaI_A0czCqFSp",
  program1: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Q8hzD1r7ZD5EvXQBSXpd6AJ9jDKHAm8dJk9LfncuCBRzTfz1XZlNOPHd_ZBfS3tXGcdR0lbcp_Pad_OgBywKAccG75kFNsj_PEr584tbXMkj7m1vevAqqJrY7gRTkHmI4szB6D05yuwxqxmp9T7cFphgswiukEa8lN6W7XP-QRe9UQvER4ndNTdBptUAHSdrWily8J3CIMKGvPUWDicC0T37SdXxlqsgetpBibFq6K33SZicisFfhk9E4aqHSsy1xqE_IsizLhBu",
  program2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHRKi6pPanDxEcWEmglL03Lr7YseItkWp55HesY1GmJ4kfMtVORWSBubupUPSnyTq1HeKtr4Lb6C9khOKdTp1zR7hChSZcJ1O-VT1LlQhrq-MP4kIpx2nT5o10rOASwVbOC4iimqm43v5CacFtBn3QaVX9GC_LITL5TB3SkCe7R_831pwqJVGkNrFzJ_0Gl9JriDTR7vG__AjhCOV5mLRjpCPS-3fOTob5knc9rPQ2EpZ5uq_r1THoTWkMMDWL0keor_1s7x3qX2Ma",
  program3: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRH6cA0lKVc4hC4WQSMJF0Fi2nFbdE6n3CufEtkVW4RBHan2eykvfOl0tY8uwTmj0haFh8uT4RpYdEjoyBUqXSX8kHePPG9sdx8rEx6-tmMSKVW8IR1RkL5lvf0AFq3wsR40Crr1YJ2WLvm3ihiECnJQwE-jO_EyDBTO46WIcbNQtJUFrD3CE1E4xn1C18npCxzSdF0xkr78yNx3qnj16BlnO4ZLdDYCXJX91mXEXNLsvlUtLH6AiExcVbvf5aFommoFE8YlgBwxpj",
  program4: "https://lh3.googleusercontent.com/aida-public/AB6AXuDegiQKy5072aQHPGf94rzLdgcijxBh3bV79heASkGhSxrXqbtiYCyaN2AE7aP8q_TOaT1_hSBrxhwnQt8H77Yd-VFnG6vnjF-fVtmJcExjz-M_z3sL6TpqfrMTzREeu8ZoMZFisLUwpy5smvQnpFeMvoe9Rtf0PnQPw-SbsseFUFydkMetThFA3mmWUJa6oT714v7Rt5OUzAiRxngl6as3KVNMGX8UytHv6ZnUMyF8wRu6VTNUiR0adb8BdUl5JWMZx-X7wcnkrJ71",
  phil1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgs-LAwzzA1TjCYK9q2hjBzm8-HfnciCwWkvv9rCOKcJUn9DAhXSx7FcdmQZhVH2oxAIkS73bMjUad0FrFjCwVE-AYIYOtsqu79v_8nExkX-gTxQKr936JrCH1xbjwsQpju1G5fTR-wblcyBgpEFaJrl6fn3lqw174FWybqAjlAaXlM1Upf8tDOTkfDt3aFnBTTYboYrAPNCHdmjMNh1F2T_iKk4MLzSBUzTyDuJo30gwYrb5s8ziZMzcHxwwK8u4cj7-UZcBs-T-9",
  phil2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUEFigs_CzbCbMjLtpsYQsYOZKE5_ep-nBw1mcvjdOoU_MHgOC70t7pYbEp2pSd-3FwBAey5knoFRKsj1lPxTdz7EuqAhG2MaRpHfUHek3_sMXASpRJ8EKXG7lWIEjyEU1Y6qrhoT7WxphbUtady2zdWugvjpOhwgQ_xINiPTaL0vuiJc-g3oNri_tSFflrclj92vx4DO4QvPQ-2o6F9YkumZ2LVglwJz4j3T5vblwj5p2j24DiGqTcKA9Z6-1nxSBi1cnPhSXN_IS",
  cta: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-e8DphTKE9as1PzLeIhtPFlaWbb7ABZYjtYqS5ar8m_jE738nXWHJ_dCtI-14dm8mTbTqlFjgY1bLWoogS1EaMjXDSKoKgKtzpW_4yxzQ8CzZlUN31joc2NhgOiufP0Y54ZjFGWqsaIUqVCjP6PE8G7ohudnGpBb1ixGo0FRqWOaXwTtp_GxM67Tew_WCKtNBt8fEFxpbyaGEV0Q8ZgKedwCOa5ROa6tx7BFG8KipMzPEGAesxMSHIZQjh_fbBAW5Dt3IwuDJKnLj",
};

export default function HomePage() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">


      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" className="relative min-h-[550px] sm:min-h-[650px] md:min-h-[90vh] flex items-center overflow-hidden pb-10 sm:pb-16 md:pb-20 pt-20 sm:pt-24 md:pt-20">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.homebanner}
            alt="Yoga Practice"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* MOBILE OVERLAY */}
        <div className="absolute inset-0 bg-white/80 md:hidden"></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md items-center text-center md:text-left flex flex-col gap-4 sm:gap-6"
          >

            {/* LOGO (hidden on mobile) */}
            <img
              src={IMAGES.logo}
              alt="Siya Logo"
              className="hidden md:block w-auto h-56 object-contain"
              referrerPolicy="no-referrer"
            />

            {/* TEXT */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              Certified yoga guidance designed to help you build strength, improve flexibility, and achieve inner peace — for all age groups.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
              <button onClick={() => navigate('/contact')} className="bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:brightness-110 transition-all active:scale-95 w-full sm:w-auto">
                Start Your Journey
              </button>

              <button onClick={() => navigate('/contact')} className="bg-white border-2 border-orange-600 text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-orange-50 transition-all active:scale-95 w-full sm:w-auto">
                Book a Demo Class
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-white py-8 sm:py-12 md:py-16 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "500+", label: "Training Hours" },
            { value: "1000+", label: "Happy Students" },
            { value: "Daily", label: "Wellness Sessions" }
          ].map((stat, i) => (
            <div key={i} className="px-2 sm:px-4 py-4 sm:py-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-600 mb-2 font-display">{stat.value}</p>
              <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <img
                src={IMAGES.siyayog1}
                alt="Siya Jha"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 left-2 bg-orange-700 text-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl max-w-xs shadow-xl z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ShieldCheck className="w-8 sm:w-10 h-8 sm:h-10 mb-3 sm:mb-4 opacity-90" />
              <p className="text-lg sm:text-2xl font-bold font-display leading-tight mb-2">Siya Jha</p>
              <p className="text-xs font-medium opacity-80 uppercase tracking-widest leading-relaxed">
                Certified Yoga Instructor (500+ Hours)
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-6 sm:mb-8">Welcome to <br />SIYA SPIRITUAL YOG</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
              Founded by Siya Jha, a certified yoga instructor with 500+ hours of professional training, SIYA is dedicated to helping individuals achieve holistic wellness through authentic yoga practices.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-8 sm:mb-12 leading-relaxed">
              With over 5 years of experience, we specialize in curating transformative sessions for diverse age groups, from energetic children to focused adults and active senior citizens.
            </p>
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">

                <div className="p-4 sm:p-6 md:p-8 bg-orange-50 rounded-lg sm:rounded-xl shadow-sm border-t-4 border-orange-400">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-orange-900">Kids Yoga</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Playful poses and storytelling designed to improve focus, confidence, and flexibility for young minds.
                  </p>
                  <button className="text-sm sm:text-base text-orange-700 font-semibold hover:underline">Explore Program →</button>
                </div>

                <div className="p-4 sm:p-6 md:p-8 bg-blue-50 rounded-lg sm:rounded-xl shadow-sm border-t-4 border-blue-400">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-blue-900">Senior Wellness</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Gentle movements and breathing techniques tailored to enhance mobility, balance, and joint health.
                  </p>
                  <button className="text-sm sm:text-base text-blue-700 font-semibold hover:underline">View Schedule →</button>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (Bento Grid) */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose SIYA SPIRITUAL YOG</h2>
            <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-orange-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-1 lg:col-span-8 bg-white p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            >
              <div className="flex-1">
                <Brain className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-orange-600 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Expert Guidance</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Benefit from professional instruction that blends ancient wisdom with modern physiological understanding for a safe, effective practice.
                </p>
              </div>
              <div className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48">
                <img src={IMAGES.bento1} alt="Guidance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-1 lg:col-span-4 bg-orange-600 text-white p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <Users className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">For All Age Groups</h3>
                <p className="opacity-90 leading-relaxed text-sm sm:text-base md:text-lg">
                  Customized programs tailored to meet the unique physical and mental needs of every generation.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-1 lg:col-span-4 bg-amber-100 text-orange-700 p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg"
            >
              <Heart className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-orange-800">Specialized Care</h3>
              <p className="opacity-90 leading-relaxed text-sm sm:text-base md:text-lg text-orange-800">
                Expertly designed Prenatal & Postnatal programs to support mothers through their sacred journey.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-1 lg:col-span-8 bg-white p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
            >
              <div className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 order-2 md:order-1">
                <img src={IMAGES.bento2} alt="Wellness" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <Wind className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-orange-600 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Holistic Wellness</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive approach that balances physical flexibility with mental clarity and emotional resilience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Programs</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700">Carefully structured sessions designed to accommodate every level of expertise and life stage.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-orange-600 font-bold hover:translate-x-1 transition-transform text-sm sm:text-base">
              View All Programs <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Kids Yoga", desc: "Building balance and focus through playful movement and mindfulness games for children.", img: IMAGES.program1 },
              { title: "General Fitness", desc: "Improve overall health, flexibility, and core strength through dynamic Hatha and Vinyasa practices.", img: IMAGES.program2 },
              { title: "Prenatal Yoga", desc: "Gentle, supportive movements designed to nurture both mother and baby throughout the pregnancy.", img: IMAGES.program3 },
              { title: "Meditation", desc: "Master the art of Pranayama and mindful meditation to calm the nervous system and clear the mind.", img: IMAGES.program4 }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="h-40 sm:h-48 md:h-64 overflow-hidden relative">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h4 className="text-sm sm:text-lg md:text-xl font-bold">{program.title}</h4>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-xs sm:text-sm md:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {program.desc}
                  </p>
                  <button className="flex items-center gap-1 text-orange-600 font-bold text-sm sm:text-base">
                    Learn More <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">More Than Just Yoga</h2>
            <div className="border-l-4 border-orange-600 pl-6 sm:pl-8 mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl md:text-2xl italic text-slate-700 leading-relaxed font-medium">
                "Yoga is not just about touching your toes, it's about what you learn on the way down."
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-8 sm:mb-10 leading-relaxed">
              At SIYA SPIRITUAL YOG, we believe in a practice that extends beyond the mat. Our focus remains on discipline, mindfulness, and inner peace, fostered within a calm and supportive environment that honors each individual's unique journey.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Wind, text: "Mindful Movement" },
                { icon: Brain, text: "Inner Discipline" },
                { icon: Users, text: "Supportive Community" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                    <item.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="font-bold text-slate-950 text-sm sm:text-base md:text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="pt-12"
            >
              <img src={IMAGES.phil1} alt="Hands" className="rounded-3xl shadow-xl w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={IMAGES.phil2} alt="Studio" className="rounded-3xl shadow-xl w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center pt-10">Stories of Transformation</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Ananya M.", role: "Parent", text: "The kids yoga classes are incredible. My son has developed so much focus and body awareness. Siya is patient and professional.", initials: "AM" },
              { name: "Rajesh S.", role: "General Student", text: "As a senior, I was worried about my joints. The customized sessions here have significantly improved my flexibility and range of motion.", initials: "RS" },
              { name: "Leila K.", role: "Prenatal Student", text: "Siya's prenatal yoga sessions were my anchor during pregnancy. She understands the body so well and provides such a safe space.", initials: "LK" }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-surface rounded-3xl border border-gray-100 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex gap-1 text-primary mb-8">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-xl italic text-secondary leading-relaxed mb-10">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary group">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-on-surface">{t.name}</p>
                    <p className="text-sm text-secondary font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Follow Our Journey</h2>
          <p className="text-xl text-secondary mb-12">Connect with our community and get daily wellness tips.</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-gray-800 transition-all"
          >
            <Instagram className="w-6 h-6" />
            Follow us on Instagram @siya_spiritual_yog
          </motion.a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-primary rounded-[3rem] p-16 md:p-24 text-center text-white overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img src={IMAGES.cta} alt="Pattern" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Ready to Begin Your Wellness Journey?</h2>
              <p className="text-xl md:text-2xl mb-14 opacity-90 leading-relaxed font-light">
                Take the first step toward a healthier, happier life today. Experience the power of mindful movement.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button onClick={() => navigate('/contact')} className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all">
                  Book Free Demo
                </button>
                <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
