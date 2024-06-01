import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';

const Food = () => {
  const allfood = '/src/api/foodapi.json';

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(allfood)
    .then(res=> res.json())
    .then(data => setFoods(data.foods))
  },[])
   
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 ">
          {
            foods.filter(fd => fd.category === 'breakfast').slice(0,6).map(fd => (<FoodItem key={fd.id} food={fd}></FoodItem>))
          }
        </div>
      </div>
    </div>
  );
};

export default Food;