import React from 'react'
import { Link } from 'react-router-dom'
import './pageH.scss'
const PageH = ({h1,link}) => {
    return (
        <div className='PageH'>
            <h1>{h1}</h1>
            <span>
            <Link to='/'><p className="p1">Home</p></Link>
            <div className="p1">:</div>
            <Link to={`/${link}`}><p className="p2">{h1}</p></Link>
            </span>
        </div>
    )
}

export default PageH
