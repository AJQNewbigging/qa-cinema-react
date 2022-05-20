import React from 'react';
import './App.css';
import './styles/Slider.css'
import './home.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';

function App() {
return (
<Router>
<Navbar />

< div className='home'>
<Slider slides={SliderData} />

</div>




</Router>



  );
}

export default App;
