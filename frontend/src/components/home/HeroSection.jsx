// src/components/home/HeroSection.jsx

import React from 'react';
import { ChevronRight, Shield, Truck, Star, Award, Zap, CreditCard } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative py-16 px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex items-center bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30 px-4 py-2 rounded-full font-medium">
                  <Award className="h-4 w-4 mr-2" />
                  Delhi's #1 Appliance Retailer
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Premium Home</span>
                <br />
                <span className="text-[var(--accent)]">Electronics</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl leading-relaxed">
                Discover the latest in home appliances. From smart refrigerators to 8K TVs, 
                we bring you premium quality electronics with unmatched service and warranty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--accent)] text-[var(--accent-foreground)] px-8 py-4 text-lg font-semibold rounded-xl hover:bg-[var(--accent)]/90 transition-transform group">
                Shop Now
                <ChevronRight className="inline-block ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[var(--border)] text-white hover:bg-[var(--card)] px-8 py-4 text-lg rounded-xl">
                View Catalog
              </button>
            </div>
          </div>

          {/* Right Content - Feature Showcase */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[var(--card)] to-transparent p-8 rounded-3xl border border-[var(--border)]">
                <div className="bg-[var(--accent)]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Integration</h3>
                <p className="text-[var(--foreground-secondary)] leading-relaxed">
                  Connect all your appliances with our smart home ecosystem for seamless control.
                </p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-gradient-to-br from-[var(--card)] to-transparent p-8 rounded-3xl border border-[var(--border)]">
                <div className="bg-[var(--accent)]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Installation</h3>
                <p className="text-[var(--foreground-secondary)] leading-relaxed">
                  Professional setup and installation included with every major appliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;