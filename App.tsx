import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { StoreProvider } from './context/StoreContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/auth/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProfilePage from './pages/ProfilePage';
import ProductPage from './pages/ProductPage';

// Protectors
import { useStore } from './context/StoreContext';

const AdminRoute = ({ children }: { children?: React.ReactNode }) => {
  const { user } = useStore();
  if (!user || user.role !== 'admin') return <Navigate to="/login" />;
  return <>{children}</>;
};

const PrivateRoute = ({ children }: { children?: React.ReactNode }) => {
  const { user } = useStore();
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

function App() {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
          <Header />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              <Route path="/profile" element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              } />
              
              <Route path="/admin/*" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="bottom-right" toastOptions={{
          style: { borderRadius: '0px', border: '1px solid #e2e8f0', boxShadow: 'none' }
        }} />
      </Router>
    </StoreProvider>
  );
}

export default App;