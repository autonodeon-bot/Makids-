import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_GALLERY } from '../constants';
import { ThermometerSun, Ruler } from 'lucide-react';

const Gallery = () => {
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 md:w-auto snap-center mr-4 md:mr-0 group"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mb-6 shadow-md">
                <img 
                  src={product.url} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-white text-brand-900 font-bold rounded-xl shadow-lg hover:bg-brand-50 transition-colors">
                    Заказать
                  </button>
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                   SOFTSHELL
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-700">
                  <ThermometerSun className="w-4 h-4 text-orange-500" />
                  <span>{product.tempRange}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-700">
                  <Ruler className="w-4 h-4 text-blue-500" />
                  <span>{product.sizes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;