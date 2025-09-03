// src/components/layout/Footer.jsx

import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Shield, Truck, CreditCard, Award } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-32">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent)]/10 border-b border-[var(--border)]">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with WowCart</h3>
              <p className="text-lg text-[var(--foreground-secondary)]">
                Get exclusive deals, new product launches, and expert home appliance tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-[var(--card)] border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] h-14 px-6 rounded-xl focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
              />
              <button className="bg-[var(--accent)] text-[var(--accent-foreground)] px-8 py-4 font-semibold whitespace-nowrap rounded-xl hover:bg-[var(--accent)]/90">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-[var(--accent)] rounded-2xl p-3">
                <Zap className="h-8 w-8 text-[var(--accent-foreground)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">WowCart</h3>
                <p className="text-sm text-[var(--foreground-secondary)] -mt-1">Premium Home Electronics</p>
              </div>
            </div>
            <p className="text-[var(--foreground-secondary)] leading-relaxed text-lg">
              America's premier destination for premium home electronics and appliances.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-[var(--card)] rounded-xl text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--border)]"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-3 bg-[var(--card)] rounded-xl text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--border)]"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="p-3 bg-[var(--card)] rounded-xl text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--border)]"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="p-3 bg-[var(--card)] rounded-xl text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--border)]"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Shop</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Refrigerators</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">TVs & Audio</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Washers & Dryers</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Kitchen</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Support</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Help Center</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Track Order</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Returns</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Financing</a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Company</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">About Us</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Careers</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Press</a>
              <a href="#" className="block text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors text-lg">Affiliates</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="text-[var(--foreground-secondary)] text-lg">
            © 2024 WowCart. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-lg">
            <a href="#" className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;