import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_GALLERY } from '../constants';
import { ProductImage } from '../types';
import { ThermometerSun, Ruler, CalendarDays } from 'lucide-react';

interface GalleryProps {
  onProductClick: (product: ProductImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onProductClick }) => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Наша Коллекция
          </h2>
          <p className="text-lg text-slate-600">
            Softshell. Демисезонная одежда. Premium ткань.
          </p>
        </motion.div>

        {/* Scrollable container for mobile, Grid for desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 scrollbar-hide snap-x snap-mandatory">
          {PRODUCT_GALLERY.map((product) => (
            <motion.div
              key={product.id}
              layoutId={`product-card-${product.id}`}
              onClick={() => onProductClick(product)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 md:w-auto snap-center mr-4 md:mr-0 group flex flex-col cursor-pointer"
            >
              {/* Changed aspect ratio to square (aspect-square) to prevent cropping of text on marketing images */}
              <div className="relative overflow-hidden aspect-square mb-6 shadow-md bg-slate-100">
                <img 
                  src={product.url} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-white text-brand-900 font-bold shadow-lg hover:bg-brand-50 transition-colors pointer-events-none">
                    Подробнее
                  </button>
                </div>
                {/* Dynamic Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1 text-xs font-bold shadow-sm ${
                    product.badge === 'Premium' ? 'bg-amber-100/90 text-amber-700' : 'bg-white/90 text-brand-600'
                  }`}>
                    {product.badge.toUpperCase()}
                  </div>
                )}
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{product.title}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-orange-50 text-xs font-medium text-orange-700">
                  <ThermometerSun className="w-3.5 h-3.5" />
                  <span>{product.tempRange}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 text-xs font-medium text-blue-700">
                  <Ruler className="w-3.5 h-3.5" />
                  <span>{product.sizes}</span>
                </div>
                {product.season && (
                   <div className="flex items-center gap-1.5 px-3 py-2 bg-green-50 text-xs font-medium text-green-700">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{product.season}</span>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;