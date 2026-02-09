import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductImage } from '../types';
import { X, ThermometerSun, Ruler, CalendarDays, CheckCircle } from 'lucide-react';

interface ProductModalProps {
  product: ProductImage | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            layoutId={`product-card-${product.id}`}
            className="relative w-full max-w-4xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[600px]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative bg-slate-100">
              <img 
                src={product.url} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 text-sm font-bold shadow-sm text-brand-600">
                  {product.badge.toUpperCase()}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
                {product.title}
              </h2>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
                  Опт от 5 шт.
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider">
                  В наличии
                </span>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {product.description}
                <br /><br />
                Высококачественная мембранная ткань Softshell обеспечивает надежную защиту от ветра и влаги, сохраняя тепло и позволяя телу дышать. Идеальный выбор для активных детей.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="p-4 bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 mb-1 text-sm font-medium">
                        <ThermometerSun size={16} />
                        Температура
                    </div>
                    <div className="text-slate-900 font-bold">{product.tempRange}</div>
                 </div>
                 <div className="p-4 bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 mb-1 text-sm font-medium">
                        <Ruler size={16} />
                        Размеры
                    </div>
                    <div className="text-slate-900 font-bold">{product.sizes}</div>
                 </div>
                 {product.season && (
                    <div className="col-span-2 p-4 bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-500 mb-1 text-sm font-medium">
                            <CalendarDays size={16} />
                            Сезон
                        </div>
                        <div className="text-slate-900 font-bold">{product.season}</div>
                    </div>
                 )}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100">
                 <a 
                   href="#partner-form" 
                   onClick={onClose}
                   className="flex items-center justify-center w-full py-4 bg-brand-600 text-white font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-all active:scale-95"
                 >
                    <CheckCircle className="mr-2" size={20} />
                    Запросить прайс на эту модель
                 </a>
                 <p className="text-center text-xs text-slate-400 mt-3">
                    Менеджер свяжется с вами для уточнения деталей заказа
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;