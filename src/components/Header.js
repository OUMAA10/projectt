import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);

  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/cart">Panier ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
