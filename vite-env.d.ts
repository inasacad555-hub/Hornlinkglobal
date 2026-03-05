import { CheckCircle2, Shield, Users, DollarSign, Globe2, HeadphonesIcon } from 'lucide-react';

export default function WhyPartner() {
  const benefits = [
    {
      icon: Shield,
      title: 'Reliable Sourcing',
      description: 'Trusted suppliers and rigorous quality control ensure premium products every time',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, competitive pricing with no hidden fees. What you see is what you get',
    },
    {
      icon: CheckCircle2,
      title: 'Pre-Order Options',
      description: 'Secure your inventory in advance with flexible booking and reservation systems',
    },
    {
      icon: Globe2,
      title: 'Global Distribution',
      description: 'Strategic presence in Europe, Asia, and Africa for efficient, reliable delivery',
    },
    {
      icon: Users,
      title: 'Tailored Services',
      description: 'Customized solutions designed to meet your unique business requirements',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Dedicated account managers and round-the-clock customer support',
    },
  ];

  return (
    <section id="why-partner" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-6">
            Why Partner With HornLink
          </h2>
          <p className="text-xl text-gray-600">
            We uphold the highest standards of professionalism, compliance, and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border-2 border-gray-200 hover:border-emerald-600
                         transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center
                              mb-5 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Global network"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Global Network, Local Expertise
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our extensive network of reliable partners and agents in key international
              markets ensures seamless operations and timely deliveries across continents.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Verified suppliers and quality assurance protocols</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Experienced logistics partners for efficient shipping</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Local agents ensuring compliance and smooth clearance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
