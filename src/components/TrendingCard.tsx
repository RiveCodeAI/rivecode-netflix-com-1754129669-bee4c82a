import React from 'react';

interface TrendingCardProps {
  title: string;
  imageUrl: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white text-sm md:text-base font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default TrendingCard;