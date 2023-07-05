import './mainShop.scss'
import React from 'react'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import { CartState } from '../../Context/Context'

const MainShop = () => {
    const {darkMode}=CartState()

    return (
        <div className= {darkMode ? 'MainShop Dark' : 'MainShop'}>
            <Filter/>
            <Products/>
        </div>
    )
}

export default MainShop
