import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../../Context/Context'
import './section1.scss'
const Section1 = () => {
    const {darkMode,}=CartState()

    return (
        <div className={darkMode ? 'Section1 Dark' : 'Section1'}>
            <div className="item">
                <div className="image">
                    <img src="/images/banner-9.webp" alt="" />
                </div>
                <h1>EAR STACK MAGIC</h1>
                <p>Elevate your ear party with a choice of mix and matched stacks or striking solo statements. The choice is yours!</p>
                <Link to='/shop'>
                    <div className="button">Shop now</div>
                </Link>
            </div>
            <div className="item">
                <div className="image">
                    <img src="/images/banner-10.webp" alt="" />
                </div>
                <h1>EAR STACK MAGIC</h1>
                <p>Elevate your ear party with a choice of mix and matched stacks or striking solo statements. The choice is yours!</p>
                <Link to='/shop'>
                    <div className="button">Shop now</div>
                </Link>
            </div>
        </div>
    )
}

export default Section1
