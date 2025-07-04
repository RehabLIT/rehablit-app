import React from 'react';
import { Brain, Activity, Shield, Zap, Target, Users, Heart, BarChart3 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze movement patterns and predict injury risks with 98% accuracy.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Continuous biometric tracking and instant feedback to optimize performance during training sessions.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'Proactive identification of potential issues before they become injuries, keeping athletes in peak condition.',
      gradient: 'from-[#22c55e] to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Data-driven insights to enhance strength, speed, and endurance through personalized training protocols.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Precision Recovery',
      description: 'Targeted rehabilitation programs that accelerate healing and restore optimal function faster.',
      gradient: 'from-[#22c55e] to-green-400'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with world-class sports scientists, physiotherapists, and performance coaches.',
      gradient: 'from-[#3b0857] to-[#5a1a80]'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-[#3b0857] rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-semibold">Platform Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b0857] to-[#5a1a80]">
              Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge features designed to transform how athletes train, recover, and perform at the highest level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3b0857]/10 to-[#5a1a80]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-12 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-left">
                <Heart className="w-16 h-16 text-[#3b0857] mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Trusted by Professional Athletes
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  From international cricket stars to Olympic competitors, elite athletes trust our rehabilitation expertise for peak performance.
                </p>
                <button className="bg-gradient-to-r from-[#3b0857] to-[#5a1a80] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#2d0642] hover:to-[#4a1570] transition-all duration-200 shadow-lg">
                  Get Started Today
                </button>
              </div>
              <div className="relative">
                <img 
                  src="/phoysio_with_indian_flag.JPG" 
                  alt="Professional athlete rehabilitation session"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">International Competition</div>
                  <div className="text-xs opacity-90">Professional rehabilitation support</div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/physio_in_asian_games.jpg" 
                  alt="Physiotherapy at Asian Games"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Asian Games</div>
                  <div className="text-xs opacity-90">Elite athlete care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}