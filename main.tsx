import { Heart, CheckCircle, UserCheck, Award } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent, and accountable in all dealings',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Consistent, punctual, and dependable services',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: UserCheck,
      title: 'Customer Focus',
      description: 'Prioritizing client needs and exceeding expectations',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of quality and service',
      color: 'from-slate-600 to-slate-700',
    },
  ];

  return (
    <section id="values" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold">
            Our Foundation
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-6">
            Core Values
          </h2>
          <p className="text-xl text-slate-300">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                ></div>

                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8
                              border border-slate-700 hover:border-emerald-500 transition-all
                              duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl
                                flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {value.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Building Long-Term Partnerships
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our values aren't just words on a page. They're the foundation of every relationship
            we build, every product we deliver, and every promise we make to our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
