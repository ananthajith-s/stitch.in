import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Home from './pages/Home';
import CategoryGrid from './pages/CategoryGrid';
import ProductDetail from './pages/ProductDetail';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Categories />
                  <Home />
                </>
              }
            />
            
            {/* Shop/Category Grid Page */}
            <Route path="/shop" element={<CategoryGrid />} />
            
            {/* Category Specific Pages */}
            <Route
              path="/shop/:category"
              element={<CategoryGrid />}
            />
            
            {/* Product Detail Page */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
