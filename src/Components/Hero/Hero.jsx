import React from 'react';
import banner from '../../assets/icons/banner-bg.png'

const Hero = () => {
  return (
    <div className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }}>
      <div className="container mx-auto">
        <div className="py-28">
          <h2 className='text-center text-5xl font-semibold'>Best food waiting for your belly</h2>
          <div className="relative w-1/3 mx-auto pt-8">
            <input className='w-full pl-4 pr-20 py-2 rounded-full border-none outline-none transition duration-200' type="text" name="" id="" placeholder='Search food name' />
            <button type="submit" className='absolute right-0 text-center px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;