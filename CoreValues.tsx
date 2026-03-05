import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src="/Logo_final.png" alt="HornLink Global Solutions" className="h-14 w-auto mb-4" />
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted partner for high-quality imported commodities across Europe,
              Asia, and Africa. Building long-term relationships through excellence and reliability.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="mailto:info.hornlinkglobal@gmail.com" className="flex items-center space-x-2 text-slate-400 hover:text-emerald-500 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info.hornlinkglobal@gmail.com</span>
              </a>
              <a href="https://wa.me/4915901723226" className="flex items-center space-x-2 text-slate-400 hover:text-emerald-500 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+49 15901723226</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Why Us', 'Values', 'Sustainability', 'Markets', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Offices</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Bremen, Germany</p>
                <p className="text-slate-400">European Headquarters</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Hargeisa Office</p>
                <p className="text-slate-400">Regional Operations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} HornLink Global Solutions (HGS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
