import React from 'react';
import EmailSignup from './EmailSignup';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/DE-en-20250721-TRIFECTA-perspective_dce16a36-990c-42cc-9038-3d76fd400e2a_large.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6">
          Starts at €4.99. Cancel anytime.
        </p>
        <EmailSignup />
      </div>
    </div>
  );
};

export default HeroSection;