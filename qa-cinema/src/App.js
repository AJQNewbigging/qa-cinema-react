import React from 'react';
import './App.css';
import './styles/Slider.css'
import './styles/MovieCard.css'
import './home.css';
import './components/Navbar'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
<div className='home'>
<Router>
<Navbar/>
<Routes>
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/listings' component={Listings} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/Book-now' component={BookNow} />
        <Route path='/Location' component={Location} /> 
       </Routes>
     </Router>
<Slider slides={SliderData} />
<>
<MovieCard/>

</>
</div>






  );
}

export default App;
