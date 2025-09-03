// src/pages/public/RegisterPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Lock, User } from 'lucide-react';

function RegisterPage() {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-[var(--card)] border border-[var(--border)] rounded-3xl p-10">
        <div>
          <div className="flex justify-center">
            <div className="bg-[var(--accent)] rounded-2xl p-3">
              <Zap className="h-8 w-8 text-[var(--accent-foreground)]" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--foreground-secondary)]">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[var(--accent)] hover:text-[var(--accent)]/90">
              Sign In
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-[var(--foreground-secondary)]" aria-hidden="true" />
                </div>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-10 pr-4 py-3 rounded-xl focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/50"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-[var(--foreground-secondary)]" aria-hidden="true" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-10 pr-4 py-3 rounded-xl focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/50"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-[var(--foreground-secondary)]" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-10 pr-4 py-3 rounded-xl focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/50"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-xl border border-transparent bg-[var(--accent)] py-3 px-4 text-lg font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;