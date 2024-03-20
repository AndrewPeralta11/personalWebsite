import React, { useEffect } from 'react';
import '../styles/HeaderPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderPage = () => {
    return (
        <div className="header">
            <h1>Work In Progress</h1>
            <div class="radio-inputs">
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/"><span class="name">Home</span></Link>
                </label>
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/about"><span class="name">About</span></Link>
                </label>
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/projects"><span class="name">Projects</span></Link>
                </label>
                <label class="radio">
                    <input type="radio" name="radio"/>
                    <Link to="/contact"><span class="name">Contact</span></Link>
                </label>
            </div>
        </div>
    );
}

export default HeaderPage;