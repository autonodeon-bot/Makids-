import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="partner-form" className="py-20 bg-brand-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            <div className="md:w-5/12 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                
                <div>
                    <h3 className="text-3xl font-display font-bold mb-4">Стать партнером</h3>
                    <p className="text-slate-400">
                        Заполните анкету, и наш менеджер свяжется с вами для уточнения деталей и отправки полного прайс-листа.
                    </p>
                </div>
                
                <div className="mt-12">
                   <p className="text-sm text-slate-500 mb-2">Менеджер всегда на связи</p>
                   <p className="text-xl font-bold">opt-makids@mail.ru</p>
                </div>
            </div>

            <div className="md:w-7/12 p-10">
                {status === 'success' ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-10"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 flex items-center justify-center mb-6">
                            <CheckCircle2 size={40} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Заявка отправлена!</h4>
                        <p className="text-slate-600">Мы свяжемся с вами в ближайшее время.</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="mt-8 text-brand-600 font-semibold hover:underline"
                        >
                            Отправить еще одну
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Ваше Имя</label>
                            <input 
                                required
                                type="text" 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                                placeholder="Иван Иванов"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                                <input 
                                    required
                                    type="tel" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                                    placeholder="+7 (999) 000-00-00"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Город</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                                    placeholder="Москва"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                            <input 
                                required
                                type="email" 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                                placeholder="example@mail.ru"
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-4 bg-brand-600 text-white font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                'Отправка...'
                            ) : (
                                <>
                                    <span>Получить оптовый прайс</span>
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-slate-400">
                            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                        </p>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;