import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <div className="bg-slate-900 py-2">
      <div className="container mx-auto px-3">
        <p className='text-center text-white'>All Rights Reserved by ❤ <Link to='/'>Amit</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;