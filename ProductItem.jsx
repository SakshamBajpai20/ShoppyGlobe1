import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './ProductItem.css';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className='product-item'>
      <Link to={`/product/${product.id}`} className='product-link'>
        <img src={product.thumbnail} alt={product.title} className='product-img' />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
      <button onClick={handleAddToCart} className='add-cart-btn'>Add to Cart 🛒</button>
    </div>
  );
}

export default ProductItem;