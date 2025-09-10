import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, User } from 'lucide-react';
import useAuthStore from '../../state/authStore';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await register(name, email, password);
    if (success) {
      navigate('/'); // Redirect to homepage on successful registration
    } else {
      setError('Registration failed. This email may already be in use.');
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
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--foreground-secondary)]">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[var(--accent)] hover:text-[var(--accent)]/90">
              Sign In
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <input id="full-name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-4 pr-4 py-3 rounded-xl" placeholder="Full name" />
            </div>
            <div>
              <input id="email-address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-4 pr-4 py-3 rounded-xl" placeholder="Email address" />
            </div>
            <div>
              <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-transparent border border-[var(--border)] text-white placeholder:text-[var(--foreground-secondary)] pl-4 pr-4 py-3 rounded-xl" placeholder="Password" />
            </div>
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-xl border border-transparent bg-[var(--accent)] py-3 px-4 text-lg font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent)]/90">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;