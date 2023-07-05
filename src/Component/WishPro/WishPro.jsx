import React, { useState } from 'react'
import { CartState } from '../../Context/Context'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowDownUp } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';
import './wishPro.scss'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const WishPro = ({ prod }) => {
    const location = useLocation()
    const { state: { fave }, dispatch, cartstate: { cart }, cartdispatch } = CartState()
    const [total, settotal] = useState()
    useEffect(() => {
        settotal(cart.reduce((acc, curr) => acc + (curr.sale === 0 ? curr.price * curr.qty : (curr.price - curr.price * (curr.sale / 100)) * curr.qty), 0))
    }, [cart])
    return (
        <div className="all">
            <div className='WishPro'>
                {prod.map((item) => {
                    return (
                        <div className="product" key={item.id}>
                            <div className="images">
                                <img src={item.img1} alt="" className="mainImg" />
                                <img src={item.img2} alt="" className="secImg" />
                                {prod === cart && (
                                    <>
                                        <div className="cart" >
                                            <div className="del" style={{fontSize:'30px'}} onClick={() => cartdispatch({ type: 'DECREASE_QUANTITY', payload: item })}>
                                                -
                                            </div>
                                            <div className="del">
                                                {item.qty}
                                            </div>
                                            <div className="del" onClick={() => cartdispatch({ type: 'ADD_TO_CART', payload: item })}>
                                                +
                                            </div>
                                            <div className="del" onClick={() => { cartdispatch({ type: 'REMOVE_FROM_CART', payload: item }); }}>
                                                <AiFillDelete />
                                            </div>
                                        </div>
                                        
                                    </>
                                )
                                }
                                <div className="fav">
                                    {fave.some(p => p.id === item.id) ? <div className="one" onClick={() => dispatch({ type: 'REMOVEFROMFAVE', payload: item })}><IoHeart /></div> : <div className="one" onClick={() => dispatch({ type: 'ADDTOFAVE', payload: item })}><IoHeartOutline /></div>}
                                </div>
                            </div>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => {
                                    return item.rating > i ? (<AiFillStar />) : (<AiOutlineStar />)
                                })}
                            </div>
                            <h1>{item.name}</h1>
                            <div className="prices">
                                {item.sale === 0 ? <p className='p2'>LE {item.price}</p> : <><p className='p1'>LE {item.price}</p><p className='p2'>LE {(item.price - (item.price * (item.sale / 100))).toFixed(2)}</p></>}
                            </div>
                            {
                                location.pathname === '/cart' && (
                                    <div className="prices">
                                        <p className='p2'>{item.qty} px</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                })}
            </div>
            {prod === cart && cart.length === 0 ?
                <div className="total">cart is empty</div>
                :
                prod === fave && fave.length === 0 ?
                    <div className="total">favourates is empty</div>
                    : prod === cart && cart.length !== 0 &&
                    <div className="total">total price is : {total} LE</div>
            }
        </div>
    )
}

export default WishPro
