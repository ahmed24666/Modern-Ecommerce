import './singleProduct.scss'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartState } from '../../Context/Context'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';

const SingleProduct = () => {
    const { setCategory, state, setOwner, setValue, max, state: { fave }, dispatch, cartstate: { cart }, cartdispatch, darkMode } = CartState()
    const { Id } = useParams()
    const choosen = state.products.find((item) => item.id == Id)
    const [img, setImg] = useState(choosen.img1)
    return (
        <div className={darkMode ? 'SingleProduct Dark' : 'SingleProduct'}>
            <div className="path">
                <Link to='/'>
                    <h4>home</h4>
                </Link>
                :
                <Link to='/shop' >
                    <h4 onClick={() => { setCategory(choosen.category); setOwner('All'); setValue(max.price) }}>{choosen.category}</h4>
                </Link>
                :
                <h4 className='active'>{choosen.name}</h4>
            </div>
            <div className="container">
                <div className="simages">
                    <div className="simage" onClick={() => setImg(choosen.img1)} style={img === choosen.img1 ? { border: '1px solid var(--mcolor)' } : { border: 'none' }}>
                        <img src={choosen.img1} alt="" />
                    </div>
                    <div className="simage" onClick={() => setImg(choosen.img2)} style={img === choosen.img2 ? { border: '1px solid var(--mcolor)' } : { border: 'none' }}>
                        <img src={choosen.img2} alt="" />
                    </div>
                </div>
                <div className="bimage">
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="text">
                    <div className="stars">
                        {[...Array(5)].map((_, i) => {
                            return choosen.rating > i ? (<AiFillStar />) : (<AiOutlineStar />)
                        })}
                    </div>
                    <h1>{choosen.name}</h1>
                    <div className="prices">
                        {choosen.sale === 0 ? <p className='p2'>LE {choosen.price}</p> : <><p className='p1'>LE {choosen.price}</p><p className='p2'>LE {(choosen.price - (choosen.price * (choosen.sale / 100))).toFixed(2)}</p></>}
                    </div>
                    <Link to='/shop'>
                        <div className="owner" onClick={() => { setOwner(choosen.owner); setCategory('All'); setValue(max.price) }}>
                            By:<span>{choosen.owner}</span>
                        </div>
                    </Link>
                    <hr />
                    <div className="stock" style={choosen.isInStock ? { color: 'green' } : { color: 'red' }}>
                        <div className="icon">
                            {choosen.isInStock ? (<AiOutlineCheckCircle />) : (<AiOutlineCloseCircle />)}
                        </div>
                        <div className="state">{choosen.isInStock ? <>In Stock</> : <>Out Of Stock</>}</div>
                    </div>
                    <div className="buttons">
                            <div className="add" onClick={() => { cartdispatch({ type: 'ADD_TO_CART', payload: choosen }); }}>add to cart</div>
                        {fave.some(p => p.id === choosen.id) ? <div className="fav" onClick={() => dispatch({ type: 'REMOVEFROMFAVE', payload: choosen })}><IoHeart /></div> : <div className="fav" onClick={() => dispatch({ type: 'ADDTOFAVE', payload: choosen })}><IoHeartOutline /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
