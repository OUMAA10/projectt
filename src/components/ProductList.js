import React from 'react';
import { useDispatch } from 'react-redux';
import './ProductList.css';
import { addToCart } from '../redux/actions';

// Importation des images
import plant1 from '../assets/images/plant1.jpeg';
import plant2 from '../assets/images/plant2.jpeg';
import plant3 from '../assets/images/plant3.jpeg';

// Liste des produits
const products = [
  { id: 1, name: 'Succulent', price: '$15', image: plant1 },
  { id: 2, name: 'Cactus', price: '$20', image: plant2 },
  { id: 3, name: 'Fern', price: '$25', image: plant3 },
  // Ajoute plus de produits ici si nécessaire
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Nos Plantes</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Prix : {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
