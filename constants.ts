import { DiscountTier, ProductImage, Benefit } from './types';
import { Scissors, Award, TrendingUp, ShieldCheck, Truck, Users } from 'lucide-react';

export const CONTACT_INFO = {
  city: 'г. Балаково, Саратовская область',
  address: 'ул. Трнавская 34, 2 этаж',
  zip: '413864',
  email: 'opt-makids@mail.ru',
  phone: '+7 (927) 000-00-00', // Placeholder as full phone wasn't visible
};

export const DISCOUNT_TIERS: DiscountTier[] = [
  { level: 1, minAmount: 30000, discountPercent: 20 },
  { level: 2, minAmount: 50000, discountPercent: 25 },
  { level: 3, minAmount: 80000, discountPercent: 30 },
  { level: 4, minAmount: 150000, discountPercent: 35 },
  { level: 5, minAmount: 250000, discountPercent: 40 },
  { level: 6, minAmount: 400000, discountPercent: 45 },
];

export const PRODUCT_GALLERY: ProductImage[] = [
  {
    id: '1',
    // Replace with your actual image file, e.g., '/images/bunny-softshell.jpg'
    url: 'https://images.unsplash.com/photo-1546445317-236268757832?q=80&w=800&auto=format&fit=crop', 
    title: 'Softshell "Зайка"',
    description: 'Бежевый костюм с принтом зайца. Стильно и удобно.',
    tempRange: '+8°C ... +20°C',
    sizes: '80-134',
    badge: 'Softshell',
    season: 'Весна / Лето / Осень'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1618397914838-8a8b8d0e7b8f?q=80&w=800&auto=format&fit=crop',
    title: 'Softshell "Daisy"',
    description: 'Яркий фиолетовый костюм для девочек с любимым героем.',
    tempRange: '+8°C ... +20°C',
    sizes: '80-134',
    badge: 'Softshell',
    season: 'Весна / Лето / Осень'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1519238263496-6361937a4ce9?q=80&w=800&auto=format&fit=crop',
    title: 'Парка "Hooligan"',
    description: 'Хаки цвет, Premium ткань, стиль милитари.',
    tempRange: '+8°C ... +20°C',
    sizes: '80-134',
    badge: 'Premium',
    season: 'Весна / Лето / Осень'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1620248733276-857e49eb7232?q=80&w=800&auto=format&fit=crop',
    title: 'Плащ "Music"',
    description: 'Фиолетовый плащ с музыкальным принтом.',
    tempRange: '+8°C ... +20°C',
    sizes: '80-134',
    badge: 'New',
    season: 'Весна / Лето / Осень'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1503919545885-d7780173f306?q=80&w=800&auto=format&fit=crop',
    title: 'Softshell "Mickey"',
    description: 'Серый костюм. Стильная и удобная модель.',
    tempRange: '+8°C ... +20°C',
    sizes: '80-134',
    badge: 'Softshell',
    season: 'Весна / Лето / Осень'
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'prod',
    title: 'Собственное производство',
    description: '1000+ кв. метров цехов. Уникальный дизайн и лекала.',
    icon: 'Scissors'
  },
  {
    id: 'cert',
    title: 'Сертифицировано',
    description: 'Весь ассортимент полностью сертифицирован.',
    icon: 'ShieldCheck'
  },
  {
    id: 'top',
    title: 'ТОП в категории',
    description: 'Бренд №1 по стилю и красочности детской одежды.',
    icon: 'Award'
  },
  {
    id: 'sales',
    title: 'Рост продаж',
    description: 'Наши клиенты увеличили продажи за счет уникальности ассортимента.',
    icon: 'TrendingUp'
  }
];

export const SHIPPING_METHODS = [
  'Почта России',
  'СДЭК',
  'Деловые Линии',
  'Байкал',
  'ПЭК',
  'Самовывоз'
];