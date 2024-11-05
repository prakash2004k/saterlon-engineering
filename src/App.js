import React from 'react';
import './styles.css'; // Add this line at the top of App.js
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CompanyInfo from './components/CompanyInfo';
import ContactFooter from './components/ContactFooter';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <CompanyInfo />
            <ContactFooter />
            <Footer />
        </div>
    );
};

export default App;
