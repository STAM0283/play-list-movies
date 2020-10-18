import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg"
                style={{
                  width: "200px",
                  marginTop: "15px",
                  fontSize: "x-large",
                  fontWeight: "bold",
                }}
              >
                HOME
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/movie-list">
              <button
                type="button"
                className="btn btn-outline-danger"
                style={{
                  width: "200px", marginTop: "15px", fontSize: "x-large",
                  fontWeight: "bold",
                }}
              >
                MOVIES LIST
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/search">
              <button
                type="button"
                className="btn btn-outline-danger"
                style={{
                  width: "200px", marginTop: "15px", fontSize: "x-large",
                  fontWeight: "bold",
                }}
              >
                RECHERCHE
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;