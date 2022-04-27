import React from 'react'
import '../styles/Contest.css'
import bg from '../../images/BG.jpg'

function Contest() {
    return (
        <div className='contestBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br/>
                Coming Soon...
            </h1>
        </div>
    );
}

export default Contest