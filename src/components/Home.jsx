import React from "react";
import film from "../media/film.jpg"; 
import movie_db from "../media/the_movie_db.svg";

const Home = () => {

    return (
        <div className="home">
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                <img style={{ width: "5%", marginRight: "20px" }} src={movie_db} alt="The Movie Database" />
            </a>
            <img src={film} alt="picture_home" />
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                <img style={{ width: "5%", marginLeft: "20px" }} src={movie_db} alt="The Movie Database" />
            </a>
        </div>
    )
}
export default Home; 