import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="WhatsApp Image 2024-10-31 at 11.15.37_a429461e.jpg" alt="Logo" className="navbar-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="products.html">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="carrers.html">Career</a></li>
                        <li className="nav-item"><a className="nav-link" href="infrastructure.html">Infrastructure</a></li>
                        <li className="nav-item"><a className="nav-link" href="contactus.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
