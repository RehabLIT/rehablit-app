import React from 'react';
import { TrendingUp, Award, Globe, Clock, Star, Users } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Elite Athletes',
      description: 'Trust our platform worldwide',
      color: 'blue'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      description: 'In injury prevention',
      color: 'green'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Sports',
      description: 'Supported disciplines',
      color: 'purple'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'AI Support',
      description: 'Continuous monitoring',
      color: 'orange'
    }
  ];

  const testimonials = [
    {
      name: 'Dinesh Karthik',
      role: 'Professional Cricketer',
      sport: 'Indian Cricket Team',
      quote: 'The personalized rehabilitation protocols have been game-changing for my performance and injury prevention.',
      rating: 5,
      image: '/physio_with_dinesh_karthik_cricketer.JPG'
    },
    {
      name: 'Team India Athlete',
      role: 'International Competitor',
      sport: 'Asian Games',
      quote: 'The advanced rehabilitation techniques helped me represent India at the highest level with confidence.',
      rating: 5,
      image: '/physio_in_asian_games.jpg'
    },
    {
      name: 'BCCI Tournament Player',
      role: 'Professional Cricketer',
      sport: 'Domestic Cricket',
      quote: 'The real-time monitoring and expert care have been crucial for maintaining peak performance throughout the season.',
      rating: 5,
      image: '/phyio_in_BCCI_tournament.JPG'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-[#3b0857] to-[#5a1a80]',
      green: 'from-[#22c55e] to-emerald-500',
      purple: 'from-[#3b0857] to-[#5a1a80]',
      orange: 'from-orange-500 to-red-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="science" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-[#3b0857] rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Proven Results</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b0857] to-[#5a1a80]">
              Champions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform delivers measurable outcomes that speak for themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(stat.color)} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">What Champions Say</h3>
          <p className="text-lg text-gray-600">Real stories from elite athletes who transformed their performance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-blue-600 font-medium">{testimonial.sport}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}