

export async function getMovie(id) {
    var movie = await fetch(`http://localhost:3001/movie/${id}`, {
        method: 'GET',
        // body: JSON.stringify(object),
        headers: {
            'accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) return response.json();
        else throw new Error("Whoops");
    }).catch(error => {
        throw error;
    });
    console.log(movie);
    return movie;
}

export function getMovies() {
    var movies = [];
    fetch(`localhost:3001/movie`)
        .then(response => {
            movies = JSON.parse(response);
        })
        .catch(error => {
            console.log(`Failed to retrieve movies: ${error}`);
        });
    
    return movies;
}