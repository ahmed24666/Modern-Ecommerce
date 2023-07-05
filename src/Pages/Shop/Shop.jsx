import './shop.scss'
import React from 'react'
import Header from '../../Component/Header/Header'
import MainShop from '../../Component/MainShop/MainShop'

const Shop = () => {
    return (
        <div className='Shop'>
            <Header type='shop'/>
            <MainShop/>
        </div>
    )
}

export default Shop
