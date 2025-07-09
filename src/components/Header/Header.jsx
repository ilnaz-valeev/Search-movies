// Header.jsx
import React, { useState } from "react";
import "../css/Header.min.css"; // Подключаем стили

const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    }


  return (
    <header className="header">
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
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className="input-search"
        />
        
      </section>
    </header>
  );
};

export default Header;
