import React, { useEffect } from 'react';
import '../styles/ContactPage.css';
import HeaderPage from './HeaderPage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FooterPage from './FooterPage';

const ContactPage = () => {
    return(
        <div className="contact">
            <HeaderPage />
            <div className="contact-content">
                <h1 className="contact-text">Thank you for your interest in me! I cannot wait to here from you and possibly work with you further. Please include as much information about the project as possible so that I can determine if I can work with you.</h1>
                <div className="contact-links">
                    <ul className="contact-list">
                        <li className="list-item">
                            <h4>
                                <a style={{textDecoration: "none"}} href="mailto:andrewperalta11@gmail.com"><em>Email me @ andrewperalta11@gmail.com</em></a>
                            </h4>
                        </li>
                        <hr className="contact-decor" />
                        <li className="list-item">
                            <h4>
                                <a style={{textDecoration: "none"}} href="tel:1-917-378-5833"><em>Here's my mobile, (917)-378-5833</em></a>
                            </h4>
                        </li>
                        <hr className="contact-decor" />
                        <li className="list-item">
                            <h4>
                                <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/andrew-peralta-7537631aa/"><em>Check out my LinkedIn</em></a>
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
            <FooterPage />
        </div>
    );
}

export default ContactPage;