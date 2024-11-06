import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CompanyInfo from './components/CompanyInfo';
import ContactFooter from './components/ContactFooter';
import Footer from './components/Footer';
import './index.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <div>
          <CompanyInfo />
          <ContactFooter />
        </div>
      } />
      {/* If you want an About page in the future, you can add the route back */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
