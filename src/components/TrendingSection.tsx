import React from 'react';
import TrendingCard from './TrendingCard';

interface TrendingShow {
  id: number;
  title: string;
  imageUrl: string;
}

const trendingShows: TrendingShow[] = [
  {
    id: 1,
    title: "Squid Game",
    imageUrl: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZV4NmkRBbtoq8O_5Aro81rbq4CRwiku0decuhWlpXGKK4pGsQ9LDCWu_Yf0jv8z5goKbOMQxZ-7ZJDxzXDBbkQcobG_TzvyQsNq6FqbmzhZ-z2jB5kKb1mk6-4mwpXXdznp.jpg?r=609"
  },
  {
    id: 2,
    title: "Happy Gilmore",
    imageUrl: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZYaym2wRejqcfwxAuqiird6z85ysSelKSL7M4CldU__m-3GH9hQVVrvTAfpWhzihUZ3-C1GAnAFm-1ulChGLlk11kAw1jn93BujbDif95xnV9H3NuUCzegVeQRuuZdpZUgS.jpg?r=711"
  },
  {
    id: 3,
    title: "My Oxford Year",
    imageUrl: "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRNJ2qmi9ye_7YAmR0wjwswjEIhlg1ARzQ0EGN3VJa-70jy2AciJ5Nrt8WFchFzt1psoBz8Mk0B4g9rlzlnJAkwkeUWTJ_376OA80_8PevHot0SVocvDhn8YuEqDIiwipeHl.jpg?r=5ca"
  }
];

const TrendingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingShows.map((show) => (
            <TrendingCard key={show.id} {...show} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;