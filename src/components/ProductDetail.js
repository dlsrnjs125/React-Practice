// src/components/ProductDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // URL의 파라미터를 가져옵니다.
  const navigate = useNavigate(); // 프로그래밍 방식으로 라우팅할 때 사용
  return (
    <div>
      <h1>📦 Product Detail</h1>
      <p>Showing details for product ID: {id}</p>
      <button onClick={() => navigate('/products')}>Back to Products</button>
    </div> );
};

export default ProductDetail;


