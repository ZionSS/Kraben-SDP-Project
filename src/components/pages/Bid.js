import React from 'react'
import '../styles/Bid.css'
import bg from '../../images/BG.jpg'

function Bid() {
    return (
        <div className='bidBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br/>
                Coming Soon...
            </h1>
        </div>
    );
}

export default Bid