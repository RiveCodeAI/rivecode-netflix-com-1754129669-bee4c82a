export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: 'tv' | 'download' | 'device' | 'kids';
  imageUrl?: string;
}

export interface FeatureSection {
  title: string;
  features: Feature[];
}

export interface FeatureIcon {
  name: Feature['icon'];
  size?: number;
  className?: string;
}

export interface FeatureProps {
  feature: Feature;
  index: number;
  isReversed?: boolean;
}