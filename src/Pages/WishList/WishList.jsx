import './wishList.scss'
import React from 'react'
import PageH from '../../Component/PageH/PageH'
import WishPro from '../../Component/WishPro/WishPro'
import { CartState } from '../../Context/Context'

const WishList = () => {
    const {state:{ fave },darkMode}=CartState()
    return (
        <div className= {darkMode ? 'WishList Dark' : 'WishList'}>
            <PageH h1='Wishlist' link='wishlist' />
            <WishPro prod={fave}/>
        </div>
    )
}

export default WishList
