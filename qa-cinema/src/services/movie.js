

export function getMovie(id) {
    var movie = null;
    fetch(`http://localhost:3001/movie/${id}`)
        .then(response => {
            movie = JSON.parse(response);
        })
        .catch(error => {
            console.log(`Failed to retrieve movie: ${error}`);
        });
    
    return movie;
}

export function getMovies() {
    var movies = [];
    fetch(`http://localhost:3001/movie`)
        .then(response => {
            movies = JSON.parse(response);
        })
        .catch(error => {
            console.log(`Failed to retrieve movies: ${error}`);
        });
    
    return movies;
}