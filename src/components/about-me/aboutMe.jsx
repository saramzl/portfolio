import React, { useEffect, useState, useRef } from 'react';
import './aboutMe.css';

//svg
import Image from '../../assets/images/img.jpg'





function AboutMe() {



    return (
        <>

            <div className='title text-center position-relative'>
                <h1 className='text-center'>ABOUT ME</h1>
                <div className='back-title'>ABOUT ME</div>
            </div>
            <div className='about-page d-flex align-items-start gap-5  container flex-col-revers-mobile'>
                <div className='img-box flex-1'>
                    <img src={Image} alt="" />
                </div>
                <div className='d-flex flex-column gap-4 flex-1'>
                    <h2 className='font-medium text-[40px]'>Hi There! I'm Pooya Shams</h2>
                    <h3 className='text-[32px] color-primary font-medium'>Full-stack Developer</h3>
                    <p className='font-normal text-xl text-color'>
                        I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.
                    </p>
                    <div className='d-flex align-items-start gap-5 detail'>
                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex  gap-5 font-normal text-xl text-color'>
                                <span>
                                    Birthday
                                </span>

                            </div>

                            <div className='d-flex  gap-5 font-normal text-xl text-color'>
                                <span>
                                    Phone
                                </span>

                            </div>

                            <div className='d-flex  gap-5 font-normal text-xl text-color'>
                                <span>
                                    Email
                                </span>

                            </div>

                            <div className='d-flex  gap-5 font-normal text-xl text-color'>
                                <span>
                                    From
                                </span>

                            </div>
                            <div className='d-flex  gap-5 font-normal text-xl text-color'>
                                <span>
                                    Lanquage
                                </span>

                            </div>
                            <div className='d-flex  gap-5 font-normal text-xl text-color'>
                                <span>
                                    Freelance                            </span>

                            </div>
                        </div>

                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex  gap-5 font-normal text-xl text-color'>

                                <span>
                                    :   May 07, 1990
                                </span>
                            </div>

                            <div className='d-flex  gap-5 font-normal text-xl text-color'>

                                <span>
                                    :   +1 876-369-9009
                                </span>
                            </div>

                            <div className='d-flex  gap-5 font-normal text-xl text-color'>

                                <span>
                                    :   devis@example.com
                                </span>
                            </div>

                            <div className='d-flex  gap-5 font-normal text-xl text-color'>

                                <span>
                                    :   2661 Hich meadow lane
                                </span>
                            </div>
                            <div className='d-flex  gap-5 font-normal text-xl text-color'>

                                <span>
                                    :   English, Germanic
                                </span>
                            </div>
                            <div className='d-flex  gap-5 font-normal text-xl text-color'>

                                <span>
                                    :   Available
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-primary w-50'>Download CV</button>

                </div>
            </div>
        </>
    )
}

export default AboutMe;
