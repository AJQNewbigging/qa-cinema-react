import React from 'react';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import MovieCard from '../components/MovieCard';


function Home() {

  
  return (
    
    
    <div>
      
     
      <Slider slides={SliderData} />
   
      


      
      <div className='title'>
        <h4 id=''>TOP FILMS</h4>
        <MovieCard />
       </div>
     
      
   
    </div>
  );
};

export default Home