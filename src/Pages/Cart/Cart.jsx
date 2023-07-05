import React from 'react'
import './cart.scss'
import PageH from '../../Component/PageH/PageH'
import WishPro from '../../Component/WishPro/WishPro'
import { CartState } from '../../Context/Context'
const Cart = () => {
    const {cartstate:{ cart },darkMode}=CartState()
    return (
        <div className= {darkMode ? 'Cart Dark' : 'Cart'}>
            <PageH h1='cart' link='cart'/>
            <WishPro prod={cart}/>
        </div>
    )
}

export default Cart
