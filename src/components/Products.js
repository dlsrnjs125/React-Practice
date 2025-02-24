// src/components/Products.js
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productList = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  return (
    <div>
      <h1>🛍️ Products</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;
