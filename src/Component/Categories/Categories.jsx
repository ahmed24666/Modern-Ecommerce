import React from 'react'
import './cateories.scss'
import MainHead from "./../MainHead/MainHead";
import Slider from "react-slick";
import { CartState } from '../../Context/Context'
import { Link } from 'react-router-dom';
const Categories = () => {
    const {state, setValue,max,setCategory,setOwner,darkMode}=CartState()
    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                speed: 300,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 4000,
                cssEase: "linear",
            }
          },
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                speed: 300,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 4000,
                cssEase: "linear",
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                speed: 300,
                initialSlide: 0,
                autoplay: true,
                autoplaySpeed: 4000,
                cssEase: "linear",
            }
          }
        ]
      };
    const category=[]
    state.products.forEach(element => {
        if (!category.includes(element.category)) {
            category.push(element.category)
        }
        return category;
    });

    return (
        <div className={darkMode ? 'Categories Dark' : 'Categories'}>
            <MainHead h1={'Explore the Range'} h4={'WE’VE GOT YOU COVERED'} />
            <Slider {...settings}>
                <Link to='shop'>
                    <div className="slide" >
                        <div className="image">
                            <img src="/images/category/earings.avif" alt="" />
                        </div>
                        <div className="button" onClick={()=>{setOwner('All');setValue(max.price);setCategory(category[0])}}>
                            {category[0]}
                        </div>
                    </div>
                </Link>
                <Link to='shop'>
                    <div className="slide">
                        <div className="image">
                            <img src="/images/category/10-5_180x.avif" alt="" />
                        </div>
                        <div className="button" onClick={()=>{setOwner('All');setValue(max.price);setCategory(category[1])}}>
                            {category[1]}
                        </div>
                    </div>
                </Link>
                <Link to='shop'>
                    <div className="slide">
                        <div className="image">
                            <img src="/images/category/10-4_180x.avif" alt="" />
                        </div>
                        <div className="button" onClick={()=>{setOwner('All');setValue(max.price);setCategory(category[2])}}>
                            {category[2]}
                        </div>
                    </div>
                </Link>
                <Link to='shop'>
                    <div className="slide">
                        <div className="image">
                            <img src="/images/category/10-3_180x.avif" alt="" />
                        </div>
                        <div className="button" onClick={()=>{setOwner('All');setValue(max.price);setCategory(category[3])}}>
                            {category[3]}
                        </div>
                    </div>
                </Link>
                <Link to='shop'>
                    <div className="slide">
                        <div className="image">
                            <img src="/images/category/10-2_180.avif" alt="" />
                        </div>
                        <div className="button" onClick={()=>{setOwner('All');setValue(max.price);setCategory(category[4])}}>
                            {category[4]}
                        </div>
                    </div>
                </Link>
                <Link to='shop'>
                    <div className="slide">
                        <div className="image">
                            <img src="/images/category/10-4_180x.avif" alt="" />
                        </div>
                        <div className="button" onClick={()=>{setOwner('All');setValue(max.price);setCategory(category[5])}}>
                            {category[5]}
                        </div>
                    </div>
                </Link>
            </Slider>
        </div>
    )
}

export default Categories
