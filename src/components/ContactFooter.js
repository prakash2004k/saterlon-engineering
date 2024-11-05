import React from 'react';

const ContactFooter = () => {
    return (
        <div className="contact-footer">
            <div className="container d-flex justify-content-between">
                <div>
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="tel:+91770866409" className="fas fa-phone-alt" aria-label="Phone"></a>
                        <a href="mailto:saterlonengineering@gmail.com" className="fas fa-envelope" aria-label="Email"></a>
                        <a href="https://www.linkedin.com/in/yourprofile" className="fab fa-linkedin" aria-label="LinkedIn"></a>
                        <a href="https://www.yourwebsite.com" className="fas fa-globe" aria-label="Website"></a>
                    </div>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul className="list-unstyled">
                        <li><a href="index.html" className="text-white">Home</a></li>
                        <li><a href="about.html" className="text-white">About Us</a></li>
                        <li><a href="products.html" className="text-white">Products</a></li>
                        <li><a href="carrers.html" className="text-white">Carrers</a></li>
                        <li><a href="infrastructure.html" className="text-white">Infrastructure</a></li>
                        <li><a href="contactus.html" className="text-white">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactFooter;
