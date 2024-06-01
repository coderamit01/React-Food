import React from 'react';
import fast from '../../assets/icons/fast.png';
import good from '../../assets/icons/support.png';
import home from '../../assets/icons/delivery.png';
import { Link } from 'react-router-dom';

const ChooseUs = () => {
  return (
    <div className='pt-8 pb-12'>
      <div className="container mx-auto px-3">
        <div className="w-full md:w-1/2 mx-auto">
          <h2 className='text-center text-3xl font-semibold pb-3'>Why Choose Us</h2>
          <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
        </div>
        <div className="pt-5">
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
            <div className='p-6'>
              <img src={fast} alt="" className='w-full h-auto' />
              <h4 className='py-2 font-semibold text-xl'>Fast Delivery</h4>
              <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus excepturi quam vero perspiciatis quaerat eos.</p>
              <Link to='' className='mt-4 inline-block text-sky-500'>See More</Link>
            </div>
            <div className='p-6'>
              <img src={good} alt="" className='w-full h-auto' />
              <h4 className='py-2 font-semibold text-xl'>A Good Auto Responder</h4>
              <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus excepturi quam vero perspiciatis quaerat eos.</p>
              <Link to='' className='mt-4 inline-block text-sky-500'>See More</Link>
            </div>
            <div className='p-6'>
              <img src={home} alt="" className='w-full h-auto' />
              <h4 className='py-2 font-semibold text-xl'>24/7 Support</h4>
              <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus excepturi quam vero perspiciatis quaerat eos.</p>
              <Link to='' className='mt-4 inline-block text-sky-500'>See More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;