import React from 'react'
import './favourates.scss'
import { AiFillDelete, AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { BsArrowDownUp } from 'react-icons/bs';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import { useRef } from 'react';
import { CartState } from '../../Context/Context';
import { Link } from 'react-router-dom';

const Favourates = ({ data }) => {
    const { state: { fave }, dispatch, cartstate: { cart }, cartdispatch, darkMode } = CartState()
    const scrollRef = useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef
        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }
    return (
        <div className={darkMode ? 'Favourates Dark' : 'Favourates'}>
            <div className="items" ref={scrollRef}>
                {data.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div className="image">
                                <Link to={`/singleproduct/${item.id}`}>
                                    <img src={item.img1} alt="" />
                                </Link>

                                <div className="cart" onClick={() => { cartdispatch({ type: 'ADD_TO_CART', payload: item }); }}>
                                    <div className="del">
                                        <BsBag />
                                    </div>
                                    add to cart
                                </div>
                                <div className="fav">
                                    {fave.some(p => p.id === item.id) ? <div className="one" onClick={() => dispatch({ type: 'REMOVEFROMFAVE', payload: item })}><IoHeart /></div> : <div className="one" onClick={() => dispatch({ type: 'ADDTOFAVE', payload: item })}><IoHeartOutline /></div>}
                                </div>
                            </div>
                            <div className="icons">
                                {[...Array(5)].map((_, i) => {
                                    return (
                                        item.rating > i ? (<AiFillStar />) : (<AiOutlineStar />)
                                    )
                                })}
                            </div>
                            <Link to={`/singleproduct/${item.id}`}>
                                <h1>{item.name}</h1>
                            </Link>
                            <div className="prices">
                                {item.sale === 0 ? <p className='p2'>LE {item.price}</p> : <><p className='p1'>LE {item.price}</p><p className='p2'>LE {(item.price - (item.price * (item.sale / 100))).toFixed(2)}</p></>}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="buttons">
                <div className="btn" onClick={() => scroll('left')}><AiOutlineArrowLeft /></div>
                <div className="btn" onClick={() => scroll('right')}><AiOutlineArrowRight /></div>
            </div>
        </div>
    )
}

export default Favourates
