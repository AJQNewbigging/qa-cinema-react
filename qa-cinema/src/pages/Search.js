import React from 'react'

function Search() {
    return (
        <div>
            <div class="search-wrapper">
                <label for="search">Search Movies</label>
                <input type="search" id="search" data-search></input>
            </div>
            <div class="movie-cards" data-movie-cards-container></div>
            <template data-movie-template></template>
                <div class="card">
                    <div class="header" data-header></div>
                    <div class="body" data-body></div>
            </div>
        </div>
    );
};