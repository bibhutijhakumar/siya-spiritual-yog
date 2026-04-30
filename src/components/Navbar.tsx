import { motion } from "motion/react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import siyalogo from "../assets/images/logo.png";

const IMAGES = {
  logo: siyalogo
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-50/50 shadow-sm"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-2">
        {/* Logo */}
        <Link 
          to="/home" 
          className="flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img className="h-12 sm:h-14 w-auto object-cover" src={IMAGES.logo} alt="Siya Spiritual Yog Logo" />
        </Link>

        {/* Desktop Menu */}
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/contact')}
            className="bg-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all"
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-orange-50/50"
        >
          <div className="px-4 sm:px-6 py-4 space-y-3">
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
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors ${
                  location.pathname === item.path
                    ? "bg-orange-50 text-orange-800"
                    : "text-slate-600 hover:bg-orange-50/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
