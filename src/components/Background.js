import React from 'react';
import star from '../assets/image/star.svg';
import wars from '../assets/image/wars.svg'

function StarWars() {
    return (
      <>
      
      <div className="starwars-demo">
        <img src={star} alt="Star" class="star"/>
        <img src={wars} alt="Wars" class="wars"/>
      </div>
      
  
      </>
    );
  }
  
  export default StarWars;