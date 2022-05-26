import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import BookNow from './pages/BookNow';
import ContactUs from './pages/ContactUs';
import Listings from './pages/Listings';
import Location from './pages/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="listings" element={<Listings />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="book" element={<BookNow />} />
            <Route path="location" element={<Location />} />
            {/* <Route path="search" element={<Search />} /> */}
          </Route>
          {/* <Route path='*' element={<Error />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);