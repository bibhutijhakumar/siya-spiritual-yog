import { Globe, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-200/50 border-t border-slate-300/20 pt-24 pb-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
        {/* Brand Section */}
        <div className="space-y-8">
          <div className="text-2xl font-black text-primary tracking-tighter">SIYA SPIRITUAL YOG</div>
          <p className="text-slate-600 leading-relaxed text-balance">
            Redefining wellness through professional clinical care and ancient therapeutic wisdom.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-slate-300/30 flex items-center justify-center text-orange-800 hover:bg-orange-800 hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-8">Quick Links</h5>
          <ul className="space-y-4">
            {["About Us", "Retreats", "Therapy", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-600 hover:text-orange-800 transition-colors inline-block group">
                  {link}
                  <span className="block h-0.5 bg-orange-800 w-0 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-8">Legal</h5>
          <ul className="space-y-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
               <li key={link}>
               <a href="#" className="text-slate-600 hover:text-orange-800 transition-colors inline-block group">
                 {link}
                 <span className="block h-0.5 bg-orange-800 w-0 group-hover:w-full transition-all duration-300" />
               </a>
             </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-slate-950 mb-8">Newsletter</h5>
          <p className="text-slate-600 text-sm mb-6">Stay updated with wellness tips and session availability.</p>
          <div className="flex bg-white rounded-xl border border-slate-300/20 p-1.5 focus-within:border-orange-800 transition-colors">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent px-4 py-2 w-full text-sm outline-none"
            />
            <button className="bg-orange-800 text-white p-2.5 rounded-lg hover:brightness-110 active:scale-95 transition-all">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-300/20 text-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} SIYA SPIRITUAL YOG Wellness Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
