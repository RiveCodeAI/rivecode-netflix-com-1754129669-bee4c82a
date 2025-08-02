import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import FeaturesGrid from './components/FeaturesGrid';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <CookieConsent />
      <Header />
      <main>
        <HeroSection />
        <TrendingSection />
        <FeaturesGrid />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;