import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import HeaderPage from './HeaderPage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FooterPage from './FooterPage';

const LandingPage = () => {
    return(
        <div className="LandingPage">
            <HeaderPage />
            <div className="landing-content">
                <h1>Always working on myself and never want to stop</h1>
            </div>
            <FooterPage />
        </div>
    );
}

export default LandingPage;