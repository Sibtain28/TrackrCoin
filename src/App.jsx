import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Portfolio from './pages/Portfolio/Portfolio';
import Converter from './pages/Converter/Converter';
import News from './pages/News/News';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/converter' element={<Converter/>} />
        <Route path='/news' element={<News/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
