import React from 'react';
import './Styles/Cart.css';
import logoAllen from './Images/shop_logo/image73.jpg'

const Cart = () => {
    return (
        <div className='cart-container'>

            <div className='cart-head'>
                <div className='cart-title'>Cart</div>
                <div className='cart-subtitle'>2 Shops</div>
            </div>

            <div className='border'></div>

            <div className='shop-container'>
                <div className='shop-item d-flex'>
                    
                    <div className='shop-logo'><img src={logoAllen} alt="" /></div>

                    <div>
                        <div className='shop-name'>Allen Solly</div>
                        <div className='shop-status'>Waiting</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart