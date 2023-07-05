import './footer.scss'
import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import {CartState} from './../../Context/Context' 
const Footer = () => {
    const {darkMode}=CartState()
    return (
        <div className={darkMode ? 'Footer container Dark' : 'Footer container'}>
            <div className="left" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
                <h1>Address</h1>
                <p className="para">Head Office: 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD</p>
            </div>
            <div className="center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='400'>
                <h1>Explore</h1>
                <div className="lis">
                    <div className="li">
                        <div></div>                       
                         Home
                    </div>
                    <div className="li">
                        <div></div>                       
                        Shop
                    </div>
                    <div className="li">
                        <div></div>                       
                        Contact
                    </div>
                    <div className="li">
                        <div></div>                       
                        Cart
                    </div>
                    <div className="li">
                        <div></div>                       
                        Wishlist
                    </div>
                </div>
            </div>
            <div className="right" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='500'>
                <h1>Tel</h1>
                <div className="call">
                    855 100 4444
                </div>
                <div className="mail">info@luxuryhotel.com</div>
                <div className="icons">
                    <FiFacebook/>
                    <FiInstagram/>
                    <FiTwitter/>
                    <FiYoutube/>
                    <FaPinterestP/>
                </div>
            </div>
        </div>
    )
}

export default Footer
