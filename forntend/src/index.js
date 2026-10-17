import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//react router dom setup here
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './landing_page/home/Home';
import Signup from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import Pricing from './landing_page/home/Pricing';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      {/* route tag is self closing tag */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<Pricing />} />
    
      <Route path="*" element={<NotFound />} />
      {/* to make these work app link tag instead of anchor tag in navbar , also add to=link */}
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//browser router = wrapper for routing
//jo bhi links h all in <Routes></Routes>
//and that actual route in Route