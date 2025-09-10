import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={200} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.countInStock}</p>
      {/* Add to cart button would go here */}
    </div>
  );
}

export default ProductPage;