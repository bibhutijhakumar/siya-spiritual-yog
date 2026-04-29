import { motion } from "motion/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import siyalogo from "../assets/images/logo.png";

const IMAGES = {
  logo: siyalogo
};

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-50/50 shadow-sm"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-2">
        {/* <Link 
          to="/home" 
          className="text-2xl font-extrabold tracking-tighter text-orange-800 hover:opacity-80 transition-opacity"
        >
          <img className="w-50" src={IMAGES.logo} alt="Siya Spiritual Yog Logo" />
        </Link> */}

        <div className="hidden md:flex items-center space-x-10">
          {[
            { name: "Home", path: "/home" },
            { name: "About Us", path: "/about-us" },
            { name: "Retreats", path: "/retreats" },
            { name: "Therapy", path: "/therapy" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-800 ${location.pathname === item.path ? "text-orange-800 border-b-2 border-orange-800 pb-1" : "text-slate-600"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all">
          Book Now
        </button>
      </div>
    </motion.nav>
  );
}
