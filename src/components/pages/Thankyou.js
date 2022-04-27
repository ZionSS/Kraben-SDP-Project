import React from 'react'
import bg from '../../images/BG.jpg'
import '../styles/Thankyou.css'
import { Link } from 'react-router-dom'
import Correct from '../../images/Correct.png'
function Thankyou() {
    return (
        <div className='ThankyouBg' style={{ backgroundImage: `url(${bg})` }}>
            <div className="mt-5 mx-auto p-3 rounded-pill" style={{ background: "#cee", width: 700 }}>
            <div class="col-12 d-flex justify-content-center">
            <img src={Correct} alt='' class="Correct"></img>
            </div>
                <h3 className='Thankyou'>Thank you for your purchase!</h3>
                <br />
                <br />
                <div class="col-12 d-flex justify-content-center">
                    <Link to="../">
                        <button type="button" class="btn btn-success">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Thankyou