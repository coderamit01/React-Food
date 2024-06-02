import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch('../../../public/api/foodapi.json')
      .then(res => res.json())
      .then(data => {
        const selectedFood = data.foods.find(item => item.id === id);
        setFood(selectedFood);
        console.log(food);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching food data:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='py-20'>
    {food ? (
        <div className='container mx-auto'>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="p-3">
              <img className='w-full h-3/4 object-contain' src={food.img} alt={food.title} />
            </div>
            <div className="p-3">
              <h2 className='text-4xl font-semibold mt-4 pb-4'>{food.title}</h2>
              <p className='text-slate-500'>{food.desc}</p>
              <div className='flex items-center pt-4'>
                <span className='text-2xl font-semibold text-slate-800 me-2'>${food.price}</span>
                <div className="flex items-center border rounded-full">
                  <button className='text-lg px-4 py-2 font-semibold'>-</button>
                  <span className='text-lg'>165</span>
                  <button className='text-lg px-4 py-2 font-semibold'>+</button>

                </div>
              </div>
              <div className="inline-block pt-3">
                <div className="flex items-center px-6 py-2 rounded-full bg-rose-500 text-white">
                  <FaCartPlus />
                  <Link className='ms-2'>Add</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ): (
        <p>Not Found This Product</p>
      )}
    </div>
  );
};

export default FoodDetail;
