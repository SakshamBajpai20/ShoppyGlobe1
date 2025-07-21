import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to='/' className='logo'>🛒 ShoppyGlobe</Link>
        <div className='nav-links'>
          <Link to='/cart' className='cart-link'>
            🛍️ Cart ({cartCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;