import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import GeneralPage from './components/GeneralPage';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='routes'></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/terms/general" element={<GeneralPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;