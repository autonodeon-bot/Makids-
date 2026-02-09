import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';
import { Scissors, Award, TrendingUp, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
};

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Почему выбирают MAKIDS?
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;