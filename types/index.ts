export interface Province {
  id: string;
  name: string;
  slug: string;
  region: "north" | "south" | "east" | "west" | "central";
  tag: string;
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;       // Unsplash URL or local /images/...
  featured: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  province: string;
  provinceSlug: string;
  stars: number;
  pricePerNight: number;
  currency: "USD";
  badge: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface Highlight {
  label: string;
}

export interface Attraction {
  id: string;
  name: string;
  slug: string;
  province: string;
  provinceSlug: string;
  region: "north" | "south" | "east" | "west" | "central";
  category: "nature" | "history" | "culture" | "adventure" | "religious";
  tag: string;
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;
  featured: boolean;
}