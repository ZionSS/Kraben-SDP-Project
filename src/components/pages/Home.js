import React from 'react'
import bg from '../../images/BG.jpg'
import '../styles/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='homeBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br />
                Kraben Website
                <br /><br />
            </h1>
                <Link to='/sell'><button className='sellButton'> Kraben Sell </button></Link><br />
                <Link to='/bid'><button className='bidButton'> Kraben Bid </button></Link><br />
                <Link to='/contest'><button className='contestButton'> Kraben Contest </button></Link><br />
        </div>
    );
}

export default Home