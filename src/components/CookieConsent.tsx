import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm">
            Netflix and third parties use cookies and similar technologies on this website to collect information about your browsing activities, which we use to analyse your use of the website, personalise our services, and customise online advertisements. You can accept, reject, or personalise your choices by selecting 'Learn more'. Netflix supports the Digital Advertising Alliance Principles.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            className="px-4 py-2 text-sm bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => window.open('/learn-more', '_blank')}
          >
            Learn more
          </button>
          <button 
            className="px-4 py-2 text-sm bg-[#E50914] text-white hover:bg-[#f6121d] transition-colors"
            onClick={() => setIsVisible(false)}
          >
            Reject
          </button>
          <button 
            className="px-4 py-2 text-sm bg-[#E50914] text-white hover:bg-[#f6121d] transition-colors"
            onClick={() => setIsVisible(false)}
          >
            Accept
          </button>
        </div>
        <button 
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={() => setIsVisible(false)}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;