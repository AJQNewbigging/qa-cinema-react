import React from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movie.js";

export default function MovieDetails() {

    const movieParams = useParams();

    const movie = getMovie(parseInt(movieParams.movieId, 1))

    return (
        <div>
            <p>name: {movie.name}</p>
            <p>genre: {movie.genre}</p>
            <p>synopsis: {movie.synopsis}</p>
            <p>director: {movie.director}</p>
            <p>year of release: {movie.yearOfRelease}</p>
            <p>runtime: {movie.runtime}</p>
            <p>certification: {movie.certification}</p>
        </div>
    )
}