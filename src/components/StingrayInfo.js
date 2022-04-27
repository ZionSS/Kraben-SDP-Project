import React, { useState, useEffect } from 'react';

function StingrayInfo({ image, name, price, id, handleClick, description }) {
  return (
    <div className="krabenInfo">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
      <div>
        <button className="button" onClick={() => handleClick(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default StingrayInfo;
