import React from 'react';
import { motion } from 'framer-motion';
import { DISCOUNT_TIERS } from '../constants';
import { ArrowRight } from 'lucide-react';

const DiscountSystem = () => {
  return (
    <section className="py-20 bg-brand-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#d94949_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Условия для опта
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Размер вашей скидки определяется суммой заказа. Чем больше заказ — тем выгоднее сотрудничество.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCOUNT_TIERS.map((tier, index) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              {/* Card mimicking a puzzle piece connector visually */}
              <div className={`
                relative h-full bg-white p-8 shadow-sm border-2 
                transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl
                ${index === DISCOUNT_TIERS.length - 1 ? 'border-brand-500 shadow-brand-200' : 'border-slate-100'}
              `}>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-brand-50 transition-colors">
                    0{tier.level}
                  </span>
                  <div className="w-12 h-12 bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {tier.discountPercent}%
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Сумма заказа
                </h3>
                <p className="text-2xl font-bold text-slate-800 mb-6">
                  от {tier.minAmount.toLocaleString('ru-RU')} ₽
                </p>

                <div className="flex items-center text-brand-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Получить прайс</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountSystem;