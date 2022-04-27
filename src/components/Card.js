import React,{ useState } from 'react'

function StingrayInfo({ image, name, price, id, handleClick, amount}) {
  
  return (
    <div className='krabenInfo'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Price(Baht) : {price} </p>
      <div>
        <button className='button' onClick={() => handleClick(id,parseInt(amount))}>Add to Cart</button>
      </div>
    </div>
  )
}

export default StingrayInfo;
