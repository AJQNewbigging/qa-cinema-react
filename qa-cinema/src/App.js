import React from 'react';
import './App.css';
import './home.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
return (
<Router>
<Navbar />

<div className='home'>


</div>


</Router>



  );
}

export default App;
