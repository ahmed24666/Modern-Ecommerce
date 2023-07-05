import './sec2.scss'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CartState } from '../../Context/Context';

const Sec2 = () => {
    const {darkMode}=CartState()

    return (
        <div className={darkMode ? 'Sec2 Dark' : 'Sec2'}>
            <div className="left">
                <h1>Jewellery Online<br/> at the Most Affordable Price</h1>
                <p>Behind our 15-year success is our panel of expert jewellers who have been scouring the entire globe in pursuit of the best and most stunning jewellery that can be offered at affordable price for you.Visit our online catalogue and shop for the finest earrings, rings, bracelets, watches, silver, and the most luxurious gemstones.</p>
                <div className="button">
                    READ MORE
                    <div className="icon">
                        <AiOutlineArrowRight/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="image">
                    <img src="/images/img-4.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sec2
