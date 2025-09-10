import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            <img src={p.image} alt={p.name} width={50} style={{verticalAlign: 'middle', marginRight: '10px'}} />
            <Link to={`/product/${p._id}`}>{p.name}</Link> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;