import React from 'react';
import { Download, Smartphone, ArrowRight, Star, CheckCircle, Apple } from 'lucide-react';

export default function DownloadSection() {
  const benefits = [
    'Personalized training protocols',
    'Real-time performance analytics',
    'Injury risk assessment',
    'Recovery optimization',
    'Expert consultation access'
  ];

  return (
    <section id="athletes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-[#3b0857] rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-semibold">Mobile App</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b0857] to-[#5a1a80]">
                Transform?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of elite athletes who have revolutionized their performance with RehabLIT. 
              Download now and start your journey to peak performance.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors min-w-[200px] shadow-lg">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div>App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors min-w-[200px] shadow-lg">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 rating from 10,000+ athletes</span>
            </div>
          </div>

          {/* Right Content - CTA */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3b0857] to-[#5a1a80] rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Start Your Free Trial
              </h3>
              
              <p className="text-gray-600 mb-8">
                Experience the power of AI-driven performance optimization. 
                No commitment required.
              </p>
              
              <button className="w-full bg-gradient-to-r from-[#3b0857] to-[#5a1a80] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#2d0642] hover:to-[#4a1570] transition-all duration-200 flex items-center justify-center space-x-2 group mb-6 shadow-lg">
                <span>Begin Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="text-sm text-gray-500">
                ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}