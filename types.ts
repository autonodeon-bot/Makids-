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
  price: number;
  oldPrice?: number;
  tempRange: string;
  sizes: string;
  badge?: string;
  season?: string;
  category: string;
  stock: number;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  phone?: string;
  address?: string;
}

export interface CartItem extends ProductImage {
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'shipped';
  date: string;
  paymentMethod: string;
}

export interface StoreSettings {
  yookassaShopId: string;
  yookassaSecretKey: string;
  storeName: string;
  currency: string;
}