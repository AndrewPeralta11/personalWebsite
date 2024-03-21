import React, { useEffect } from 'react';
import '../styles/HeaderPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderPage = () => {
    return (
        <div className="header">
            <h1>Work In Progress</h1>
            <div className="radio-inputs">
                <label className="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/" className="name"><span>Home</span></Link>
                </label>
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/about" className="name"><span>About</span></Link>
                </label>
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/projects" className="name"><span>Projects</span></Link>
                </label>
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/contact" className="name"><span>Contact</span></Link>
                </label>
            </div>
        </div>
    );
}

export default HeaderPage;