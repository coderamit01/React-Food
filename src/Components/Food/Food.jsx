import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import FoodItem from './FoodItem';

const Food = () => {
  const allfood = '/src/api/foodapi.json';

  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState('lunch');

  useEffect(() => {
    fetch(allfood)
      .then(res => res.json())
      .then(data => setFoods(data.foods))
      .catch(error => console.error('Error fetching food data:', error));
  }, []);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={category} onChange={handleChange} aria-label="food categories" centered>
            <Tab label="Breakfast" value="breakfast" />
            <Tab label="Lunch" value="lunch" />
            <Tab label="Dinner" value="dinner" />
          </Tabs>
        </Box>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mt-4">
          {foods
            .filter(fd => fd.category === category) // Filter by selected category
            .slice(0, 6) // Limit to 6 items
            .map(fd => (
              <FoodItem key={fd.id} food={fd} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
