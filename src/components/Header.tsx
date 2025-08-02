import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <img 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1a7-75a7-a8b7-f85133e4c823/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="h-8 md:h-10"
        />
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-transparent border border-white/70 rounded px-4 py-1 text-sm text-white"
            >
              English
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {isLangOpen && (
              <div className="absolute top-full mt-1 w-full bg-black/90 border border-white/20 rounded">
                <button className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10">
                  Deutsch
                </button>
              </div>
            )}
          </div>
          <button className="bg-netflix-red text-white px-4 py-1 rounded font-medium">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;