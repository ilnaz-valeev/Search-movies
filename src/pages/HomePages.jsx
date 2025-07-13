//Header.jsx

import React, {useState} from 'react';
import "../css/HomePages.min.css";


const HomePages = ({onSearch}) => {


    return (
      <section className="Home-Pages">
        <section className="header">
          {/* Секция для пользователя */}
          <section className="header__user">
            <h1 className="header__greeting">Hi, Name!</h1>
            <img
              className="header__photo"
              src="https://live.staticflickr.com/65535/52879735901_205eff2209_h.jpg"
              alt="Фото профиля"
            />
          </section>

          {/* Поиск */}
          <section className="header__search">
            <img src="#" alt="" />
            <input
              type="text"
              //   value={searchQuery}
              //   onChange={handleSearchChange}
              placeholder="Search"
              className="input-search"
            />
          </section>
        </section>
        <section>
          <section className="for-yuo">
            <h2>For you</h2>
            <div className="film_container"></div>

            <div className="paganation">
              <span className="paganation__point"></span>
              <span className="paganation__point"></span>
              <span className="paganation__point"></span>
              <span className="paganation__point"></span>
            </div>
          </section>
        </section>

      </section>
    );
}


export default HomePages;