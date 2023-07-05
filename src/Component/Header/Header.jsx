import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CartState } from '../../Context/Context';
const Header = ({type}) => {
    const {setCategory}=CartState()

    const scrollRef = useRef(null)
    const scroll =(direction)=>{
        const {current}=scrollRef
        if (direction==='left') {
            current.scrollLeft -= 170
        }else{
            current.scrollLeft += 170
        }
    }
    return (
        <div className='Header'>
            <h1>{type}</h1>
            <span>
            <Link to='/'><p className="p1">Home</p></Link>
            <div className="p1">:</div>
            <Link to={`/${type}`}><p className="p2">{type}</p></Link>
            </span>
            {type==='shop'&&(<>
            <div className="slider" ref={scrollRef}>
                <div className="slide" onClick={()=>setCategory('Earrings')}>
                    <div className="image">
                        <img src="/images/category/4.webp" alt="" />
                    </div>
                    <h4>Earrings</h4>
                </div>
                <div className="slide" onClick={()=>setCategory('Earrings')}>
                    <div className="image">
                        <img src="/images/category/2.avif" alt="" />
                    </div>
                    <h4 >Bracelets</h4>
                </div>
                <div className="slide" onClick={()=>setCategory('Charms')}>
                    <div className="image">
                        <img src="/images/category/1.webp" alt="" />
                    </div>
                    <h4>Charms</h4>
                </div>
                <div className="slide" onClick={()=>setCategory('Necklaces')}>
                    <div className="image">
                        <img src="/images/category/5.webp" alt="" />
                    </div>
                    <h4>Necklaces</h4>
                </div>
                <div className="slide" onClick={()=>setCategory('Shop Earrings')}>
                    <div className="image">
                        <img src="/images/category/7.avif" alt="" />
                    </div>
                    <h4>Shop Earrings</h4>
                </div>
                <div className="slide" onClick={()=>setCategory('Wedding & Bridal')}>
                    <div className="image">
                        <img src="/images/category/4.webp" alt="" />
                    </div>
                    <h4>Wedding & Bridal</h4>
                </div>
            </div>
            <div className="buttons">
                <div className="btn" onClick={()=>scroll('left')}><AiOutlineArrowLeft/></div>
                <div className="btn" onClick={()=>scroll('right')}><AiOutlineArrowRight/></div>
            </div>
            </>)}
        </div>
    )
}

export default Header
