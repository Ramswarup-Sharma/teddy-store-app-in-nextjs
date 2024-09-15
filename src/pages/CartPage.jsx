import React, { useState } from 'react';
import CartItem from './CartItem';
import './CartPage.css';
import teddy3 from '../images/teddy3.jpg';
import teddy4 from '../images/teddy4.jpg';

const initialCart = [
  { id: 1, name: 'Teddy Bear', price: 20, quantity: 2, image: teddy3 },
  { id: 2, name: 'Cute Bear', price: 25, quantity: 1, image: teddy4 },
  { id: 3, name: 'Big Bear', price: 30, quantity: 1, image: teddy3 }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  // Remove item from the cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Change quantity of item
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Add item to cart
  const addItemToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (<>
    <div className="banner">
        <img src="./teddy-banner-image.jpg" alt="Banner" className="banner-image" />
      </div>
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <hr/>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total: ${total}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </>
  );
};

export default CartPage;


