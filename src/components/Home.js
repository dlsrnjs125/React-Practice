// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>🏠 Home Page</h1>
    <p>Welcome to our website! Navigate using the links below:</p>
    <nav>
      <Link to="/about">About Us</Link> | 
      <Link to="/products">Products</Link>
    </nav>
  </div>
);
export default Home;




