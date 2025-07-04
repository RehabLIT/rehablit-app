import React from 'react';
import { Play, ArrowRight, Key, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
  const dotPatternSvg = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className={`absolute top-0 left-0 w-full h-full bg-[url('${dotPatternSvg}')] opacity-40`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-start order-1 lg:order-1 pt-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-8 border border-blue-200 w-fit">
              <Key className="w-4 h-4" />
              <span className="text-sm font-semibold">AI-Powered Performance Platform</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b0857] via-[#5a1a80] to-[#3b0857]">
                Performance
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Advanced rehabilitation and performance enhancement platform for athletes who demand excellence. 
              Transform your potential with data-driven insights and personalized training protocols.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-[#3b0857] to-[#5a1a80] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#2d0642] hover:to-[#4a1570] transition-all duration-200 flex items-center justify-center space-x-2 group shadow-xl w-fit">
                <span>Start Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 w-fit">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
                <div className="text-gray-500 text-sm">Elite Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-500 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-gray-500 text-sm">Sports</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-lg">
              {/* Main Hero Image - Dinesh Karthik */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/physio_with_dinesh_karthik_cricketer.JPG" 
                  alt="Professional rehabilitation with Dinesh Karthik"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}