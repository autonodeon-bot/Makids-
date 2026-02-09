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

// In a real scenario, these URLs would point to the actual uploaded images.
// I am using placeholders that describe the image content based on the user's photos.
export const PRODUCT_GALLERY: ProductImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop',
    title: 'Softshell "Зайка"',
    description: 'Бежевый костюм с принтом зайца. Стильно и удобно.',
    tempRange: '+8°C до +20°C',
    sizes: '80-134',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1621452773781-0f992ed03591?q=80&w=800&auto=format&fit=crop',
    title: 'Softshell "Daisy Duck"',
    description: 'Яркий фиолетовый костюм для девочек с любимым героем.',
    tempRange: '+8°C до +20°C',
    sizes: '80-134',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1503919545885-d7780173f306?q=80&w=800&auto=format&fit=crop',
    title: 'Парка "Hooligan"',
    description: 'Хаки цвет, премиум ткань, стиль милитари.',
    tempRange: '+8°C до +20°C',
    sizes: '80-134',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=800&auto=format&fit=crop',
    title: 'Плащ "Music"',
    description: 'Фиолетовый плащ с музыкальным принтом.',
    tempRange: '+8°C до +20°C',
    sizes: '80-134',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1530047625168-4b29ebf32484?q=80&w=800&auto=format&fit=crop',
    title: 'Softshell "Mickey"',
    description: 'Серый костюм с Микки Маусом. Универсальный выбор.',
    tempRange: '+8°C до +20°C',
    sizes: '80-134',
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