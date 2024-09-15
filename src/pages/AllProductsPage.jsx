import React from 'react';
import teddy1 from '../images/teddy1.jpg';
import teddy2 from '../images/teddy2.jpg';
import teddy3 from '../images/teddy3.jpg';
import teddy4 from '../images/teddy4.jpg';

const products = [
  { id: 1, name: 'Classic Teddy', price: '$20', image: teddy3 },
  { id: 2, name: 'Cute Bear', price: '$25', image: teddy4 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy3 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy4 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy3 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy3 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy4 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy3 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy3 },
  { id: 3, name: 'Big Bear', price: '$30', image: teddy4 },
];

const AllProductsPage = () => {
  return (
    <>
        <div className="banner">
        <img src="./teddy-banner-image.jpg" alt="Banner" className="banner-image" />
      </div>
    <div className="products-container">
      <h1>All Teddy Bears</h1>
      <div className="products-row">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AllProductsPage;