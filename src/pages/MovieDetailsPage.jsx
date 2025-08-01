// MovieDetailsPage.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieDeatailsPage.min.css";

const MovieDetailsPage = ({ onSearch }) => {
  const { id } = useParams(); // Получаем id фильма из URL

  return (
    <section className="movie-details-page">
      <section className="movie-details-image">
        <img
          className="movie-preview page"
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
          Paul, the heir to the famous house of Atreides, travels with his
          family to one of the most dangerous planets in the universe — Arrakis.
          There is nothing here but sand, scorching sun, giant monsters and the
          main cause of intergalactic conflicts — an incredibly valuable
          resource called melange. .... <span className="more">more</span>
        </p>
      </section>

      <section className="cast">
        <h3 className="cast-header">Cast</h3>
        <div className="cast__img">
          <div className="cast-img_div">
            <img
              className="cast-portret"
              src="https://avatars.mds.yandex.net/get-entity_search/6276884/1174276750/S88x116Face_2x"
              alt=""
            />
            <span>Timothee Chalamet</span>
          </div>
          <div className="cast-img_div">
            <img
              className="cast-portret"
              src="https://avatars.mds.yandex.net/get-entity_search/6276884/1174276750/S88x116Face_2x"
              alt=""
            />
            <span>Timothee Chalamet</span>
          </div>
          <div className="cast-img_div">
            <img
              className="cast-portret"
              src="https://avatars.mds.yandex.net/get-entity_search/6276884/1174276750/S88x116Face_2x"
              alt=""
            />
            <span>Timothee Chalamet</span>
          </div>
          <div className="cast-img_div">
            <img
              className="cast-portret"
              src="https://avatars.mds.yandex.net/get-entity_search/6276884/1174276750/S88x116Face_2x"
              alt=""
            />
            <span>Timothee Chalamet</span>
          </div>
        </div>
      </section>

      <section className="trailer">
        <h3 className="trailer__title">Trailer</h3>
        <span className="trailer__video"></span>
      </section>

      <section className="comments">
        <div className="comments__header">
          <h3 className="comments__header-title">Comments</h3>
          <span className="comments__header-see-all">See all</span>
        </div>
        <div className="comments__user">
          <div className="user__profile">
            <img
              className="user__profile-img"
              src="https://live.staticflickr.com/65535/52879735901_205eff2209_h.jpg"
              alt="Profile"
            />
            <div className="user__profile-info">
              <span className="user__profile-name">Theresa Webb</span>
              <br />
              <span className="user__profile-date">June 28, 2021</span>
            </div>
            <div className="user__rating">
              <span className="user__rating-number">4.0</span>
              <img
                className="user__rating-icon"
                src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000"
                alt="Rating Star"
              />
            </div>
          </div>
          <div className="user__feedback">
            Great movie! I will review it more than oncel Special thanks to the
            operation! review it more than oncel Special thanks to the
            operation!
          </div>
        </div>
      </section>
      <button className="watch-now">Watch now</button>

      <button className="close-film">
        <img
          className="close-film__img"
          src="https://img.icons8.com/?size=100&id=16248&format=png&color=000000"
          alt="#"
        />
      </button>
    </section>
  );
};

export default MovieDetailsPage;
