import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#141A28] rounded-lg p-8 transition-transform hover:scale-105">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-12 h-12 flex-shrink-0">
          {icon === "tv" && (
            <svg className="w-12 h-12 text-netflix-red" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
            </svg>
          )}
          {/* Add similar SVG icons for other feature types */}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;