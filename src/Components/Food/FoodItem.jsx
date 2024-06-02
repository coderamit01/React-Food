import React from 'react';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
  const {id,img,title,desc,price} = props.food;
  return (
    <div className='text-center p-6 bg-white hover:shadow-lg rounded  transition-all'>
      <Link to={`/food/${id}`}><img className='w-full h-40 md:h-64 object-contain' src={img} alt="" /></Link>
      <Link to={`/food/${id}`}><h2 className='text-2xl font-semibold p'>{title}</h2></Link>
      <p className='text-slate-500'>{desc}</p>
      <span className='text-lg font-semibold text-slate-800'>${price}</span>
    </div>
  );
};

export default FoodItem;