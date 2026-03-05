import { TreePine, Hammer, ShoppingBag, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TreePine,
      title: 'Timber',
      description: 'Premium quality Pine, Spruce, and Fir for construction and manufacturing',
      items: ['Pine Wood', 'Spruce Lumber', 'Fir Timber', 'Custom Cuts'],
    },
    {
      icon: Hammer,
      title: 'Construction Materials',
      description: 'High-grade cement, steel, and building materials for contractors',
      items: ['Portland Cement', 'Steel Reinforcement', 'Building Supplies', 'Bulk Orders'],
    },
    {
      icon: ShoppingBag,
      title: 'Future Commodities',
      description: 'Expanding into diverse product categories to serve your needs',
      items: ['Food Imports', 'Cosmetics', 'Machinery', 'Industrial Goods'],
    },
    {
      icon: Truck,
      title: 'Logistics & Support',
      description: 'End-to-end logistics and container clearance services',
      items: ['Container Clearance', 'Freight Forwarding', 'Documentation', 'Tracking'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6">
            Premium Products & Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive trading solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all
                         duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Pre-Order & Reserved Shipments</h3>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            Secure your materials in advance with our transparent booking system.
            We offer flexible pre-order options and reserved shipment services.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold
                     hover:bg-emerald-50 transition-all duration-200 shadow-lg"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
