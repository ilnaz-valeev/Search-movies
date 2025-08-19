import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Импортируем слайдер
import "../css/HomePages.min.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]); // Стейт для топовых
  const [error, setError] = useState(null);

  // Функция для получения популярных фильмов
  // Используем useEffect для загрузки данных при монтировании компонента

  // HomePage.jsx
  const fetchMovies = async (page = 1) => {
    try {
      const base = "https://kinotap.vercel.app";
      const res = await fetch(
        `${base}/api/movies?sort_by=popularity.desc&page=${page}`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMovies((prevMovies) => [...prevMovies, ...data.results]); // Добавляем новые фильмы к существующим
    } catch (err) {
      setError(err.message);
    }
  };

  // Запрос для получения топовых фильмов
  const fetchTopRatedMovies = async () => {
    try {
      const base = "https://kinotap.vercel.app";
      const res = await fetch(`${base}/api/movies?sort_by=vote_average.desc`);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Фильтруем фильмы с высоким рейтингом
      const topRated = data.results.filter((movie) => movie.vote_average >= 7); // Пример фильтрации
      setTopRatedMovies(topRated || []);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchMoviesByGenre = async (genreId) => {
    try {
      const base = "https://kinotap.vercel.app";
      const res = await fetch(
        `${base}/api/movies?with_genres=${genreId}&sort_by=popularity.desc`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMovies(1); // Получаем первую страницу фильмов
    fetchMovies(2); // Получаем вторую страницу фильмов
    fetchTopRatedMovies(); // Получаем топовые фильмы
    fetchMoviesByGenre(28);
  }, []);

  const settings = {
    //    dots: true, // Показываем навигационные точки
    infinite: true, // Бесконечный цикл слайдов
    speed: 500, // Скорость перехода между слайдами
    slidesToShow: 2, // Число слайдов, которые показываются одновременно
    slidesToScroll: 1, // Количество слайдов для прокрутки за один раз
  };

  return (
    <main className="home-page">
      {/* Header Section */}
      <header className="page-header">
        {/* User Profile Section */}
        <div className="user-profile">
          <h1 className="user-profile__greeting">Hi, Name!</h1>
          <img
            className="user-profile__avatar"
            src="https://live.staticflickr.com/65535/52879735901_205eff2209_h.jpg"
            alt="User profile"
          />
        </div>

        {/* Search Section */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-container__input"
          />
        </div>
      </header>

      {/* Recommendations Section */}
      <section className="recommendations-section">
        <h2 className="section-title">For you</h2>
        <div className="movie-carousel"></div>
        <div className="carousel-indicators">
          {[1, 2, 3, 4].map((item) => (
            <span key={item} className="carousel-indicators__dot"></span>
          ))}
        </div>
      </section>

      {/* Popular Movies Section */}
      <section className="movie-section">
        <div className="section-header">
          <h3 className="section-header__title">Popular</h3>
          <span className="section-header__action">See all</span>
        </div>

        {/* Карусель для популярных фильмов */}
        <div className="movie-carousel">
          <Slider {...settings}>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="movie-card__poster"
                  >
                    <img
                      className="movie-preview"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/fallback-poster.png"
                      }
                      alt={movie.title}
                    />
                  </Link>
                  <div className="movie-card__info">
                    <div className="movie-card__info-top">
                      <span className="movie-card__title">{movie.title}</span>
                      <span className="movie-card__rating">
                        {movie.vote_average.toFixed(1)}
                        <span className="rating-icon">
                          <img
                            className="ratings-icon"
                            src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000"
                            alt="rating"
                          />
                        </span>
                      </span>
                    </div>
                    <span className="movie-card__year">
                      {movie.release_date?.split("-")[0]}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Slider>
        </div>
      </section>

      {/* Genres Section */}
      <section className="movie-section">
        <div className="section-header">
          <h3 className="section-header__title">Genres</h3>
          <span className="section-header__action">See all</span>
        </div>
        <div className="genre-grid">
          <div className="genre-card">
            <img
              className="genre-card__image"
              src="https://wallpapers.com/images/hd/zombie-hand-in-graveyard-t7o7zaqc2cy9s53b.jpg"
              alt=""
            />
            <span className="genre-card__name">Horror</span>
          </div>
        </div>
      </section>

      {/* Legendary Movies Section */}
      <section className="movie-section">
        <div className="section-header">
          <h3 className="section-header__title">Top Rated Movies</h3>
          <span className="section-header__action">See all</span>
        </div>
        <div className="movie-carousel">
          <Slider {...settings}>
            {topRatedMovies.length > 0 ? (
              topRatedMovies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="movie-card__poster"
                  >
                    <img
                      className="movie-preview"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/fallback-poster.png"
                      }
                      alt={movie.title}
                    />
                  </Link>
                  <div className="movie-card__info">
                    <div className="movie-card__info-top">
                      <span className="movie-card__title">{movie.title}</span>
                      <span className="movie-card__rating">
                        {movie.vote_average.toFixed(1)}
                        <span className="rating-icon">
                          <img
                            className="ratings-icon"
                            src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000"
                            alt="rating"
                          />
                        </span>
                      </span>
                    </div>
                    <span className="movie-card__year">
                      {movie.release_date?.split("-")[0]}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Slider>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-navigation">
        <button className="bottom-navigation__button bottom-navigation__button--home">
          <img
            className="icons"
            src="https://img.icons8.com/?size=100&id=Eyy3nmHIbCL8&format=png&color=FFFFFF"
            alt=""
          />
        </button>
        <button className="bottom-navigation__button bottom-navigation__button--discover">
          <img
            className="icons"
            src="https://img.icons8.com/?size=100&id=Dgdweob5lIAF&format=png&color=FFFFFF"
            alt=""
          />
        </button>
        <button className="bottom-navigation__button bottom-navigation__button--movies">
          <img
            className="icons"
            src="https://img.icons8.com/?size=100&id=nGmPWUD7vDMN&format=png&color=FFFFFF"
            alt=""
          />
        </button>
        <button className="bottom-navigation__button bottom-navigation__button--profile">
          <img
            className="icons"
            src="https://img.icons8.com/?size=100&id=j1b8nUSGHfe0&format=png&color=FFFFFF"
            alt=""
          />
        </button>
      </nav>
    </main>
  );
};

export default HomePage;
