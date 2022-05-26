import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../components/SearchMovies';

export default function SearchMovies() {

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    const Location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:3001/movie`, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error("Error");
        }).then(movies => {
            setLoading(false);
            setMovies(movies);
        }).catch(error => {
            setError(error);
        });
}, [])

return (

    <div className="container">
        <input type="text" placeholder="Search All Movies..." onChange={(event => {setInput(event.target.value)})}></input>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {movies && movies.filter((val) => {
            if (input === "") {
                return val;
            } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
                return val
            } else if (val.genre.toLowerCase().includes(input.toLowerCase())) {
                return val
            } else if (val.director.toLowerCase().includes(input.toLowerCase())) {
                return val
            } else if (val.certification.toLowerCase().includes(input.toLowerCase())) {
                return val
            }
        }).map(m => (
            <Search key={m._id} search={m} />
        ))}
    </div>

    );
};