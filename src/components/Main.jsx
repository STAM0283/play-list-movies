import React from 'react';
import Home from "./Home";
import {Switch, Route} from "react-router-dom";
import MovieList from "./MovieList";  
import Search from "./Search"; 


const Main = () => {
    return (
        <div className = "main">
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movie-list">
            <MovieList />
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
        </Switch>
            
        </div>
    );
};

export default Main;