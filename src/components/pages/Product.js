import React from 'react'
import Data from '../../helpers/Data'
import bg from '../../images/BG.jpg'
import Card from '../Card'

const Product = () => {

    return (
        <div className='homeBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <img src={Data.krabenList["image"]} alt=''></img>
            </div>
        </div>
    );
}

export default Product