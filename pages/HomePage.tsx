import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DiscountSystem from '../components/DiscountSystem';
import Conditions from '../components/Conditions';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      
      {/* Mini Catalog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Популярные категории</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {['Softshell Костюмы', 'Демисезон', 'Аксессуары'].map((cat, idx) => (
                 <Link to={`/catalog?category=${cat}`} key={idx} className="group relative h-80 overflow-hidden bg-slate-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-all"></div>
                    <img src={`https://source.unsplash.com/random/800x600?kid,clothing,${idx}`} alt={cat} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50" />
                    <div className="relative z-10 bg-white p-6 shadow-xl">
                        <h3 className="text-xl font-bold uppercase tracking-wider">{cat}</h3>
                    </div>
                 </Link>
               ))}
            </div>
            <Link to="/catalog" className="inline-flex items-center px-8 py-4 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors">
               Перейти в каталог <ArrowRight className="ml-2" />
            </Link>
        </div>
      </section>

      <DiscountSystem />
      <Conditions />
      <ContactForm />
    </>
  );
};

export default HomePage;