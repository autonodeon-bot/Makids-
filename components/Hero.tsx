import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 to-white">
      {/* Decorative blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-100 blur-3xl opacity-50"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-purple/10 blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 bg-brand-100 text-brand-600 font-semibold text-sm mb-4"
          >
            ОПТОВАЯ ПРОДАЖА ДЕТСКОЙ ОДЕЖДЫ
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-tight mb-6"
          >
            MAKIDS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
              ЯРКОЕ ДЕТСТВО
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Создаем яркую одежду, которая помогает родителям делать детство ярче. 
            Собственное производство и уникальный дизайн.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#partner-form" className="px-8 py-4 bg-brand-600 text-white font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-all hover:scale-105 active:scale-95">
              Стать партнером
            </a>
            <a href="#catalog" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold hover:bg-slate-50 transition-all">
              Смотреть каталог
            </a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=600&auto=format&fit=crop" 
                  alt="Happy Kid 1" 
                  className="shadow-2xl translate-y-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519238263496-6361937a4ce9?q=80&w=600&auto=format&fit=crop" 
                  alt="Happy Kid 2" 
                  className="shadow-2xl"
                />
             </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;