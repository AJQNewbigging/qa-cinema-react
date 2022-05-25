import React from 'react';
import '../styles/Location.css';

function Location() {
  return (
    <div className="container">
      <h1>How to Find Us</h1>

      <div className="card-list">
        <div className="card">
          <div>
            <h2>Address</h2>
            <p>3rd Floor, International House</p>
            <p>1 St Katharine's Way, London</p>
            <p>E1W 1UN</p>
          </div>
        </div>
        <div className="card">
          <div>
            <h2>Opening times</h2>
            <p>Mon-Fri ~ 08:00 - 21:00</p>
            <p>Sat-Sun ~ 10:00 - 19:00</p>
          </div>
        </div>
        <div className="card">
          <div>
            <h2>Transport Links</h2>
            <ul>
              <li>Tower Hill</li>
              <li>Aldgate</li>
              <li>London Bridge</li>
            </ul>
            <p>Tower Hill is the closest station, under a 10 minute walk away. Other nearby stations include Aldgate and London Bridge</p>
          </div>
        </div>
        <div className="card">
          <div>
            <h2>Directions</h2>
            <img src="./static/map-2.png" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Location