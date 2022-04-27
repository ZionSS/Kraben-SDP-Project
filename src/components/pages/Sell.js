import React, { useState } from 'react'
import '../styles/Sell.css'
import bg from '../../images/BG.jpg'
import Stingray from '../../helpers/Stingray';
import Navbar from '../Navbar'

function Sell() {

    return (
        <div className='sellBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <div className='sell'>
                    <h1 className='sellTitle'>
                        <br />
                        Kraben sell
                        <br /><br />
                    </h1>
                    <Stingray/>
                </div>

            </div>
        </div>
    );
}

export default Sell