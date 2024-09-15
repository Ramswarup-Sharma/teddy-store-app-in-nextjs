import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import teddy1 from '../images/teddy1.jpg';
import teddy2 from '../images/teddy2.jpg';
import teddy3 from '../images/teddy3.jpg';

const products = [
  { id: 1, name: 'Classic Teddy', price: '$20', description: 'A classic teddy bear.', image: teddy1 },
  { id: 2, name: 'Cute Bear', price: '$25', description: 'A cute teddy bear.', image: teddy2 },
  { id: 3, name: 'Big Bear', price: '$30', description: 'A big teddy bear.', image: teddy3 },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(prod => prod.id === parseInt(id));

  return (
    <div className="product">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="250" height="250" />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => alert("Successfully add the cart") }>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
