import React, { useContext, useState, useEffect } from 'react';
import "./navbar.css";
import NavContext from '../../contexts/NavContext';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import Profile from '../../assets/icons/profile.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { useLocation, Link, useNavigate } from 'react-router-dom';

//icon
import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/icons/menu.svg'
import Phone from '../../assets/icons/phone.svg'

const NavbarComponent = () => {
  const location = useLocation();
  const [visibleRight, setVisibleRight] = useState(false);

  return (
    <>


      <Navbar expand='lg' className='web-nav' >

        <div className={`navbar-menu w-100 d-flex align-items-center justify-content-between container`}>
          <img src={Logo} alt="Logo" width={90} />
          <div className='d-flex align-items-center justify-content-between  w-100'>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav activeKey={location.pathname}>
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-start gap-1' href="#banner" active={location.pathname === "/"}>Home</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className='d-flex align-items-start gap-1' href="#services" active={location.pathname === "/shop"}>   Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-start gap-1' href="#projects" active={location.pathname === "/branches"}> Portfolio / Projects</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
          <Nav.Link href="/blogs" active={location.pathname === "/blogs"}>بلاگ و اخبار</Nav.Link>
        </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-start gap-1' href="#aboutMe" active={location.pathname === "/about-us"}>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-start gap-1' href="#contactMe" active={location.pathname === "/contact-us"}>Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <Divider layout="vertical" className='py-2 mx-5' />
              <div className='d-flex alig0item-center gap-2'>
                <img src={Phone} alt="" />
                <span className='text-[#FEC544]'>+971 58 225 4058</span>
              </div>
            </Navbar.Collapse>

          </div>
        </div>
      </Navbar>

      {/* Mobile Navbar */}

      <Navbar

        className="px-2 bg-body-tertiary mb-3 mobile-nav d-flex align-items-center justify-content-between"
        dir="rtl" // Setting text direction to RTL
      >
        <img src={Menu} alt="Menu" onClick={() => setVisibleRight(true)} />
        <div style={{ width: '38px' }}>

          <img src={Logo} alt="Logo" />
        </div>
      </Navbar>


      <Sidebar
        visible={visibleRight}
        onHide={() => setVisibleRight(false)}
        position="left"
        style={{ position: 'relative', width: '50%' }}
      >
        <Divider />
        <div className='menu-items'>
          {/* آیتم‌های ثابت */}
          <a className='d-flex align-items-center gap-2 mb-3' href='#banner'>
            {/* <img src={location.pathname === "/" ? HomeActive : Home} alt="Home" /> */}
            <span>Home</span>
          </a>
          <hr style={{ color: '#fff', opacity: '1' }} />

          {/* سایر آیتم‌ها */}
          <a className='d-flex align-items-center gap-2 mb-3' href='#services'>
            {/* <img src={location.pathname === "/branches" ? LocationActive : Location} alt="Branches" /> */}
            <span>Services</span>
          </a>
          <hr style={{ color: '#fff', opacity: '1' }} />

          <a className='d-flex align-items-center gap-2 mb-3' href='#projects'>
            {/* <img src={location.pathname === "/blogs" ? BlogActive : Blog} alt="Blog and News" /> */}
            <span>Portfolio / Projects</span>
          </a>
          <hr style={{ color: '#fff', opacity: '1' }} />

          <a className='d-flex align-items-center gap-2 mb-3' href="#aboutMe">
            {/* <img src={location.pathname === "/about-us" ? infoActive : info} alt="About Us" /> */}
            <span>About Me</span>
          </a>
          <hr style={{ color: '#fff', opacity: '1' }} />

          <a className='d-flex align-items-center gap-2 mb-3' href='#contactMe'>
            {/* <img src={location.pathname === "/contact-us" ? HeadphoneActive : Headphone} alt="Contact Us" /> */}
            <span>Contact</span>
          </a>






        </div>
      </Sidebar>
    </>
  )
}

export default NavbarComponent;
