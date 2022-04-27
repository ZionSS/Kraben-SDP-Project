import React, { useState, useE } from 'react'
import '../styles/Cart.css'
import bg from '../../images/BG.jpg'
import StingrayInfo from '../StingrayInfo';

function Cart() {
    
    return (
        <div className='cartBg' style={{ backgroundImage: `url(${bg})` }}>
            <StingrayInfo/>
        </div>
    );
}

export default Cart