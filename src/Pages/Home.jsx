import React from 'react';
import Hero from '../Components/Hero/Hero';
import Food from '../Components/Food/Food';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Food />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default Home;