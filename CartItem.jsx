import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className='cart-item'>
      <img src={item.thumbnail} alt={item.title} className='cart-item-img' />
      <div className='cart-item-info'>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={handleRemove} className='remove-btn'>Remove ❌</button>
      </div>
    </div>
  );
}

export default CartItem;
