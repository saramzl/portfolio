import React, { useEffect, useState, useRef } from 'react';
import './banner.css';

//svg
import Profile from '../../assets/icons/profile.svg'
import Email from '../../assets/icons/media/email.svg'
import Whatsapp from '../../assets/icons/media/whatsapp.svg'
import Linkdin from '../../assets/icons/media/linkdin.svg'
import Img from '../../assets/images/IMG_9069.JPG'




function Banner() {



    return (
        <>
            <div className='banner-page'>
                <div className='profile-img'>
                    <img src={Img} alt="" />
                </div>
                <h1 className='font-bold'>Hi, I am <span className='text-[#FEC544]'>Pooya Shams</span></h1>
                <h6 className='text-center text-xl description text-color font-normal'> I am a Full-stack Developer specialized in Next.js & React. I can provide clean code and pixel perfect design.</h6>
                <div className='d-flex align-items-center gap-4 media-list'>
                    <a href={`https://wa.me/`} target='_blank' className='item'>
                        <img src={Whatsapp} alt="" />
                    </a>
                    <a href={`mailto:pouyashams@outlook.com`} target='_blank' className='item'>
                        <img src={Email} alt="" />
                    </a>
                    <a className='item' href={`https://www.linkedin.com/in/pouya-shams`} target='_blank'>
                        <img src={Linkdin} alt="" />
                    </a >

                </div>
            </div>
        </>
    )
}

export default Banner;
