import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
