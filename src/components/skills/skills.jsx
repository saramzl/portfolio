import React, { useEffect, useState, useRef } from 'react';
import './skills.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

//logo
import Angular from '../../assets/icons/skill/angular.svg'
import Css from '../../assets/icons/skill/css.svg'
import Database from '../../assets/icons/skill/database.svg'
import Figma from '../../assets/icons/skill/figma.svg'
import Html from '../../assets/icons/skill/html.svg'
import Js from '../../assets/icons/skill/javascript.svg'
import Node from '../../assets/icons/skill/nodejs.svg'
import Python from '../../assets/icons/skill/python.svg'
import ReactJS from '../../assets/icons/skill/reactjs.svg'
import Server from '../../assets/icons/skill/server.svg'


function Skills() {
    const skills = [
        {
            name: 'angular',
            logo: Angular
        },
        {
            name: 'Css',
            logo: Css
        },
        {
            name: 'Database',
            logo: Database
        },
        {
            name: 'Figma',
            logo: Figma
        },
        {
            name: 'Html',
            logo: Html
        },
        {
            name: 'Js',
            logo: Js
        },
        {
            name: 'Python',
            logo: Python
        },
        {
            name: 'Node',
            logo: Node
        },
        {
            name: 'ReactJS',
            logo: ReactJS
        },
        {
            name: 'Server',
            logo: Server
        },
    ]

    const settings = {
        rtl: true,
        infinite: skills.length > 5, // فقط وقتی محصولات بیشتر از 4 تا باشند، اسلایدر حلقه‌ای می‌شود
        arrows: false,
        draggable: true, // فقط وقتی محصولات بیشتر از 4 باشد، اسلایدر قابل جابجایی است
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 8, // تعداد اسلایدها محدود به تعداد محصولات
                    slidesToScroll: 1,
                    autoplay: true, // فقط وقتی محصولات بیشتر از 4 تا باشند، اسلاید خودکار فعال می‌شود

                },
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    autoplay: true, // فقط وقتی محصولات بیشتر از 4 تا باشند، اسلاید خودکار فعال می‌شود

                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true, // فقط وقتی محصولات بیشتر از 4 تا باشند، اسلاید خودکار فعال می‌شود

                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true, // اضافه کردن autoplay در اینجا
                    autoplaySpeed: 1000,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true, // اضافه کردن autoplay در اینجا
                    autoplaySpeed: 1000,
                },
            },
        ],
    };


    return (
        <>
            <div className='title text-center position-relative'>
                <h1 className='text-center'>MY SKILLS</h1>
                <div className='back-title'>MY SKILLS</div>
            </div>
     <p className='w-50 text-center mx-auto mt-5 text-color text-[32px] container subtitle'>All the skills that I have in that field of work are mentioned.
                </p>
            <div className='skills-page container mt-6'>
           
                <Slider {...settings} adaptiveHeight={true} className='mt-5'>
                    {skills.map((item, index) => (
                        <div className="">
                            <div className="img-box ">
                                <img src={item.logo} alt={item.name} height={74} />
                            </div>
                        </div>
                    ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default Skills;
