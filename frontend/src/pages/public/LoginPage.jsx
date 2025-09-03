import React, { useState } from 'react'; // 1. Import useState from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import { Zap, Mail, Lock } from 'lucide-react';
import useAuthStore from '../../state/authStore';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirecting after login
  const login = useAuthStore((state) => state.login); // Get the login action

  // 3. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    const loggedInUser = login(email, password);

    if (loggedInUser) {
      // Check the user's role and redirect accordingly
      if (loggedInUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--foreground-secondary)]">
            Or{' '}
            <Link to="/register" className="font-medium text-[var(--accent)] hover:text-[var(--accent)]/90">
              create a new account
            </Link>
          </p>
        </div>
        {/* 4. Connect the form to our handleSubmit function */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-[var(--foreground-secondary)]" aria-hidden="true" />
                </div>
                {/* 5. Connect inputs to state */}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-10 pr-4 py-3 rounded-xl focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/50"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          {/* 6. Display error message if login fails */}
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}


          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded bg-[var(--card)] border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[var(--accent)] hover:text-[var(--accent)]/90">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-xl border border-transparent bg-[var(--accent)] py-3 px-4 text-lg font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;