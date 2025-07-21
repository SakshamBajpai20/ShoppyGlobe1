import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => {
        console.error(err);
        setError('Failed to fetch product details.');
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (error) return <p className='error'>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className='product-detail'>
      <img src={product.thumbnail} alt={product.title} className='detail-img' />
      <div className='detail-info'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={handleAddToCart} className='add-cart-btn'>Add to Cart 🛒</button>
      </div>
    </div>
  );
}

export default ProductDetail;