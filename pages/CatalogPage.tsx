import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Filter, SlidersHorizontal, Heart, ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const CatalogPage = () => {
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Все';
  const initialSearch = searchParams.get('search') || '';

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = category === 'Все' || p.category === category;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesSearch = p.title.toLowerCase().includes(initialSearch.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [products, category, priceRange, initialSearch]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-slate-500 mb-8 flex gap-2">
           <Link to="/" className="hover:text-brand-600">Главная</Link> / <span className="text-slate-900 font-medium">Каталог</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 shadow-sm sticky top-24">
               <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                  <Filter size={20} className="text-brand-600" />
                  <h3 className="font-bold text-lg">Фильтры</h3>
               </div>

               <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-slate-500">Категории</h4>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`block w-full text-left py-2 px-3 transition-colors ${category === cat ? 'bg-brand-50 text-brand-700 font-bold border-l-4 border-brand-500' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
               </div>

               <div>
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-slate-500">Цена</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                     <span>{priceRange[0]} ₽</span> - <span>{priceRange[1]} ₽</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" max="10000" step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
               </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
             <div className="flex justify-between items-center mb-6">
                <p className="text-slate-500">Найдено товаров: <span className="font-bold text-slate-900">{filteredProducts.length}</span></p>
                <div className="flex gap-2">
                    <button onClick={() => setView('grid')} className={`p-2 ${view === 'grid' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 002-2h2a2 2 0 002 2v2a2 2 0 00-2 2h-2a2 2 0 00-2-2V5zM11 13a2 2 0 002-2h2a2 2 0 002 2v2a2 2 0 00-2 2h-2a2 2 0 00-2-2v-2z" /></svg>
                    </button>
                    <button onClick={() => setView('list')} className={`p-2 ${view === 'list' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    </button>
                </div>
             </div>

             <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProducts.map(product => (
                    <motion.div 
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`bg-white group border border-slate-100 hover:border-slate-300 transition-all ${view === 'list' ? 'flex flex-row h-64' : 'flex flex-col'}`}
                    >
                        <div className={`relative overflow-hidden ${view === 'list' ? 'w-1/3' : 'aspect-square'}`}>
                            <img src={product.url} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            {product.badge && (
                                <span className="absolute top-2 left-2 bg-white/90 px-2 py-1 text-xs font-bold text-brand-600 shadow-sm">{product.badge}</span>
                            )}
                            {/* Overlay Actions */}
                            <div className="absolute right-2 top-2 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                                <button onClick={() => toggleWishlist(product.id)} className={`p-2 bg-white shadow-md hover:bg-brand-50 transition-colors ${wishlist.includes(product.id) ? 'text-red-500' : 'text-slate-400'}`}>
                                    <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                                </button>
                                <Link to={`/product/${product.id}`} className="p-2 bg-white shadow-md text-slate-700 hover:bg-brand-50 transition-colors">
                                    <Eye size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className={`p-6 flex flex-col justify-between flex-grow`}>
                            <div>
                                <div className="text-xs text-slate-400 mb-1">{product.category}</div>
                                <Link to={`/product/${product.id}`}>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-brand-600 transition-colors">{product.title}</h3>
                                </Link>
                                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.description}</p>
                            </div>
                            
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                                <div>
                                    <span className="block text-xl font-bold text-slate-900">{product.price} ₽</span>
                                    {product.stock > 0 ? (
                                        <span className="text-xs text-green-600 font-medium">В наличии: {product.stock}</span>
                                    ) : (
                                        <span className="text-xs text-red-500 font-medium">Нет в наличии</span>
                                    )}
                                </div>
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="p-3 bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
                                >
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;