import React, { useEffect, useState } from 'react';
import '../styles/Bookings.css'
import { useLocation } from 'react-router-dom';
import Viewing from '../components/Viewing';
// import { getMovie } from '../services/movie';

async function getMovie(id) {
  var movie = fetch(`http://localhost:3001/movie/${id}?poster=true`, {
    method: 'GET',
    // body: JSON.stringify(object),
    headers: {
        'accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) return response.json();
    else throw new Error("Error fetching movie");
  });
  return movie;
}

function BookNow() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [movie, setMovie] = useState(null);
  const [success, setSuccess] = useState(true);

  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    var id = queryParams.get('movie_id');
    setId(id);
    fetch(`http://localhost:3001/movie`, {
      method: 'GET',
      // body: JSON.stringify(object),
      headers: {
          'accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) return response.json();
      else throw new Error("Error getting movie list");
    }).then(movies => {
      setLoading(false);
      movies.forEach(m => {
        if (m._id === id) setMovie(m);
      })
      setMovies(movies);
    }).catch(error => {
      setError(error);
    });

  }, []);

  async function selectMovie(e) {
    var id = e.target.value;
    setId(id);
    try {
      var movie = await getMovie(id);
      console.log(movie);
      setMovie(movie);
    } catch (error) {
      setError(error);
    }
  }

  function Option(props) {
    if (props.id && props.id === props.m._id) {
      return <option key={props.m._id} value={props.m._id} selected="selected">{props.m.name}</option>
    }
  
    return <option key={props.m._id} value={props.m._id}>{props.m.name}</option>
  }

  return (
    <div className="container">
      <h1>Book Now</h1>
      {error && 
        <div className="bar error-bar">
          Error making booking. Please try again later or <a href="/contact-us" target="_blank">contact us if you're having issues</a>.
        </div>
      }
      {success && 
        <div className="bar success-bar">
          Success! You should receive an email shortly.
        </div>
      }
      {loading && <p>Loading...</p>}
      {movies && 
        <div>
          <form className="booking-form">
            <div class="form-part">
              <label for="num-adults">Number of adults:</label>
              <input type="number" id="num-adults" min="0"></input>

              <label for="num-children">Number of children:</label>
              <input type="number" id="num-children" min="0"></input>

              <label for="num-concessions">Number of concession tickets (Student/Senior):</label>
              <input type="number" id="num-concessions" min="0"></input>

              <label for="forename">First Name:</label>
              <input type="text" id="first-name" min="0"></input>

              <label for="lastname">Last Name:</label>
              <input type="text" id="lastname" min="0"></input>

              <label for="email">Email:</label>
              <input type="text" id="email" min="0"></input>
            </div>
            <div class="form-part">

            <select onChange={selectMovie} id="select-movie">
              <option>Select a movie</option>
              {movies.map(m => (
                <Option m={m} id={id} />
              ))}
            </select>

            {!movie && <p>Please select a movie...</p>}
            {movie &&
              <select id="select-viewing">
                <option>Select a viewing...</option>
                {movie.viewings.map(v => (
                  <option key={v._id} value={v._id}>{v.timeAndDate}</option>
                ))}
              </select>
            }
            </div>
          </form>
          {/* {movie.viewings.map(v => (
            <Viewing key={v._id} viewing={v} />
          ))} */}
        </div>
      }
    </div>
  );
};
 

export default BookNow