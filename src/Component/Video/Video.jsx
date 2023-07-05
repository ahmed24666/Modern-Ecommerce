import './video.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Video = () => {
    return (
        <div className='Video'>
            <video playsinline="" loop="loop" autoplay="autoplay" muted="muted" src="https://cdn.shopify.com/videos/c/vp/33b96d6501564bb9be82ec426072ed06/33b96d6501564bb9be82ec426072ed06.HD-1080p-4.8Mbps-10381755.mp4"></video>
            <div className="text">
                <h1>Stand Out In Style</h1>
                <Link to='/shop'>
                    <div className="button">DISCOVER NOW</div>
                </Link>
            </div>
        </div>
    )
}

export default Video
 