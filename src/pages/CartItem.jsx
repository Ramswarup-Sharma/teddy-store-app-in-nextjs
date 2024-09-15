import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <div className="quantity">
          <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
           -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button onClick={() => onRemove(item.id)} className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
