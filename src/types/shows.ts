export interface Show {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  rating?: string;
  year?: number;
  duration?: string;
}

export interface TrendingShow extends Show {
  position: number;
  isNew?: boolean;
  trending?: boolean;
}

export interface ShowCategory {
  id: number;
  name: string;
  shows: Show[];
}

export interface ShowsResponse {
  categories: ShowCategory[];
  trending: TrendingShow[];
  featured?: Show;
}