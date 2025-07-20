//Header.jsx

import React, {useState} from 'react';
import "../css/MovieDeatailsPage.min.css";


const MovieDetailsPage = ({ onSearch }) => {
  return(
    <section className="Movie__details-page">
        <section className='mov__deatails-img'>

        </section>
        <section className='movies__text'>
            <span className='movies__name'>
                Dune
            </span>
            <span className='movies__rainteng'>
                8.2 
            </span>
            <span className='movies__name'>
                <span>
                    2021
                </span>
                <span>
                    Denis Villeneuve
                </span>
            </span>
            <span className='movies__genres'>
                <span>
                    Epic
                </span>
                <span>
                    Fantasy
                </span>
                <span>
                    Drama
                </span>
            </span>
            <span className='movies__text'>
                Lorem ipsum menpsum, quibusdam sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, pariatur. Lorem ipsum dolor sit amet.
            </span>
            <span>
                Cast
            </span>
        </section>
  </section>
  ) 
};


export default MovieDetailsPage;