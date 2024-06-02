import React from 'react';
import foodImg from '../../assets/breakfast/breakfast5.png';
import { Link } from 'react-router-dom';
const Shipment = () => {
  return (
    <div className='py-14'>
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className='text-2xl font-semibold text-slate-800 pb-3 border-b border-b-black mb-3'>Edit Delivery Details</h2>

            <form action="">
              <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="text" placeholder='Delivery to Door' />
              <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="text" placeholder='29 Rd 4' />
              <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="text" placeholder='Flat suit or floor' />
              <input className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' type="text" placeholder='Business Name' />
              <textarea name="" id="" className='w-full px-3 py-3 bg-slate-200 text-slate-700 outline-none rounded mb-3' placeholder='Add Delivery Instructor'></textarea>
              <button type='submit' className='w-full p px-3 py-3 bg-rose-600 text-white rounded-md mt-3'>Save & Continue</button>
            </form>
          </div>
          <div ></div>
          <div className='md:col-span-2'>
            <div className="space-y-1">
              <p className='text-base'>From <span className='font-semibold'>Mohammadpur Dhaka</span></p>
              <p>Ariving in 20-30 Minutes</p>
              <p>29 Rd No 4</p>
            </div>
            <div className="pt-3 space-y-2">
              <div className="flex items-center justify-between p-2 bg-slate-100">
                <img src={foodImg} alt="" className='w-12 h-auto object-contain' />
              <div className="p-3">
                <p>Dinner 1</p>
                <span className='font-bold text-red-500'>$24</span>
              </div>
              <div className="flex items-center">
                <button className='text-lg font-semibold p-1 me-1'>-</button>
                <span className='font-semibold bg-white py-1 px-2'>2</span>
                <button className='tetxt-lg font-semibold p-1 ms-1'>+</button>
              </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-100">
                <img src={foodImg} alt="" className='w-12 h-auto object-contain' />
              <div className="p-3">
                <p>Dinner 1</p>
                <span className='font-bold text-red-500'>$24</span>
              </div>
              <div className="flex items-center">
                <button className='text-lg font-semibold p-1 me-1'>-</button>
                <span className='font-semibold bg-white py-1 px-2'>2</span>
                <button className='tetxt-lg font-semibold p-1 ms-1'>+</button>
              </div>
              </div>
            </div>
            <div className="pt-3 space-y-2">
              <div className="flex items-center justify-between">
                <p className='text-base text-slate-700'>Subtotal -4 item</p>
                <p  className='text-base text-slate-700'>$24</p>
              </div>
              <div className="flex items-center justify-between">
                <p className='text-base text-slate-700'>Tax</p>
                <p  className='text-base text-slate-700'>$24</p>
              </div>
              <div className="flex items-center justify-between">
                <p className='text-base text-slate-700'>Delivery Fee</p>
                <p  className='text-base text-slate-700'>$24</p>
              </div>
              <div className="flex items-center justify-between">
                <p className='text-lg text-slate-700 font-semibold'>Total</p>
                <p  className='text-lg text-slate-700 font-semibold'>$24</p>
              </div>
            </div>
            <Link to='' className='block text-center px-4 py-3 bg-slate-600 text-white rounded-md mt-2'>Place Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;