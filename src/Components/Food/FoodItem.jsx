import React from 'react';

const FoodItem = (props) => {
  const {img,title,desc,price} = props.food;
  return (
    <div className='text-center transition-all p-6 bg-white hover:shadow-lg rounded'>
      <img className='w-full h-64 object-contain' src={img} alt="" />
      <h2 className='text-2xl font-semibold p'>{title}</h2>
      <p className='text-slate-500'>{desc}</p>
      <span className='text-lg font-semibold text-slate-800'>${price}</span>
    </div>
  );
};

export default FoodItem;