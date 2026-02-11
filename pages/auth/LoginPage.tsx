import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, isAdmin ? 'admin' : 'user');
    navigate(isAdmin ? '/admin' : '/profile');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-10 shadow-xl border border-slate-100">
         <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Вход</h1>
            <p className="text-slate-500">Войдите, чтобы отслеживать заказы</p>
         </div>

         <form onSubmit={handleSubmit} className="space-y-6">
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
               <input 
                 type="email" 
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-500 outline-none"
                 placeholder="your@email.com"
               />
            </div>

            <div className="flex items-center gap-2">
               <input 
                 type="checkbox" 
                 id="admin"
                 checked={isAdmin}
                 onChange={(e) => setIsAdmin(e.target.checked)}
                 className="w-4 h-4 text-brand-600 border-gray-300 focus:ring-brand-500"
               />
               <label htmlFor="admin" className="text-sm text-slate-600 select-none">Войти как администратор (Demo)</label>
            </div>

            <button type="submit" className="w-full py-4 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors">
               Войти / Зарегистрироваться
            </button>
            <p className="text-xs text-center text-slate-400">
               В демо-режиме пароль не требуется. Просто введите Email.
            </p>
         </form>
      </div>
    </div>
  );
};

export default LoginPage;