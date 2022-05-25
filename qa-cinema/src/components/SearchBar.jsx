import React from 'react'
import '../styles/search.css'

function SearchBar() {
    const movieCardTemplate = document.querySelector("[data-movie-template]")
    const movieCardContainer = document.querySelector("[data-movie-cards-container]")
    const searchInput = document.querySelector("[data-search]")
    
    let movies = []
    
    searchInput.addEventListener("input", i => {
        const value = i.target.value.toLowerCase()
        movies.forEach(movie => {
            const isVisible = movie.name.toLowerCase().includes(value) || movie.genre.toLowerCase().includes(value)
            movie.element.classList.toggle("hide", !isVisible)
        })
    })
    
    fetch("http://127.0.0.1:3000/movie")
        .then(res => res.json())
        .then(data => {
        movies = data.map(movie => {
            const card = movieCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = movie.name
            body.textContent = movie.genre
            movieCardContainer.append(card)
            return {name: movie.name, genre: movie.genre, element: card}
        })
    })
    
  return (
     <>
        <div class="search-wrapper">
            <label for="search">Search All Listings</label>
            <input type="search" id="search" data-search></input>
        </div>
        <div class="movie-cards" data-movie-cards-container></div>
        <template data-movie-template>
            <div class="card">
                <div class="header" data-header></div>
                <div class="body" data-body></div>
            </div>
        </template>
    </>
  )
}

export default SearchBar