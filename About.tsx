import { Leaf, TrendingDown, RecycleIcon, Sprout } from 'lucide-react';

export default function Sustainability() {
  const pillars = [
    {
      icon: Sprout,
      title: 'Responsible Sourcing',
      description: 'We partner exclusively with timber suppliers who follow certified reforestation protocols, ensuring our wood products are as renewable as they are durable.',
    },
    {
      icon: TrendingDown,
      title: 'Logistics Efficiency',
      description: 'By optimizing our import and export routes, we actively work to reduce our carbon footprint and minimize fuel consumption in every shipment.',
    },
    {
      icon: RecycleIcon,
      title: 'Waste Reduction',
      description: 'In our construction material supply chain, we prioritize circular economy principles—reducing site waste and encouraging the use of recyclable industrial materials.',
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl mb-6">
              <Leaf className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to Sustainability
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We believe that industrial growth and environmental stewardship must go hand-in-hand.
              Our sustainability management strategy focuses on three key pillars:
            </p>

            <div className="bg-emerald-600 rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-white font-medium leading-relaxed italic">
                "Sustainability isn't a goal; it's our standard. We are committed to ethical
                sourcing and green logistics to ensure that the infrastructure of today doesn't
                compromise the world of tomorrow."
              </p>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src="/WhatsApp_Image_2026-02-07_at_11.04.15_(1).jpeg"
              alt="Sustainable sourcing and FSC certified materials"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all
                         duration-300 border-2 border-emerald-100 hover:border-emerald-400
                         hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl
                              flex items-center justify-center mb-6 group-hover:scale-110 transition-transform
                              duration-300 shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Eco-Conscious Brokerage
          </h3>
          <p className="text-teal-50 text-lg max-w-3xl mx-auto leading-relaxed">
            Every shipment, every partnership, every decision we make is guided by our commitment
            to building a more sustainable future. Join us in creating infrastructure that respects
            our planet.
          </p>
        </div>
      </div>
    </section>
  );
}
