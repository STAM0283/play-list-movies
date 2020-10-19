import axios from 'axios';
import React, { useEffect, useState } from 'react';
import full_screen from "../media/full_screen.png";
import movie_poster from "../media/movie_poster.jpg";
import deletes from "../media/deletes.png";
import movie_db from "../media/the_movie_db2.svg";



function MovieList() {

  const [movies, setMovies] = useState(null);
  const [categories, setCategories] = useState("movie");
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");

  let image = `https://image.tmdb.org/t/p/w400`;
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/${categories}?&api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre}&sort_by=popularity&page=${page}`)
      .then(response => {
          setMovies(response.data.results);

        
      })
  }, [page, categories, genre])

  const deleteMovie = (e) => {
    let id = parseInt(e.target.id);
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id));
  };
  const zoomPicture = (e) => {
    let id = parseInt(e.target.id);
    setMovies((prevState) => prevState.filter((movie) => movie.id === id));


  }
  return movies !== null && categories !== null ? (
    <div className="movie_list">
      <div className="categories">
        <input type="radio" id="movie" name="1" onClick={() => setCategories("movie")} />
        <label htmlFor="movie">Films</label>
        <input type="radio" id="tv" name="1" onClick={() => setCategories("tv")} />
        <label htmlFor="tv">Télivision</label>
      </div>
      <div className="filter">
        <div>
          <input type="radio" id="action" name="1" onClick={() => setGenre(28) + setPage(1)} />
          <label htmlFor="action">Action</label>
          <input type="radio" id="adventure" name="1" onClick={() => setGenre(12) + setPage(1)} />
          <label htmlFor="adventure">Aventure</label>
          <input type="radio" id="animation" name="1" onClick={() => setGenre(16) + setPage(1)} />
          <label htmlFor="animation">Animation</label>
          <input type="radio" id="comedy" name="1" onClick={() => setGenre(35) + setPage(1)} />
          <label htmlFor="comedy">Comédie</label>
        </div>
        <div>
          <input type="radio" id="fiction" name="1" onClick={() => setGenre(878) + setPage(1)} />
          <label htmlFor="fiction">Fiction</label>
          <input type="radio" id="drama" name="1" onClick={() => setGenre(18) + setPage(1)} />
          <label htmlFor="drama">Drama</label>
          <input type="radio" id="horror" name="1" onClick={() => setGenre(27) + setPage(1)} />
          <label htmlFor="horror">Horror</label>
          <input type="radio" id="crime" name="1" onClick={() => setGenre(80) + setPage(1)} />
          <label htmlFor="crime">Crime</label>
        </div>
        <div>
          <input type="radio" id="documentary" name="1" onClick={() => setGenre(99) + setPage(1)} />
          <label htmlFor="documentary">Documentaire</label>
          <input type="radio" id="family" name="1" onClick={() => setGenre(10751) + setPage(1)} />
          <label htmlFor="family">Family</label>
          <input type="radio" id="fantasy" name="1" onClick={() => setGenre(14) + setPage(1)} />
          <label htmlFor="fantasy">Fantasy</label>
          <input type="radio" id="history" name="1" onClick={() => setGenre(36) + setPage(1)} />
          <label htmlFor="history">History</label>
        </div>
        <div>
          <input type="radio" id="mystery" name="1" onClick={() => setGenre(9648) + setPage(1)} />
          <label htmlFor="mystery">Mystery</label>
          <input type="radio" id="thriller" name="1" onClick={() => setGenre(53) + setPage(1)} />
          <label htmlFor="thriller">Thriller</label>
          <input type="radio" id="romance" name="1" onClick={() => setGenre(10749) + setPage(1)} />
          <label htmlFor="romance">Romance</label>
          <input type="radio" id="war" name="1" onClick={() => setGenre(10752) + setPage(1)} />
          <label htmlFor="war">Guerre</label>
          <input type="radio" id="western" name="1" onClick={() => setGenre(37) + setPage(1)} />
          <label htmlFor="western">Western</label>
        </div>

      </div>
      <div className="next">
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          <img style={{ width: "5%", margin: "auto", marginTop: "10px" }} src={movie_db} alt="The Movie Database" /><br />
        </a>
        <button type="button" onClick={() => setPage(page !== 0 && page < 31 ? page - 1 : 1)}>Page précédente</button>
        <button type="button" onClick={() => setPage(page !== 0 && page < 31 ? page + 1 : 1)} >Page Suivante</button>

      </div>
      <ul>
        {
          movies.map((item, i) => {
            return (
              <div key={i} className="posts">
                <div className="postsPicture">

                  <h1 style={{ fontSize: "large", fontWeight: "bolder" }}>{(item.original_title || item.original_name).slice(0, 42)}</h1>
                  <img src={item.poster_path ? `${image}/${item.poster_path}` : movie_poster} alt="picture_movie" />
                  <p>Date de sortie: {item.release_date || "Non renseignée"}</p>
                  <p>Note des utilisateurs: {item.vote_average !== 0 ? `${item.vote_average}/10` : "Non renseignée"}</p>
                  {/* <p>{item.overview}</p> */}
                </div>
                < div className="imgDelete">
                  <img id={item.id} style={{ width: "40px", cursor: "pointer" }} src={deletes} alt="icone delete" onClick={deleteMovie} />
                  <img id={item.id} style={{ width: "40px", cursor: "pointer" }} src={full_screen} alt="zoomPicture" onClick={zoomPicture} />
                </div>
              </div>


            )
          })
        }
      </ul>

    </div>
  ) : (
      <div className="filter">
        <p>Faites une autre recherche</p>
        <h1>Filter</h1>
        <label htmlFor="movie">Films</label>
        <input type="radio" id="movie" name="1" onClick={() => setCategories("movie")} />
        <label htmlFor="tv">Télivision</label>
        <input type="radio" id="tv" name="1" onClick={() => setCategories("tv")} />
        <input type="radio" id="movie" name="1" />
      </div>
    )
}

export default MovieList;
