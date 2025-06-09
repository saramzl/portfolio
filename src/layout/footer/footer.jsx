import React, { useState, useEffect } from 'react';
import "./footer.css"
import Email from '../../assets/icons/media/email.svg'
import Whatsapp from '../../assets/icons/media/whatsapp.svg'
import Linkdin from '../../assets/icons/media/linkdin.svg'
import EmailOutLine from '../../assets/icons/footer/email.svg'
import Phone from '../../assets/icons/footer/phone.svg'

const Footer = () => {


  return (
    <div className='bg-[#101624] footer-sec'>
      <div className='d-flex align-items-center justify-content-center footer flex-column container gap-5  mx-auto'>

        <div className='d-flex align-items-center justify-content-center gap-4 w-50  menu-footer'>
          <a href="#banner" className='text-base font-semibold'>Home</a>
          <a href="#services" className='text-base font-semibold'>Services</a>
          <a href="#projects" className='text-base font-semibold'>Portfolio / Projects</a>
          <a href="#aboutMe" className='text-base font-semibold'>About Me</a>
          <a href="#contactMe" className='text-base font-semibold'>Contact</a>
        </div>
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
        <div className='d-flex align-items-center gap-5 flex-col-mobile'>
          <div className='d-flex align-items-center gap-3 text-base font-semibold'><img src={EmailOutLine} alt="" />pouyashams@outlook.com</div>
          <div className=' d-flex align-items-center gap-3 text-base font-semibold'><img src={Phone} alt="" />+971 58 225 4058</div>
        </div>
        <div className='w-50 menu-footer' >

          <hr/>
          <h6 className='text-color text-base font-semibold text-center'>Designed by @mahmood.fazile UI/UX designer</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer;
