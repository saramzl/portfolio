import React, { useState } from 'react';
import './project.css';

import Kstates from '../../assets/images/project/kstates.svg';
import Kadona from '../../assets/images/project/kadona.svg';
import Landing from '../../assets/images/project/landing.svg';
import B2b from '../../assets/images/project/b2b.svg';
import BackOffice from '../../assets/images/project/backoffice.svg';
import Benice from '../../assets/images/project/benice.svg';
import Bonnyto from '../../assets/images/project/bonnyto.svg';
import Club from '../../assets/images/project/club.svg';
import EasyCard from '../../assets/images/project/easycard.svg';
import Event from '../../assets/images/project/event.svg';
import FreshCard from '../../assets/images/project/freshcard.svg';
import Frugell from '../../assets/images/project/frugell.svg';
import GiftCard from '../../assets/images/project/gift-card.svg';
import Guinness from '../../assets/images/project/guinness.svg';
import Phygizon from '../../assets/images/project/phygizon.svg';
import Plasma from '../../assets/images/project/plasma.svg';
import Rayzon from '../../assets/images/project/rayzone.svg';
import Sapost from '../../assets/images/project/sapost.svg';
import Tafrihati from '../../assets/images/project/tafrihati.svg';
import Tatbigh from '../../assets/images/project/tatbigh.svg';
import TicketBooking from '../../assets/images/project/ticket-booking.svg';
import Top from '../../assets/images/project/top.svg';
import ArrowRight from '../../assets/icons/arrowRight.svg';

function Project() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3); // نمایش ۳ آیتم اولیه
 const projectList = [{
    name: 'K Estates Dubai',
    image: Kstates,
    description: "K Estates is a distinguished luxury real estate brand specializing in premium properties across Dubai, Monaco, and Cannes. As a full-stack developer, I contributed to crafting an elegant and performance-driven website that seamlessly connects discerning clients with exclusive listings tailored to their unique preferences. With a refined user experience, intelligent property matching, and optimized lead generation flows, the platform ensures a sophisticated and intuitive journey from discovery to closing. The digital presence of K Estates reflects the brand's commitment to excellence, discretion, and world- class service in the realm of high - end real estate. ",
    link: 'https://kestates.ae/'
  },
  {
    name: 'Kadona',
    image: Kadona,
    description: "Kadona is an innovative website and web application under Parsian Bank Iran that allows users to create and manage customized physical gift cards effortlessly. With special design tools available directly on the platform, users can customize their cards by adding a personal image, logo, and congratulatory message, whether for individual or bulk orders. Once designed, the physical gift card is printed and delivered to the recipient’s address. Users can also charge and manage their cards seamlessly, making Kadona a convenient and personalized gifting solution for both personal and corporate use.",
    link: 'https://www.kadoona.com/'
  }
  ,
  {
    name: 'Landing Pages',
    image: Landing,
    description: "Kadona is an innovative website and web application under Parsian Bank Iran that allows users to create and manage customized physical gift cards effortlessly. With special design tools available directly on the platform, users can customize their cards by adding a personal image, logo, and congratulatory message, whether for individual or bulk orders. Once designed, the physical gift card is printed and delivered to the recipient’s address. Users can also charge and manage their cards seamlessly, making Kadona a convenient and personalized gifting solution for both personal and corporate use.",
    link: 'https://raya-service.top/landing/index.html'
  },
  {
    name: 'Rayzon',
    image: Rayzon,
    description: "Developed a modern and fully responsive UI template for an NFT marketplace focused on gaming achievements, digital art, and unique collectibles. The platform enables users to seamlessly mint, trade, and display their NFT assets in an intuitive and engaging environment.",
    link: 'http://raya-service.top:8090/'
  },
  {
    name: 'Sapost',
    image: Sapost,
    description: "A new platform to accelerate businesses to send products by mail in groups only by a list of customer information in the shortest possible time.",
    link: 'https://sapost.ir/'
  },
  {
    name: 'Top',
    image: Top,
    description: "Top super application designed to facilitate users' access to daily services needed by the general public. Internet sales of tickets for domestic and foreign flights, buses, trains, group and credit tours, entrance tickets to tourist attractions are easily available to users.",
    link: 'https://app.top.ir'
  },
  {
    name: 'Benice',
    image: Benice,
    description: "In this project, I was responsible for designing and developing the website for the Ben Ice brand. The website was designed to provide an engaging and user-friendly experience for showcasing and selling products. Key features of this project included the use of modern technologies such as React.js and Next.js, SEO and performance optimization, responsive design, and the implementation of a customer loyalty system.",
    link: 'https://benicejuice.com/'
  },
  {
    name: 'Club',
    image: Club,
    description: "Designed and developed the frontend interface for a customer loyalty platform built for a wholesale natural juice brand. The platform allows users to register, track purchases, view loyalty points, and manage their profile. Focused on creating a clean, responsive, and user-friendly experience using modern web technologies. Implemented advanced filtering, real-time notifications, and mobile-first design principles to ensure a smooth user journey across all devices.",
    link: 'https://club.benice.ir/'
  },
  {
    name: 'B2B',
    image: B2b,
    description: "Responsible for the full front-end development of a wholesale e-commerce website specializing in natural and healthy food products, including fresh juices, smoothies, and catering packages.Implemented a responsive and user-friendly interface to streamline the bulk ordering process for customers.Ensured cross-device compatibility and optimized performance across desktop and mobile platforms.Developed and managed user registration, login forms, and order submission workflows to enhance user experience and operational efficiency.",
    link: 'https://shop.benice.ir/'
  },
  {
    name: 'BackOffice',
    image: BackOffice,
    description: "Developed and maintained the back-office interface for managing products, categories, blogs, and other content.Implemented features for adding, editing, and deleting items to ensure up-to-date and accurate site information.Enhanced administrative efficiency through intuitive UI components and reliable data handling.",
    link: 'https://raya-service.top/landing/index.html'
  },
  {
    name: 'Fresh cart',
    image: FreshCard,
    description: "",
    link: 'http://raya-service.top:8093/'
  },
  {
    name: 'Event',
    image: Event,
    description: "",
    link: 'http://raya-service.top:8091/'
  },
  {
    name: 'Plasma',
    image: Plasma,
    description: "Plasma panel is used in laboratories. Using this panel, the laboratory manager can register the patients' details. The steps of the test are provided through the registration panel and the result is presented through it. It can also record and view all kinds of reports.",
    link: ''
  },
  {
    name: 'Bonnyto',
    image: Bonnyto,
    description: "",
    link: ''
  },
  {
    name: 'Sita System Panel',
    image: Tatbigh,
    description: "A great project that helps companies visually create and produce dynamic forms and web pages in a matter of minutes and build them in minutes. This large module can be linked to [Business Process Model and Notation (BPMN)] systems to create processes in automation and management applications that drastically reduce project build time.",
    link: 'https://bpm.iwtdc.ir/'
  },
  {
    name: 'Guinness',
    image: Guinness,
    description: "",
    link: 'http://raya-service.top:8095/'
  },
  {
    name: 'Iran & World Tourism Development Corporation',
    image: Tafrihati,
    description: "",
    link: 'https://iwtdc.ir/'
  },
  {
    name: 'Gift Card',
    image: GiftCard,
    description: "",
    link: 'http://raya-service.top:8094/'
  },
  {
    name: 'Easycard',
    image: EasyCard,
    description: "",
    link: 'https://easycard724.ir/'
  },
  {
    name: 'Phygizon',
    image: Phygizon,
    description: "",
    link: ''
  },
  {
    name: 'Ticket Booking',
    image: TicketBooking,
    description: "The project is about having a ticket system which provide different types of ticket vouchers. From Tourist centers, Tours, Hotels, flies etc. Each ticket has a time period for use, count of consumers the service or services bought.",
    link: ''
  },


];
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projectList.length));
  };


  const visibleProjects = projectList
    .filter(item => item && item.name && item.image) // فیلتر آیتم‌های معتبر
    .slice(0, visibleCount);
  const isEven = (index) => index % 2 === 0;

 

  return (
    <>
      <div className='title text-center position-relative'>
        <h1 className='text-center'>PROJECTS</h1>
        <div className='back-title'>PROJECTS</div>
      </div>
      <div className='project-page container mt-6 text-center'>
        {visibleProjects.map((item, index) => (
          <div key={index} className={`${isEven(index) ? 'flex-col-mobile' : 'row-reverse'} d-flex position-relative mt-6 item`} style={{ zIndex: '10000' }}>
            <div className={`${isEven(index) ? 'text-left' : 'text-right'} flex-1 link`}>
              {item.link && (
                <a
                  href={item.link}
                  target='_blank'
                  className={`${isEven(index) ? 'justify-content-start' : 'justify-content-end'} color-primary text-base font-semibold d-flex align-item-center gap-2`}
                  style={{ cursor: 'pointer' }}
                >
                  view <img src={ArrowRight} alt="" />
                </a>
              )}
              <h6 className='text-[34px] font-semibold mt-3'>{item.name}</h6>

              {item.description && (
                <div
                  className={`description-box ${expandedIndex === index ? 'expanded' : 'collapsed'} mt-4 ${isEven(index) ? 'bg-gradiant-right' : 'bg-gradiant-left'}`}
                  style={isEven(index) ? { marginRight: '-5em' } : { marginLeft: '-5em' }}
                >
                  <p className='text-color text-lg font-medium text-justify'>
                    {item.description}
                  </p>
                  <span
                    className='show-more'
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? 'Show Less' : 'Show More'}
                  </span>
                </div>
              )}
            </div>
            <div className='product-img flex-1'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={`${isEven(index) ? 'bg-img-right' : 'bg-img-left'} bg-img`}></div>
          </div>
        ))}

        {visibleCount < projectList.filter(item => item && item.name && item.image).length && (
          <button className='btn btn-primary w-fit mx-auto mt-6' onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default Project;
