import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import DiscountSystem from './components/DiscountSystem';
import Gallery from './components/Gallery';
import Conditions from './components/Conditions';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Hero />
      <Features />
      <DiscountSystem />
      <Gallery />
      <Conditions />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;