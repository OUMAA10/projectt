import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Prix : {item.price}€</p>
                  <p>Quantité : {item.quantity}</p>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <button onClick={() => handleRemove(item.id)}>Supprimer</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total : {getTotalPrice()}€</p>
            <button disabled>Coming Soon</button>
            <Link to="/products">
              <button>Continuer mes achats</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
