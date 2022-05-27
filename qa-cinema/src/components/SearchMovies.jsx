import React from "react";
import { Buffer}  from "buffer";

export default function Search(props) {

    const search = props.search
    const imageBuffer = Buffer.from(search.poster.img.data.data);
    return (

        <div className="movie-cards">
            <img src={`data:${search.poster.img.contentType};base64, ${imageBuffer.toString("base64")}`} alt={search.poster.name} />
            <p>{search.name}</p>
            <p>{search.genre}</p>
            <p>{search.director}</p>
            <p>{search.certification}</p>
        </div>

    )

}