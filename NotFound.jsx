import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className='not-found'>
      <h2>404 - Page Not Found 😢</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to='/' className='home-link'>Go Back Home 🏠</Link>
    </div>
  );
}

export default NotFound;