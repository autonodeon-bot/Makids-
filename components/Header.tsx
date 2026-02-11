import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User as UserIcon, LogOut, Settings, Heart, Search } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const { user, cart, logout, wishlist } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${searchQuery}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-black tracking-tight text-slate-900 flex items-center gap-1">
          MAKIDS
          <span className="text-brand-500 text-4xl leading-none">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/catalog" className="font-medium text-slate-600 hover:text-brand-600 transition-colors">Каталог</Link>
          <a href="/#conditions" className="font-medium text-slate-600 hover:text-brand-600 transition-colors">Условия</a>
          <a href="/#contacts" className="font-medium text-slate-600 hover:text-brand-600 transition-colors">Контакты</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-slate-100 transition-colors">
            <Search size={20} className="text-slate-700" />
          </button>

          <Link to="/cart" className="relative p-2 hover:bg-slate-100 transition-colors">
            <ShoppingCart size={20} className="text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="relative group">
              <Link to={user.role === 'admin' ? '/admin' : '/profile'} className="flex items-center gap-2 p-2 hover:bg-slate-100 transition-colors">
                <div className="w-8 h-8 bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
                  {user.name[0].toUpperCase()}
                </div>
              </Link>
              {/* Dropdown */}
              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right">
                 <div className="bg-white shadow-xl border border-slate-100 p-2">
                    <div className="px-3 py-2 text-sm text-slate-500 border-b border-slate-100 mb-2">
                       {user.email}
                    </div>
                    {user.role === 'admin' && (
                       <Link to="/admin" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 text-slate-700">
                          <Settings size={16} /> Админ панель
                       </Link>
                    )}
                    <Link to="/profile" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 text-slate-700">
                       <UserIcon size={16} /> Профиль
                    </Link>
                    <Link to="/profile" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 text-slate-700">
                       <Heart size={16} /> Избранное ({wishlist.length})
                    </Link>
                    <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-red-50 text-red-600">
                       <LogOut size={16} /> Выйти
                    </button>
                 </div>
              </div>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="px-5 py-2 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              Войти
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Search Bar Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
               <form onSubmit={handleSearch} className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск товаров (например: Softshell)..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-500 outline-none"
                    autoFocus
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-600 font-bold text-sm">
                    НАЙТИ
                  </button>
               </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      <motion.div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden`}
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
      >
        <div className="flex flex-col p-4 gap-4">
          <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Каталог</Link>
          <a href="/#conditions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Условия</a>
          <a href="/#contacts" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Контакты</a>
        </div>
      </motion.div>
    </motion.header>
    </>
  );
};

export default Header;