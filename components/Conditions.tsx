import React from 'react';
import { motion } from 'framer-motion';
import { SHIPPING_METHODS } from '../constants';
import { Truck, Clock, CreditCard, BoxSelect } from 'lucide-react';

const Conditions = () => {
  return (
    <section id="conditions" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-display font-bold mb-8"
            >
              Условия <br/>
              <span className="text-brand-400">сотрудничества</span>
            </motion.h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-brand-400 border border-slate-700">
                    <BoxSelect />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Без размерных рядов</h4>
                  <p className="text-slate-400">Заказ можно формировать свободно, выбирая только нужные вам размеры.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-brand-400 border border-slate-700">
                    <CreditCard />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Оплата</h4>
                  <p className="text-slate-400">Отгрузка товара осуществляется после 100% оплаты заказа.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-brand-400 border border-slate-700">
                    <Clock />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Сроки</h4>
                  <p className="text-slate-400">Срок изготовления и сборки заказа составляет 5-14 рабочих дней.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
                <Truck className="w-8 h-8 text-brand-400" />
                <h3 className="text-2xl font-bold">Доставка</h3>
            </div>
            <p className="text-slate-400 mb-6">
                Мы работаем с надежными партнерами для доставки вашего груза в целости и сохранности. Возможен самовывоз.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SHIPPING_METHODS.map((method, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center px-4 py-3 bg-slate-700 rounded-lg text-slate-200"
                    >
                        <div className="w-2 h-2 rounded-full bg-brand-400 mr-3"></div>
                        {method}
                    </motion.div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Conditions;