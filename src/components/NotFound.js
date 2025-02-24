// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>❌ 404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Go back to Home</Link>
  </div>
);

export default NotFound;


