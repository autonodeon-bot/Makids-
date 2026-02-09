import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DiscountSystem from './components/DiscountSystem';
import Gallery from './components/Gallery';
import Conditions from './components/Conditions';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { ProductImage } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductImage | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <Hero />
      <Features />
      <DiscountSystem />
      <Gallery onProductClick={setSelectedProduct} />
      <Conditions />
      <ContactForm />
      <Footer />
      
      {/* Product Details Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

export default App;