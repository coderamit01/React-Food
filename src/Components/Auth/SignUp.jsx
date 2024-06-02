import React from 'react';
import logo from '../../assets/icons/logo.png';
const SignUp = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="p2 w-1/4">
        <img src={logo} alt="" className='w-48 h-auto object-contain mx-auto' />
        <form action="" className='pt-4'>
          <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="text" placeholder='Name' />
          <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="email" placeholder='Email' />
          <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="password" placeholder='Password' />
          <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="password" placeholder='Confirm Password' />
          <button type='submit' className='w-full p px-3 py-3 bg-rose-600 text-white rounded-md mt-3'>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;