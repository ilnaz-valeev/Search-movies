// src/App.jsx
import React from "react";
import HomePages from "./pages/HomePages"; 
import MovieDetalisPage from "./pages/MovieDetailsPage"; 

import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePages />
      <MovieDetalisPage />
    </div>
  );
}

export default App;
