import React, { useState } from 'react'
import '../styles/Cart.css'
import bg from '../../images/BG.jpg'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/checkout')
    }
    // temporary
    let amount1 = 3
    let amount2 = 1
    let amount3 = 1
    const price1 = 1000
    const price2 = 1000
    const price3 = 1000

    const onAdd = () => {
        console.log('add')
        amount1 = amount1 + 1
    }

    const onRemove = () => {
        console.log('remove')
    }

    return (
        <div className='cartBg' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='header'>
                <br />
                YOUR BAG
                <br />
            </h1>
            <div className='shopping'>
                <div className='shoppingInfo'>
                    <br/>INFO<br/><br/>
                    <div>
                        Stingray 1 <button onClick={onRemove} className='btn btn-danger'>-</button><p>{amount1}</p><button onClick={onAdd} className='btn btn-success'>+</button>
                        Stingray 2 <button className='btn btn-danger'>-</button><p>{amount2}</p><button className='btn btn-success'>+</button>
                        Stingray 3 <button className='btn btn-danger'>-</button><p>{amount3}</p><button className='btn btn-success'>+</button>
                        <br/><br/>
                    </div>
                </div>
                <div className='shoppingSummary'>
                    <br/>SUMMARY<br/><br/>
                    <div>
                        Stingray 1 (x{amount1}) = {price1} x {amount1}<br/>
                        Stingray 2 (x{amount2}) = {price2} x {amount2}<br/>
                        Stingray 3 (x{amount3}) = {price3} x {amount3}<br/>
                        
                    </div>
                    <div className='checkoutBtn'>
                        <br/><br/>
                        Total(Baht) = {(price1*amount1)+(price2*amount2)+(price3*amount3)}
                        <br/><br/>
                        <button onClick={handleSubmit} className='btn btn-success'> Checkout Now </button>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart