import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, CreditCard, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { cart, updateCartQuantity, removeFromCart, createOrder, user, settings } = useStore();
  const navigate = useNavigate();
  const [isCheckout, setIsCheckout] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
     // Simulate YooKassa Redirect/Modal
     const toastId = toast.loading('Соединение с ЮKassa...');
     
     setTimeout(() => {
        toast.dismiss(toastId);
        
        // Simulating the payment Widget opening
        const confirmPayment = window.confirm(`Симуляция ЮKassa\n\nМагазин: ${settings.storeName}\nСумма: ${total} ₽\n\nОплатить заказ?`);
        
        if (confirmPayment) {
           createOrder({
              userId: user?.id || 'guest',
              items: cart,
              total,
              status: 'paid',
              paymentMethod: 'yookassa'
           });
           navigate('/profile');
        } else {
           toast.error('Оплата отменена');
        }
     }, 1500);
  };

  if (cart.length === 0) {
    return (
       <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
          <div className="w-24 h-24 bg-slate-100 flex items-center justify-center rounded-full mb-6">
             <CreditCard size={40} className="text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
          <Link to="/catalog" className="px-6 py-3 bg-brand-600 text-white font-bold hover:bg-brand-700">Перейти к покупкам</Link>
       </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
       <h1 className="text-3xl font-display font-bold mb-8">Корзина</h1>
       
       <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-4">
             {cart.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-white border border-slate-200">
                   <img src={item.url} alt={item.title} className="w-24 h-24 object-cover bg-slate-50" />
                   <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-lg">{item.title}</h3>
                         <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500"><Trash2 size={18} /></button>
                      </div>
                      <p className="text-sm text-slate-500 mb-4">{item.sizes}</p>
                      <div className="flex justify-between items-center">
                         <div className="flex items-center border border-slate-200">
                            <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-slate-50"><Minus size={14} /></button>
                            <span className="px-4 font-bold">{item.quantity}</span>
                            <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-slate-50"><Plus size={14} /></button>
                         </div>
                         <p className="font-bold text-lg">{item.price * item.quantity} ₽</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="lg:w-1/3">
             <div className="bg-white p-8 border border-slate-200 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Сумма заказа</h3>
                <div className="flex justify-between mb-2">
                   <span className="text-slate-500">Товары ({cart.length})</span>
                   <span>{total} ₽</span>
                </div>
                <div className="flex justify-between mb-6 pb-6 border-b border-slate-100">
                   <span className="text-slate-500">Доставка</span>
                   <span className="text-green-600 font-medium">Бесплатно</span>
                </div>
                <div className="flex justify-between text-xl font-bold mb-8">
                   <span>Итого</span>
                   <span>{total} ₽</span>
                </div>

                {!user && (
                   <div className="mb-4 p-3 bg-blue-50 text-blue-800 text-sm">
                      <Link to="/login" className="underline font-bold">Войдите</Link>, чтобы сохранить историю заказов.
                   </div>
                )}

                <button 
                   onClick={handlePayment}
                   className="w-full py-4 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-brand-100"
                >
                   Оплатить через ЮKassa <ArrowRight size={18} />
                </button>
                <div className="mt-4 flex justify-center gap-2 grayscale opacity-50">
                    {/* Payment Logos Placeholder */}
                    <div className="h-6 w-10 bg-slate-200" />
                    <div className="h-6 w-10 bg-slate-200" />
                    <div className="h-6 w-10 bg-slate-200" />
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CartPage;