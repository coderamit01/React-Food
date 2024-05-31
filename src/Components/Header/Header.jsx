import React from 'react';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCartPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='container mx-auto bg-white py-3'>
      <div className="flex justify-between items-center">
        <img className='w-40 h-auto object-contain' src={logo} alt="" />
        <nav>
          <ul className='flex space-x-6 items-center'>
            <li><Link className='text-lg' to="/cart"><FaCartPlus /></Link></li>
            <li><Link className='text-lg' to="/login">Login</Link></li>
            <li><Link className='text-base px-3 py-2 rounded-full bg-rose-600 text-white align-middle' to="/signup">Sign up</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;