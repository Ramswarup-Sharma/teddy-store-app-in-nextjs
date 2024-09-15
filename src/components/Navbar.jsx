import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidShoppingBags } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><BiSolidShoppingBags /> TEDDY STORE</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/cart"><HiShoppingCart /> Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
