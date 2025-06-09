import React, { useEffect, useState, useRef } from 'react';
import './home.css';
import Banner from '../components/banner/banner'
import AboutMe from '../components/about-me/aboutMe'
import Services from '../components/sevices/services'
import Skills from '../components/skills/skills'
import Projects from '../components/projects/project'
import ContactMe from '../components/contact-me/contactMe'




function Home() {



  return (
    <>
    <div id='banner'>

      <Banner />
    </div>
      <section className='mt-6' id="aboutMe">
        <AboutMe />
      </section>
      <section className='mt-6' id="services">
        <Services />
      </section>
      <section className='mt-6' >
        <Skills />
      </section>
      <section className='mt-6' id='projects'>
        <Projects />
      </section>
      <section className='mt-6' id='contactMe'>
        <ContactMe />
      </section>
    </>
  )
}

export default Home;
