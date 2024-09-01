import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Assure-toi que ce fichier CSS existe et est correctement configuré

import backgroundImage from '../assets/images/background.jpeg'; // Assure-toi que le chemin est correct

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <h1>Nom de l'entreprise</h1>
      <p>Bienvenue dans notre boutique de plantes, où vous trouverez les meilleures plantes d'intérieur pour votre maison.</p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
