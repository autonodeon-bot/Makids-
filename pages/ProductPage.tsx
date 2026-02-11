import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ShoppingCart, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-20 text-center">Товар не найден</div>;

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
           {/* Image Gallery Mockup */}
           <div className="md:w-1/2">
              <div className="aspect-square bg-slate-100 overflow-hidden mb-4">
                 <img src={product.url} alt={product.title} className="w-full h-full object-cover" />
              </div>
           </div>

           {/* Info */}
           <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold mb-4">
                 {product.category.toUpperCase()}
              </span>
              <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">{product.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                 <span className="text-3xl font-bold text-brand-600">{product.price} ₽</span>
                 {product.oldPrice && <span className="text-xl text-slate-400 line-through">{product.oldPrice} ₽</span>}
              </div>

              <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

              <div className="space-y-4 mb-8">
                 <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Размеры:</span>
                    <span className="font-medium">{product.sizes}</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Температурный режим:</span>
                    <span className="font-medium">{product.tempRange}</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Сезон:</span>
                    <span className="font-medium">{product.season}</span>
                 </div>
              </div>

              <div className="flex gap-4 mb-8">
                 <button 
                    onClick={() => addToCart(product)}
                    className="flex-1 py-4 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors shadow-xl shadow-brand-100 flex items-center justify-center gap-2"
                 >
                    <ShoppingCart /> Добавить в корзину
                 </button>
                 <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`px-6 py-4 border border-slate-200 hover:border-brand-200 transition-colors ${wishlist.includes(product.id) ? 'bg-red-50 text-red-500 border-red-200' : 'text-slate-400'}`}
                 >
                    <Heart fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                 </button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-xs text-slate-500">
                 <div className="p-4 bg-slate-50">
                    <ShieldCheck className="mx-auto mb-2 w-6 h-6 text-slate-400" />
                    <span>Гарантия качества</span>
                 </div>
                 <div className="p-4 bg-slate-50">
                    <Truck className="mx-auto mb-2 w-6 h-6 text-slate-400" />
                    <span>Быстрая доставка</span>
                 </div>
                 <div className="p-4 bg-slate-50">
                    <RefreshCw className="mx-auto mb-2 w-6 h-6 text-slate-400" />
                    <span>Возврат 14 дней</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;