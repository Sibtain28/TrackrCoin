import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Portfolio from './pages/Portfolio/Portfolio';
import Converter from './pages/Converter/Converter';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';
import './index.css'; // Ensure global styles are included

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
