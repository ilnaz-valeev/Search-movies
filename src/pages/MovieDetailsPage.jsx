// MovieDetailsPage.jsx

import React, { useState } from "react";
import "../css/MovieDeatailsPage.min.css";

const MovieDetailsPage = ({ onSearch }) => {
  return (
    <section className="movie-details-page">
      <section className="movie-details-image">
        <img
          className="movie-preview"
          src="http://images-s.kinorium.com/movie/poster/2808886/w1500_52518845.jpg"
          alt="Movie Poster"
        />
      </section>
      <section className="movie-info">
        <div className="movie-title-rating">
          <h2 className="movie-title">Dune</h2>
          <span className="movie-rating">
            8.2
            <span className="rating-icon">
              <img
                className="ratings-icon"
                src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000"
                alt=""
              />
            </span>
          </span>
        </div>

        <div className="movie-details">
          <span className="release-year">2021, </span>
          <span className="director">Denis Villeneuve</span>
        </div>

        <div className="movie-genres">
          <span className="genre">Epic</span>
          <span className="genre">Fantasy</span>
          <span className="genre">Drama</span>
        </div>

        <p className="movie-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          pariatur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing...
        </p>
      </section>
    </section>
  );
};

export default MovieDetailsPage;
