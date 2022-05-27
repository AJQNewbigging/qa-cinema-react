import React, { useEffect, useState } from 'react';
import '../styles/Bookings.css'
import { useLocation } from 'react-router-dom';
import Viewing from '../components/Viewing';
// import { getMovie } from '../services/movie';

function BookNow() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('movie_id');
    fetch(`http://localhost:3001/movie/${id}?poster=true`, {
      method: 'GET',
      // body: JSON.stringify(object),
      headers: {
          'accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) return response.json();
      else throw new Error("Whoops");
    }).then(movie => {
      setLoading(false);
      setMovie(movie);
    }).catch(error => {
      setError(error);
    });
  }, [])
  return (
    <div className="container">
      <h1>Book Now</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {movie && 
        <div>
          {movie.viewings.map(v => (
            <Viewing key={v._id} viewing={v} />
          ))}
        </div>
      }
    </div>
  );
};
 

export default BookNow