// src/components/ImageLoader.js
import React from 'react';
import modulo7 from '../assets/modulo7.png';
import "../App.css"; 
const ImageLoader = () => {
    return (
        <div className='img'>
            <img src={modulo7} alt="Modulo 7"  />
        </div>
    );
};

export default ImageLoader;
