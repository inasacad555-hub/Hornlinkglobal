import { ArrowRight, Zap, Package, Headphones } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/WhatsApp_Image_2026-02-07_at_11.03.34_(1).jpeg',
    '/WhatsApp_Image_2026-02-07_at_11.03.34_(2).jpeg',
    '/WhatsApp_Image_2026-02-07_at_11.03.34_(3).jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-3xl -ml-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div>
                <img src="/Logo_final.png" alt="Horn Link Global Solution" className="h-20 w-auto mb-4" />
              </div>
              <div className="inline-block">
                <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm text-yellow-300 rounded-full text-xs font-bold tracking-widest border border-yellow-400/40">
                  Global Import & Export Platform
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Trade <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Smarter.</span> Grow <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">Faster.</span>
              </h1>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
              Connect with suppliers across Europe, Asia, and Africa. Premium materials delivered with speed, reliability, and transparency you deserve.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="bg-blue-900/50 backdrop-blur-sm border border-blue-800 rounded-xl p-4 hover:border-yellow-400/50 transition-colors">
                <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">48h</p>
                <p className="text-xs text-blue-400 mt-1">Fastest Quotes</p>
              </div>
              <div className="bg-blue-900/50 backdrop-blur-sm border border-blue-800 rounded-xl p-4 hover:border-yellow-400/50 transition-colors">
                <Package className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-blue-400 mt-1">SKUs Available</p>
              </div>
              <div className="bg-blue-900/50 backdrop-blur-sm border border-blue-800 rounded-xl p-4 hover:border-yellow-400/50 transition-colors">
                <Headphones className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-blue-400 mt-1">Expert Support</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 rounded-lg font-bold
                         hover:from-yellow-400 hover:to-amber-400 transition-all duration-200 flex items-center
                         justify-center space-x-2 shadow-xl hover:shadow-2xl shadow-yellow-500/30
                         transform hover:scale-105"
              >
                <span>Start Sourcing</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-300 rounded-lg
                         font-semibold hover:bg-yellow-500/10 transition-all duration-200"
              >
                Explore Suppliers
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-[600px]">
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>

            <div className="relative h-full rounded-3xl overflow-hidden border border-blue-800 shadow-2xl group">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Supply Chain ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent group-hover:from-slate-950/40 transition-colors duration-300"></div>

              <div className="absolute top-6 left-6 right-6 z-20 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'bg-yellow-400 w-8'
                        : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-yellow-500/20 group-hover:border-yellow-400/40 transition-colors pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
