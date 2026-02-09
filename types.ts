export interface DiscountTier {
  level: number;
  minAmount: number;
  discountPercent: number;
  label?: string;
}

export interface ProductImage {
  id: string;
  url: string;
  title: string;
  description: string;
  tempRange: string;
  sizes: string;
  badge?: string;
  season?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}