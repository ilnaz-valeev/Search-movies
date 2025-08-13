// HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Импортируем слайдер
import "../css/HomePages.min.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Функция для получения списка популярных фильмов
  // Используем useEffect для загрузки данных при монтировании компонента
  // Здесь мы делаем запрос к нашему API
  // который мы создали в файле my-movies-app/pages/api/movies.js (Next js)
  // Этот API возвращает список популярных фильмов
  // Мы используем fetch для получения данных с сервера
  // После получения данных мы обновляем состояние movies
  // Если произошла ошибка, мы сохраняем сообщение об ошибке в состоянии error
  // HomePage.jsx
useEffect(() => {
  const fetchMovies = async () => {
    try {
      const base = "https://kinotap.vercel.app"; // Используем продакшн URL

      // Запрос к API
      const res = await fetch(`${base}/api/movies`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    }
  };
  fetchMovies();
}, []);




 const settings = {
   dots: true, // Показываем навигационные точки
   infinite: true, // Бесконечный цикл слайдов
   speed: 500, // Скорость перехода между слайдами
   slidesToShow: 2, // Число слайдов, которые показываются одновременно
   slidesToScroll: 1, // Количество слайдов для прокрутки за один раз
//    responsive: [
//      {
//        breakpoint: 1024, // Для экранов меньше 1024px
//        settings: {
//          slidesToShow: 2,
//        },
//      },
//      {
//        breakpoint: 768, // Для экранов меньше 768px
//        settings: {
//          slidesToShow: 1,
//        },
//      },
//    ],
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
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`} className="movie-card__poster">
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
                      {movie.vote_average}
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
              
              
            ))}
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
          {/* <div className="genre-card">
              <div className="genre-card__image"></div>
              <span className="genre-card__name">Horror</span>
            </div> */}
        </div>
      </section>

      {/* Legendary Movies Section */}
      <section className="movie-section">
        <div className="section-header">
          <h3 className="section-header__title">Legendary movies</h3>
          <span className="section-header__action">See all</span>
        </div>
        <div className="movie-grid">
          {[1, 2,3,4].map((item) => (
            <div key={item} className="movie-card">
              {/* Оборачиваем карточку фильма в Link */}
              <Link to={`/movie/${item}`} className="movie-card__poster">
                <img
                  className="movie-preview"
                  src="https://i.pinimg.com/736x/0a/bd/bd/0abdbddd92fbd981457c434096169baa.jpg"
                  alt="Movie Poster"
                />
              </Link>
              <div className="movie-card__info">
                <div className="movie-card__info-top">
                  <span className="movie-card__title">Alien</span>
                  <span className="movie-card__rating">
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
                <span className="movie-card__year">2021</span>
              </div>
            </div>
          ))}
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
