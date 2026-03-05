import { Building2, Factory, ShoppingCart, Car, Sparkles, UtensilsCrossed, Package } from 'lucide-react';

export default function TargetMarkets() {
  const markets = [
    {
      icon: Building2,
      title: 'Construction Materials',
      description: 'Timber, cement, steel, and building supplies for contractors and developers',
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      description: 'Raw materials and industrial goods for production facilities',
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Quality products for retailers and online marketplaces',
    },
    {
      icon: Car,
      title: 'Automotive & Machinery',
      description: 'Parts, equipment, and machinery for automotive industries',
    },
    {
      icon: Sparkles,
      title: 'Cosmetics',
      description: 'Premium cosmetic products for beauty and personal care markets',
    },
    {
      icon: UtensilsCrossed,
      title: 'Food & Beverages',
      description: 'High-quality food imports for distributors and retailers',
    },
    {
      icon: Package,
      title: 'Container Clearance',
      description: 'Comprehensive customs and container clearance services',
    },
  ];

  return (
    <section id="markets" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
            Industries We Serve
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6">
            Target Markets
          </h2>
          <p className="text-xl text-gray-600">
            Serving diverse industries across Europe, Asia, and Africa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all
                         duration-300 border border-gray-100 hover:border-emerald-500
                         hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center
                              mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {market.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {market.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">Europe</div>
            <p className="text-gray-600">Headquartered in Bremen, Germany</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">Asia</div>
            <p className="text-gray-600">Strategic operations across Asia</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">Africa</div>
            <p className="text-gray-600">Office in Hargeisa and regional presence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
