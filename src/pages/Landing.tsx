import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import logo from '../assets/images/logo.svg'

import '../styles/global.css';
import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
          <img src={logo} alt="Logo" />

          <main>
            <h1>Leve felicidad para el mundo</h1>
            <p>Visite orfanatos y mude el dia de muchos niños</p>
          </main>

          <div className="location">
            <strong>Ciudad del Este</strong>
            <span>Alto Parana</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
      </div>
    </div>
  );
}

export default Landing;
