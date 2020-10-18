import React, { useState, useEffect } from "react";
import axios from "axios";
import coming_soon from "../media/coming_soon.png";
import full_screen from "../media/full_screen.png";
import deletes from "../media/deletes.png";

const Search = () => {
    let image = "https://image.tmdb.org/t/p/w400";
    const [searchMovies, setSearchMovies] = useState(null);
    const [query, setQuery] = useState("");
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
            .then((response) => {
                setSearchMovies(response.data.results);
            })

    }, [query])

    const deleteMovie = (e) => {
        let id = parseInt(e.target.id);
        setSearchMovies((prevState) => prevState.filter((movie) => movie.id !== id));
    };
    const zoomPicture = (e) => {
        let id = parseInt(e.target.id);
        setSearchMovies((prevState) => prevState.filter((movie) => movie.id === id));


    }
    return searchMovies !== null ? (
        <div className="search">
            <label htmlFor="keyword">Mots-clés </label>
            <input value={query} id="keyword" type="search" placeholder="Filtrer par mots-clés"
                onChange={(e) => setQuery(e.target.value)} />

            <div id="searchMovie">
                {
                    searchMovies.map((item) => {
                        return (
                            <div>
                                <div>
                                    <h1>{item.original_title || item.original_name}</h1>
                                    <img src={item.poster_path ? `${image}${item.poster_path}` : coming_soon} alt="picture_movie" />
                                    <p>{item.release_date}</p>
                                    <p>Moyenne des vote: {item.vote_average !== 0 ? `${item.vote_average}/10` : "Non renseigné"}</p>
                                </div>
                                < div className="imgDelete">
                                    <img id={item.id} style={{ width: "40px", cursor: "pointer" }} src={deletes} alt="icone delete" onClick={deleteMovie} />
                                    <img id={item.id} style={{ width: "40px", cursor: "pointer" }} src={full_screen} alt="zoomPicture" onClick={zoomPicture} />
                                </div>
                            </div>

                        )

                    })
                }
            </div>

        </div>
    ) : (
            <div className="search">
                <label htmlFor="keyword">Mots-clés </label>
                <input value={query} id="keyword" type="search" placeholder="Filtrer par mots-clés"
                    onChange={(e) => setQuery(e.target.value)} />
            </div>
        )
}

export default Search; 