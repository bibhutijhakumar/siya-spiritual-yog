import { Globe, Send } from "lucide-react";
import { Link } from "react-router-dom";
import whatsappImg from "../assets/images/whatsapp.png";

// WhatsApp number — country code ke saath, bina + ya spaces ke
const WHATSAPP_NUMBER = "919711058777";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about-us" },
    { name: "Retreats", path: "/retreats" },
    { name: "Therapy", path: "/therapy" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-slate-200/50 border-t border-slate-300/20 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">

        {/* Brand Section */}
        <div className="lg:col-span-1 space-y-6 sm:space-y-8">
          <div className="text-lg sm:text-2xl font-black text-primary tracking-tighter">SIYA SPIRITUAL YOG</div>
          <p className="text-slate-600 leading-relaxed text-balance text-sm sm:text-base">
            Redefining wellness through professional clinical care and ancient therapeutic wisdom.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-slate-300/30 flex items-center justify-center text-orange-800 hover:bg-orange-800 hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-6 sm:mb-8">Quick Links</h5>
          <ul className="space-y-3 sm:space-y-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-slate-600 hover:text-orange-800 transition-colors inline-block group text-sm sm:text-base">
                  {link.name}
                  <span className="block h-0.5 bg-orange-800 w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:col-span-1">
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-6 sm:mb-8">Legal</h5>
          <ul className="space-y-3 sm:space-y-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-600 hover:text-orange-800 transition-colors inline-block group text-sm sm:text-base">
                  {link}
                  <span className="block h-0.5 bg-orange-800 w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us — Email + WhatsApp */}
        <div className="lg:col-span-1">
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-6 sm:mb-8">Contact Us</h5>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600">
            <li>
              <a href="mailto:siyajha432@gmail.com" className="hover:text-orange-800 transition-colors">
                siyajha432@gmail.com
              </a>
            </li>
            {/* <li>
              <a href="tel:+917678208848" className="hover:text-orange-800 transition-colors">
                +91 7678208848
              </a>
            </li> */}
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
                className="inline-block hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <img
                  src={whatsappImg}
                  alt="Chat with us on WhatsApp"
                  className="h-8 sm:h-10 w-auto object-contain rounded-lg cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-6 sm:mb-8">Newsletter</h5>
          <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6">Stay updated with wellness tips and session availability.</p>
          <div className="flex bg-white rounded-lg sm:rounded-xl border border-slate-300/20 p-1.5 focus-within:border-orange-800 transition-colors">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent px-3 sm:px-4 py-2 w-full text-xs sm:text-sm outline-none"
            />
            <button className="bg-orange-800 text-white p-2 sm:p-2.5 rounded-md sm:rounded-lg hover:brightness-110 active:scale-95 transition-all">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-24 pt-6 sm:pt-8 border-t border-slate-300/20 text-center">
        <p className="text-xs sm:text-sm text-slate-600">
          © {new Date().getFullYear()} SIYA SPIRITUAL YOG Wellness Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
