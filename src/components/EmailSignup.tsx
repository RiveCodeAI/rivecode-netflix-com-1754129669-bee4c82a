import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-lg md:text-xl text-white mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full px-4 py-4 bg-black/60 border border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-netflix-red text-white px-8 py-4 rounded text-2xl font-medium hover:bg-[#f6121d]"
        >
          Get Started
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;