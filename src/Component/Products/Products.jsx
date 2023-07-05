import './products.scss'
import React from 'react'
import { CartState } from '../../Context/Context'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowDownUp } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';

const Products = () => {
    const { state: { fave }, dispatch, cartstate: { cart }, cartdispatch, filteredSearch } = CartState()
    return (
        <div className='Products'>
            {filteredSearch.map((item) => {
                return (
                    <div className="product" key={item.id}>
                        <div className="images">
                            <Link to={`/singleproduct/${item.id}`}>
                                <img src={item.img1} alt="" className="mainImg" />
                                <img src={item.img2} alt="" className="secImg" />
                            </Link>

                            <div className="cart" onClick={() => cartdispatch({ type: 'ADD_TO_CART', payload: item })}>
                                <div className="del">
                                    <BsBag />
                                </div>
                                add to cart
                            </div>
                            <div className="fav">
                                {fave.some(p => p.id === item.id) ? <div className="one" onClick={() => dispatch({ type: 'REMOVEFROMFAVE', payload: item })}><IoHeart /></div> : <div className="one" onClick={() => dispatch({ type: 'ADDTOFAVE', payload: item })}><IoHeartOutline /></div>}
                            </div>
                        </div>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => {
                                return item.rating > i ? (<AiFillStar />) : (<AiOutlineStar />)
                            })}
                        </div>
                        <Link to={`/singleproduct/${item.id}`}>
                            <div className="name">
                                <h1>{item.name}</h1>
                            </div>
                        </Link>

                        <div className="prices">
                            {item.sale === 0 ? <p className='p2'>LE {item.price}</p> : <><p className='p1'>LE {item.price}</p><p className='p2'>LE {(item.price - (item.price * (item.sale / 100))).toFixed(2)}</p></>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
