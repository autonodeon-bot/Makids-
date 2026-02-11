import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductImage, User, CartItem, Order, StoreSettings } from '../types';
import { PRODUCT_GALLERY } from '../constants';
import toast from 'react-hot-toast';

interface StoreContextType {
  user: User | null;
  products: ProductImage[];
  cart: CartItem[];
  orders: Order[];
  wishlist: string[];
  settings: StoreSettings;
  login: (email: string, role?: 'admin' | 'user') => void;
  logout: () => void;
  addToCart: (product: ProductImage) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  createOrder: (orderData: Omit<Order, 'id' | 'date'>) => void;
  // Admin functions
  addProduct: (product: ProductImage) => void;
  updateProduct: (product: ProductImage) => void;
  deleteProduct: (productId: string) => void;
  updateSettings: (settings: StoreSettings) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};

// Initial admin settings
const initialSettings: StoreSettings = {
  yookassaShopId: '',
  yookassaSecretKey: '',
  storeName: 'MAKIDS',
  currency: 'RUB'
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- STATE ---
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('makids_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [products, setProducts] = useState<ProductImage[]>(() => {
    const saved = localStorage.getItem('makids_products');
    // Extend basic gallery with prices if not saved
    if (!saved) {
      return PRODUCT_GALLERY.map(p => ({ ...p, price: 2500, category: 'Костюмы', stock: 100 }));
    }
    return JSON.parse(saved);
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('makids_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('makids_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('makids_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [settings, setSettings] = useState<StoreSettings>(() => {
    const saved = localStorage.getItem('makids_settings');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  // --- EFFECTS (Persistence) ---
  useEffect(() => {
    if (user) localStorage.setItem('makids_user', JSON.stringify(user));
    else localStorage.removeItem('makids_user');
  }, [user]);

  useEffect(() => localStorage.setItem('makids_products', JSON.stringify(products)), [products]);
  useEffect(() => localStorage.setItem('makids_cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('makids_orders', JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem('makids_wishlist', JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem('makids_settings', JSON.stringify(settings)), [settings]);

  // --- ACTIONS ---

  const login = (email: string, role: 'admin' | 'user' = 'user') => {
    // Simulated login
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      role
    };
    setUser(newUser);
    toast.success(`Добро пожаловать, ${newUser.name}!`);
  };

  const logout = () => {
    setUser(null);
    setCart([]); // Optional: clear cart on logout
    toast.success('Вы вышли из системы');
  };

  const addToCart = (product: ProductImage) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.success('Количество обновлено');
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      toast.success('Товар добавлен в корзину');
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    toast.error('Товар удален');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(productId);
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        toast('Убрано из избранного', { icon: '💔' });
        return prev.filter(id => id !== productId);
      }
      toast('Добавлено в избранное', { icon: '❤️' });
      return [...prev, productId];
    });
  };

  const createOrder = (orderData: Omit<Order, 'id' | 'date'>) => {
    const newOrder: Order = {
      ...orderData,
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date().toISOString(),
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    toast.success('Заказ успешно оформлен!');
  };

  // Admin Actions
  const addProduct = (product: ProductImage) => {
    setProducts(prev => [product, ...prev]);
    toast.success('Товар создан');
  };

  const updateProduct = (updatedProduct: ProductImage) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    toast.success('Товар обновлен');
  };

  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    toast.success('Товар удален');
  };

  const updateSettings = (newSettings: StoreSettings) => {
    setSettings(newSettings);
    toast.success('Настройки магазина сохранены');
  };

  return (
    <StoreContext.Provider value={{
      user, products, cart, orders, wishlist, settings,
      login, logout, addToCart, removeFromCart, updateCartQuantity, clearCart,
      toggleWishlist, createOrder, addProduct, updateProduct, deleteProduct, updateSettings
    }}>
      {children}
    </StoreContext.Provider>
  );
};