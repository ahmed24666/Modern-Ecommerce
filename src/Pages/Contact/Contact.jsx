import './contact.scss'
import React from 'react'
import Header from '../../Component/Header/Header'
import MainHead from '../../Component/MainHead/MainHead'
const Contact = () => {
    return (
        <div className='Contact'>
            <Header type='contact'/>
            <MainHead h4={' Our Address '} h1={' where we are '} />
            <div className="map container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay='300'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.266018435694!2d31.417859310767867!3d31.041454962463455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1675376055504!5m2!1sar!2seg" style={{border:'0;'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact
