import './mainSlider.scss'
import React from 'react'
import Carousel from 'nuka-carousel';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const MainSlider = () => {
    return (
        <div className='MainSlider'>
            <Carousel 
            wrapAround={true} 
            slidesToShow={1} 
            animation={'fade'} 
            speed={1000} 
            pauseOnHover={true} 
            dragging={true} 
            autoplay={true} 
            autoplayInterval={3000}
            renderCenterLeftControls={({ previousSlide }) => (
                <div className='arrow' onClick={previousSlide}>
                  <AiOutlineArrowLeft/>
                </div>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <div className='arrow' onClick={nextSlide}>
                  <AiOutlineArrowRight/>
                </div>
              )}
            >
                <div className="slide slide1">
                    <h1>Now up to 70% off*</h1>
                    <h2>MID YEAR SALE</h2>
                    <Link to='/shop'>
                      <div className="button">EXPLORE SHOP</div>
                    </Link>
                </div>
                <div className="slide slide2">
                    <h1>Oh, Hello Newness!</h1>
                    <h2>MID YEAR SALE</h2>
                    <Link to='/shop'>
                      <div className="button">EXPLORE SHOP</div>
                    </Link>
                </div>
                <div className="slide slide3">
                    <h1>Best of the Best</h1>
                    <h2>MID YEAR SALE</h2>
                    <Link to='/shop'>
                      <div className="button">EXPLORE SHOP</div>
                    </Link>
                </div>
            </Carousel>
        </div>
    )
}

export default MainSlider
