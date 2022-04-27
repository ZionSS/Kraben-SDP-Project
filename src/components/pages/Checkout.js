import React from 'react'
import bg from '../../images/BG.jpg'
import '../styles/Checkout.css'
import { Link } from 'react-router-dom'

function Checkout() {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    return (
        <div className='SummaryBg' style={{ backgroundImage: `url(${bg})` }}>
            <div className='cardBg'>
                <div className="mt-5 mx-auto p-3" style={{ background: "#cee", width: 700 }}>
                    <h6 className='texttop'>OrderNumber : 0000001</h6>
                    <h6 className='texttop'>Date : {day}/{month+1}/{year+543}</h6>

                    <h6 className='texttop'>Name : Ann Takamaki</h6>
                    <h6 className='texttop'>Total Cost : 5000 Baht</h6>
                    <h6 className='texttop'>Send to : Cecilia Chapman 711-2880 Nulla St.Mankato Mississippi 96522</h6>
                    <h6 className='texttop'>Card Number : xxxx xxxx xxxx xx16</h6>
                    <br />
                    <br />
                    <h6 className='text_'>Product list</h6>
                    <h6 className='text_'>Stringray1 x3&emsp;</h6>
                    <h6 className='text_'>Stringray2 x1&emsp;</h6>
                    <h6 className='text_'>Stringray3 x1&emsp;</h6>
                    <br />
                    <br />
                    <div class="col-12 d-flex justify-content-center">
                        <Link to="../thankyou">
                            <button type="button" class="btn btn-success ">Confirm Order</button>
                        </Link>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Checkout