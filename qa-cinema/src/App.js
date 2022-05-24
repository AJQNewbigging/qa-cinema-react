import React from 'react';
import './App.css';
import './styles/Slider.css'
import './styles/MovieCard.css'
import './home.css';
import './components/Navbar'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import ContactUs from './pages/ContactUs';
import BookNow from './pages/BookNow';
import Location from './pages/Location';




function App() {
return (

<Router>

<div className='home'>
<Navbar/>
<Routes>
        <Route path='/' exact component={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/Book-now' element={<BookNow />} />
        <Route path='/Location' element={<Location />} /> 
        </Routes>
      
        
<div>
<Slider slides={SliderData} />
<MovieCard />

</div>

</div>

</Router>







  );
}

export default App;
