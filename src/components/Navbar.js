import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <Link className="navbar-brand" to="/">
        <img src="/WhatsApp Image 2024-10-31 at 11.15.37_a429461e.jpg" alt="Logo" className="navbar-logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>
    </div>
    </div>
</nav>
);

export default Navbar;
