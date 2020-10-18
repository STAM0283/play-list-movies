import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;