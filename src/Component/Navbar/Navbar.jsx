import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.scss'
import { IoHeartOutline } from 'react-icons/io5';
import { BsBag } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';
import { RiMenu3Fill } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import { CartState } from '../../Context/Context';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {state:{ fave },cartstate:{ cart },darkMode,setDarkMode}=CartState()
    const getTotalQuantity = (cart) => {
        return cart.reduce((total, item) => total + item.qty , 0);
      };
      
    return (
        <div id='nav' className={darkMode ? 'Navbar Dark' : 'Navbar'}>
            <div className="main">
                <div className="left">
                <Link to='/'>
                    <div className="image">
                        {darkMode ? 
                        <img src="/images/logo-white.avif" alt="" />
                        : 
                        <img src="/images/logo.avif" alt="" />
                        }
                    </div>
                </Link>
                </div>
                <div className="center">
                    <NavLink to='/'>
                        <div className="item">home</div>
                    </NavLink>
                    <NavLink to='/shop'>
                        <div className="item">shop</div>
                    </NavLink>
                    <NavLink to='/contact'>
                        <div className="item">contact</div>
                    </NavLink>
                </div>
                <div className="right">
                        <div className="icon" onClick={()=>setDarkMode(!darkMode)}>{ darkMode ? <BsSun/> : <BsMoonStars/>}</div>
                    <NavLink to='/wishlist'>
                        <div className="icon"><IoHeartOutline/><div className="num">{fave.length}</div></div>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className="icon"><BsBag/><div className="num">{getTotalQuantity(cart)}</div></div>
                    </NavLink>
                    <div className="menu" onClick={()=>setOpen(!open)}>{open ? <CgClose/> : <RiMenu3Fill/>}</div>
                </div>
                {open&&(
                    <div className={darkMode ? 'hide Dark' : 'hide'}>
                        <div className="menu" onClick={()=>setOpen(!open)}>{open ? <CgClose/> : <RiMenu3Fill/>}</div>
                        <NavLink to='/'>
                            <div className="item" onClick={()=>setOpen(!open)}>home</div>
                        </NavLink>
                        <NavLink to='/shop'>
                            <div className="item" onClick={()=>setOpen(!open)}>shop</div>
                        </NavLink>
                        <NavLink to='/contact'>
                            <div className="item" onClick={()=>setOpen(!open)}>contact</div>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
