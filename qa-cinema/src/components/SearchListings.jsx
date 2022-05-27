import React from 'react';
import Search from './SearchMovies';

export default function Listings(props) {

    const search = props.search

    return (

        <div className="movie-cards">
            <img src={search.poster}></img>
            <p>{search.name}</p> 
            <p>{search.genre}</p>
            <p>{search.director}</p>
            <p>{search.certification}</p>
        </div>
        
    )
}

// Solution using state

// function SearchBar() {
//     const [input, setInput] = useState("");
//     return (
//         <div className="search-bar">
//             <input type="search" placeholder="Search..." onChange={(event) => {
//                 setInput(event.target.value);
//             }}
//         />
//         {fetch("http://127.0.0.1:3001/movie")
//         .then(res => res.json)
//         .filter((val) => {
//             if (input === "") {
//                 return val
//             } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
//                 return val
//             }
//         }).map((val, key) => {
//             return (
//                 <div className="movie" key={key}>
//                     <p>{val.name}</p>
//                 </div>
//             )
//         })}
//         </div>
// )}

// export default SearchBar

// Solution using the onChange event

// function SearchBar() {

//     const movieCardTemplate = document.querySelector("[data-movie-template]")
//     const movieCardContainer = document.querySelector("[data-movie-cards-container]")
    
//     let movies = []
    
//     function handleChange(e) {
//         const value = e.target.value.toLowerCase()
//         movies.forEach(movie => {
//             const isVisible = movie.name.toLowerCase().includes(value) || movie.genre.toLowerCase().includes(value)
//             movie.element.classList.toggle("hide", !isVisible)
//         })
//     }
    
//     fetch("http://127.0.0.1:3001/movie")
//         .then(res => res.json())
//         .then(data => {
//         movies = data.map(movie => {
//             const card = movieCardTemplate.content.cloneNode(true).children[0]
//             const header = card.querySelector("[data-header]")
//             const body = card.querySelector("[data-body]")
//             header.textContent = movie.name
//             body.textContent = movie.genre
//             movieCardContainer.append(card)
//             return {name: movie.name, genre: movie.genre, element: card}
//         })
//     })
    
//   return (
//      <>
//         <div class="search-wrapper">
//             <label for="search">Search All Listings</label>
//             <input type="search" id="search" placeholder="Search..." onChange={handleChange}></input>
//         </div>
//         <div class="movie-cards" data-movie-cards-container></div>
//         <template data-movie-template>
//             <div class="card">
//                 <div class="header" data-header></div>
//                 <div class="body" data-body></div>
//             </div>
//         </template>
//     </>
//   )
// }

// export default SearchBar

// Original solution using an event listener

// function SearchBar() {

//     const movieCardTemplate = document.querySelector("[data-movie-template]")
//     const movieCardContainer = document.querySelector("[data-movie-cards-container]")
//     const searchInput = document.querySelector("[data-search]")
    
//     let movies = []
    
//     searchInput.addEventListener("input", i => {
//         const value = i.target.value.toLowerCase()
//         movies.forEach(movie => {
//             const isVisible = movie.name.toLowerCase().includes(value) || movie.genre.toLowerCase().includes(value)
//             movie.element.classList.toggle("hide", !isVisible)
//         })
//     })
    
//     fetch("http://127.0.0.1:3000/movie")
//         .then(res => res.json())
//         .then(data => {
//         movies = data.map(movie => {
//             const card = movieCardTemplate.content.cloneNode(true).children[0]
//             const header = card.querySelector("[data-header]")
//             const body = card.querySelector("[data-body]")
//             header.textContent = movie.name
//             body.textContent = movie.genre
//             movieCardContainer.append(card)
//             return {name: movie.name, genre: movie.genre, element: card}
//         })
//     })
    
//   return (
//      <>
//         <div class="search-wrapper">
//             <label for="search">Search All Listings</label>
//             <input type="search" id="search" placeholder="Search..." data-search></input>
//         </div>
//         <div class="movie-cards" data-movie-cards-container></div>
//         <template data-movie-template>
//             <div class="card">
//                 <div class="header" data-header></div>
//                 <div class="body" data-body></div>
//             </div>
//         </template>
//     </>
//   )
// }

// export default SearchBar