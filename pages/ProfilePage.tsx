import React from 'react';
import { useStore } from '../context/StoreContext';
import { Package, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user, orders, logout } = useStore();

  if (!user) return null;

  const myOrders = orders.filter(o => o.userId === user.id);

  return (
    <div className="container mx-auto px-4 py-12">
       <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4 bg-white p-6 border border-slate-200">
             <div className="text-center mb-6 pb-6 border-b border-slate-100">
                <div className="w-20 h-20 bg-slate-900 text-white font-bold text-3xl flex items-center justify-center mx-auto mb-4">
                   {user.name[0].toUpperCase()}
                </div>
                <h2 className="font-bold text-xl">{user.name}</h2>
                <p className="text-slate-500 text-sm">{user.email}</p>
             </div>
             <button onClick={logout} className="w-full py-2 border border-slate-200 hover:bg-slate-50 font-medium">
                Выйти
             </button>
          </div>

          <div className="md:w-3/4">
             <h1 className="text-2xl font-bold mb-6">История заказов</h1>
             
             {myOrders.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 border border-slate-100 border-dashed">
                   <Package className="mx-auto w-12 h-12 text-slate-300 mb-4" />
                   <h3 className="text-lg font-bold text-slate-600 mb-2">У вас пока нет заказов</h3>
                   <Link to="/catalog" className="text-brand-600 hover:underline">Перейти в каталог</Link>
                </div>
             ) : (
                <div className="space-y-6">
                   {myOrders.map(order => (
                      <div key={order.id} className="bg-white border border-slate-200 p-6">
                         <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-50">
                            <div>
                               <p className="text-xs text-slate-500 uppercase tracking-wide">Заказ №{order.id}</p>
                               <p className="text-sm text-slate-500">{new Date(order.date).toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center gap-2">
                               {order.status === 'paid' ? (
                                  <span className="flex items-center gap-1 text-green-600 text-sm font-bold bg-green-50 px-2 py-1">
                                     <CheckCircle size={14} /> Оплачен
                                  </span>
                               ) : (
                                  <span className="flex items-center gap-1 text-amber-600 text-sm font-bold bg-amber-50 px-2 py-1">
                                     <Clock size={14} /> В обработке
                                  </span>
                               )}
                            </div>
                         </div>
                         
                         <div className="space-y-2 mb-4">
                            {order.items.map(item => (
                               <div key={item.id} className="flex justify-between text-sm">
                                  <span>{item.title} <span className="text-slate-400">x{item.quantity}</span></span>
                                  <span className="font-medium">{item.price * item.quantity} ₽</span>
                               </div>
                            ))}
                         </div>
                         
                         <div className="flex justify-end pt-4 border-t border-slate-50">
                            <span className="text-xl font-bold">{order.total} ₽</span>
                         </div>
                      </div>
                   ))}
                </div>
             )}
          </div>
       </div>
    </div>
  );
};

export default ProfilePage;