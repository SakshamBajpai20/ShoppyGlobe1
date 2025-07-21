import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => {
        console.error(err);
        setError('Failed to fetch products.');
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='product-list'>
      <h2>🛍️ Products</h2>
      <input
        type='text'
        placeholder='Search products...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='search-input'
      />
      {error && <p className='error'>{error}</p>}
      <div className='product-grid'>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;