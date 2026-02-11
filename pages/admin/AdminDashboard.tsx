import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, Settings, Users, DollarSign, Plus, Edit, Trash2, Save } from 'lucide-react';
import { ProductImage } from '../../types';

const AdminDashboard = () => {
  const { products, orders, settings, addProduct, updateProduct, deleteProduct, updateSettings } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'settings'>('overview');
  const [editingProduct, setEditingProduct] = useState<ProductImage | null>(null);

  // Stats Logic
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);
  const data = [
    { name: 'Янв', revenue: 4000 },
    { name: 'Фев', revenue: 3000 },
    { name: 'Мар', revenue: 2000 },
    { name: 'Апр', revenue: 2780 },
    { name: 'Май', revenue: 1890 },
    { name: 'Июн', revenue: 2390 },
    { name: 'Июл', revenue: 3490 },
  ];

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
       // Check if new or existing
       const exists = products.find(p => p.id === editingProduct.id);
       if (exists) {
          updateProduct(editingProduct);
       } else {
          addProduct(editingProduct);
       }
       setEditingProduct(null);
    }
  };

  const createNewProduct = () => {
     setEditingProduct({
        id: Math.random().toString(36).substr(2, 9),
        title: '',
        price: 0,
        description: '',
        url: 'https://source.unsplash.com/random/400x400?kids,clothes',
        tempRange: '',
        sizes: '',
        category: 'Новинки',
        stock: 10
     });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
       {/* Sidebar */}
       <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden md:block">
          <div className="p-6">
             <h2 className="text-xl font-bold text-white mb-8">Admin Panel</h2>
             <nav className="space-y-2">
                <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 ${activeTab === 'overview' ? 'bg-brand-600 text-white' : 'hover:bg-slate-800'}`}>
                   <DollarSign size={20} /> Обзор
                </button>
                <button onClick={() => setActiveTab('products')} className={`w-full flex items-center gap-3 px-4 py-3 ${activeTab === 'products' ? 'bg-brand-600 text-white' : 'hover:bg-slate-800'}`}>
                   <Package size={20} /> Товары
                </button>
                <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 ${activeTab === 'settings' ? 'bg-brand-600 text-white' : 'hover:bg-slate-800'}`}>
                   <Settings size={20} /> Настройки
                </button>
             </nav>
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'overview' && (
             <div className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-800">Обзор магазина</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-white p-6 shadow-sm border border-slate-200">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <p className="text-slate-500 text-sm">Общая выручка</p>
                            <h3 className="text-2xl font-bold text-slate-900">{totalRevenue.toLocaleString()} ₽</h3>
                         </div>
                         <div className="p-2 bg-green-100 text-green-600"><DollarSign /></div>
                      </div>
                   </div>
                   <div className="bg-white p-6 shadow-sm border border-slate-200">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <p className="text-slate-500 text-sm">Заказов</p>
                            <h3 className="text-2xl font-bold text-slate-900">{orders.length}</h3>
                         </div>
                         <div className="p-2 bg-blue-100 text-blue-600"><Package /></div>
                      </div>
                   </div>
                   <div className="bg-white p-6 shadow-sm border border-slate-200">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <p className="text-slate-500 text-sm">Клиентов</p>
                            <h3 className="text-2xl font-bold text-slate-900">124</h3>
                         </div>
                         <div className="p-2 bg-purple-100 text-purple-600"><Users /></div>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-slate-200 h-96">
                   <h3 className="text-lg font-bold mb-6">Динамика продаж</h3>
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} />
                         <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <Bar dataKey="revenue" fill="#d94949" barSize={40} />
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>
          )}

          {activeTab === 'products' && (
             <div>
                <div className="flex justify-between items-center mb-8">
                   <h2 className="text-3xl font-bold text-slate-800">Управление товарами</h2>
                   <button onClick={createNewProduct} className="px-4 py-2 bg-brand-600 text-white font-bold flex items-center gap-2 hover:bg-brand-700">
                      <Plus size={18} /> Добавить товар
                   </button>
                </div>

                {editingProduct && (
                   <div className="mb-8 bg-white p-6 shadow-md border-l-4 border-brand-500">
                      <h3 className="text-xl font-bold mb-4">{editingProduct.title ? 'Редактировать' : 'Новый товар'}</h3>
                      <form onSubmit={handleProductSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <input type="text" placeholder="Название" className="p-2 border" value={editingProduct.title} onChange={e => setEditingProduct({...editingProduct, title: e.target.value})} required />
                         <input type="text" placeholder="Категория" className="p-2 border" value={editingProduct.category} onChange={e => setEditingProduct({...editingProduct, category: e.target.value})} required />
                         <input type="number" placeholder="Цена" className="p-2 border" value={editingProduct.price} onChange={e => setEditingProduct({...editingProduct, price: Number(e.target.value)})} required />
                         <input type="number" placeholder="Сток" className="p-2 border" value={editingProduct.stock} onChange={e => setEditingProduct({...editingProduct, stock: Number(e.target.value)})} required />
                         <textarea placeholder="Описание" className="col-span-2 p-2 border" value={editingProduct.description} onChange={e => setEditingProduct({...editingProduct, description: e.target.value})} />
                         <div className="col-span-2 flex gap-2">
                            <button type="submit" className="px-4 py-2 bg-green-600 text-white font-bold">Сохранить</button>
                            <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 bg-slate-200 text-slate-700">Отмена</button>
                         </div>
                      </form>
                   </div>
                )}

                <div className="bg-white shadow-sm overflow-hidden">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="bg-slate-50 text-slate-500 text-sm">
                            <th className="p-4">Фото</th>
                            <th className="p-4">Название</th>
                            <th className="p-4">Категория</th>
                            <th className="p-4">Цена</th>
                            <th className="p-4">Сток</th>
                            <th className="p-4">Действия</th>
                         </tr>
                      </thead>
                      <tbody>
                         {products.map(p => (
                            <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                               <td className="p-4"><img src={p.url} alt="" className="w-10 h-10 object-cover bg-slate-100" /></td>
                               <td className="p-4 font-medium">{p.title}</td>
                               <td className="p-4 text-sm text-slate-500">{p.category}</td>
                               <td className="p-4 font-bold">{p.price} ₽</td>
                               <td className="p-4">{p.stock}</td>
                               <td className="p-4 flex gap-2">
                                  <button onClick={() => setEditingProduct(p)} className="p-2 text-blue-600 hover:bg-blue-50"><Edit size={16} /></button>
                                  <button onClick={() => deleteProduct(p.id)} className="p-2 text-red-600 hover:bg-red-50"><Trash2 size={16} /></button>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>
          )}

          {activeTab === 'settings' && (
             <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Настройки магазина</h2>
                <div className="bg-white p-8 shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-serif font-bold">Y</div>
                      Интеграция с ЮKassa
                   </h3>
                   <div className="space-y-4">
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-2">Shop ID (Идентификатор магазина)</label>
                         <input 
                            type="text" 
                            className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-500 outline-none font-mono text-sm"
                            value={settings.yookassaShopId}
                            onChange={e => updateSettings({...settings, yookassaShopId: e.target.value})}
                         />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-2">Secret Key (Секретный ключ)</label>
                         <input 
                            type="password" 
                            className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-brand-500 outline-none font-mono text-sm"
                            value={settings.yookassaSecretKey}
                            onChange={e => updateSettings({...settings, yookassaSecretKey: e.target.value})}
                         />
                      </div>
                      <div className="pt-4">
                         <button className="px-6 py-3 bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors flex items-center gap-2">
                            <Save size={18} /> Сохранить ключи
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          )}
       </main>
    </div>
  );
};

export default AdminDashboard;