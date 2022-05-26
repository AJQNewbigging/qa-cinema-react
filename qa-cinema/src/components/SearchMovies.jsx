import React from "react";

export default function Search(props) {

    const search = props.search

    return (

        <div className="movie-cards">
        <p>{search.name}</p>
        <p>{search.genre}</p>
        <p>{search.director}</p>
        <p>{search.certification}</p>
        </div>

    )

}