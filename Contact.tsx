import { Globe, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Your Trusted Global Trading Partner
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              HornLink Global Trading is headquartered in Bremen, Germany, with strategic
              operations across Europe, Asia, and Africa. We specialize in high-quality
              imported commodities including construction timber, cement, and other essential
              materials.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to provide reliable, premium products to contractors, NGOs, and
              businesses across the Globe, building long-term partnerships based on trust
              and excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Global Reach</h3>
                  <p className="text-sm text-gray-600">
                    Operations in Europe, Asia, and Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                  <p className="text-sm text-gray-600">
                    Highest standards in all products
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/WhatsApp_Image_2026-02-07_at_11.03.34_(2).jpeg"
              alt="Construction materials"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-xl shadow-xl max-w-xs">
              <Target className="h-8 w-8 mb-3" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-emerald-50 text-sm leading-relaxed">
                To establish HGS as the most trusted import and supply chain partner by
                ensuring high-quality products, reliable delivery, and long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
