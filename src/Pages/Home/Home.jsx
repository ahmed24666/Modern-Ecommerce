import React from 'react'
import Categories from '../../Component/Categories/Categories'
import Favourates from '../../Component/Favourates/Favourates'
import MainHead from '../../Component/MainHead/MainHead'
import MainSlider from '../../Component/mainSlider/MainSlider'
import Section1 from '../../Component/Section1/Section1'
import Video from '../../Component/Video/Video'
import './home.scss'
import products from './../../Data/Products'
import Sec2 from '../../Component/Sec2/Sec2'
const Home = () => {
    const favourates= products.filter((item)=>item.fav ===true)
    const trending= products.filter((item)=>item.trending ===true)
    return (
        <div className='Home'>
            <MainSlider/>
            <Categories/>
            <Section1/>
            <Favourates data={favourates}/>
            <Video/>
            <MainHead h4={' ON TREND HOT JEWELLERY '} h1={' The Hot List '} />
            <Favourates data={trending}/>
            <Sec2/>
        </div>
    )
}

export default Home
