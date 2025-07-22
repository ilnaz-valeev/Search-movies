// HomePage.jsx
import React from 'react';
import "../css/HomePages.min.css";

const HomePage = ({ onSearch }) => {
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
          <div className="movie-grid">
            {[1, 2].map((item) => (
              <div key={item} className="movie-card">
                <div className="movie-card__poster"></div>
                <div className="movie-card__info">
                  <span className="movie-card__title">Alien</span>
                  <span className="movie-card__rating">
                    8.2 <span className="movie-card__star-icon"></span>
                  </span>
                  <span className="movie-card__year">2021</span>
                </div>
              </div>
            ))}
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
              <div className="genre-card__image"></div>
              <span className="genre-card__name">Horror</span>
            </div>
          </div>
        </section>

        {/* Legendary Movies Section */}
        <section className="movie-section">
          <div className="section-header">
            <h3 className="section-header__title">Legendary movies</h3>
            <span className="section-header__action">See all</span>
          </div>
          <div className="movie-grid">
            {[1, 2].map((item) => (
              <div key={item} className="movie-card">
                <div className="movie-card__poster"></div>
                <div className="movie-card__info">
                  <span className="movie-card__title">Alien</span>
                  <span className="movie-card__rating">
                    8.2 <span className="movie-card__star-icon"></span>
                  </span>
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
              src="https://img.icons8.com/?size=100&id=Eyy3nmHIbCL8&format=png&color=000000"
              alt=""
            />
          </button>
          <button className="bottom-navigation__button bottom-navigation__button--discover">
            <img
              className="icons"
              src="https://img.icons8.com/?size=100&id=Dgdweob5lIAF&format=png&color=000000"
              alt=""
            />
          </button>
          <button className="bottom-navigation__button bottom-navigation__button--movies">
            <img
              className="icons"
              src="https://img.icons8.com/?size=100&id=nGmPWUD7vDMN&format=png&color=000000"
              alt=""
            />
          </button>
          <button className="bottom-navigation__button bottom-navigation__button--profile">
            <img
              className="icons"
              src="https://img.icons8.com/?size=100&id=fJ7hcfUGpKG7&format=png&color=000000"
              alt=""
            />
          </button>
        </nav>
      </main>
    );
};

export default HomePage;