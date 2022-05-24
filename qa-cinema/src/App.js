import React from 'react';
import './App.css';
import './styles/Slider.css';
import './home.css';
import './components/Navbar';
import ContactForm from './components/ContactForm';
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
<Router>
<div className='home'>
<Navbar/>
<Routes>
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/listings' component={Listings} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/Book-now' component={BookNow} />
        <Route path='/Location' component={Location} /> 
       </Routes>
       <Slider slides={SliderData} />
<ContactForm/> 
     
</div>
</Router>
  );
}

export default App;
