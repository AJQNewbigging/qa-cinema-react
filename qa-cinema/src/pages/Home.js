import React from 'react'

import '../styles/Slider.css';
import '../styles/MovieCard.css';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import MovieCard from '../components/MovieCard';

function Home() {
  return (
    <div>
      <Slider slides={SliderData} />
      <MovieCard />
    </div>
  );
};

export default Home