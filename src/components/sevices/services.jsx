import React, { useState } from 'react';
import './services.css';

// icons
import Api from '../../assets/icons/services/api.png'
import Debugging from '../../assets/icons/services/debugging.png'
import Freelance from '../../assets/icons/services/freelance.png'
import Performance from '../../assets/icons/services/performance.png'
import Responsive from '../../assets/icons/services/responsive.png'
import Uiux from '../../assets/icons/services/uiux.png'

// active icons
import ApiActive from '../../assets/icons/services/active/api.png'
import DebuggingActive from '../../assets/icons/services/active/debugging.png'
import FreelanceActive from '../../assets/icons/services/active/freelance.png'
import PerformanceActive from '../../assets/icons/services/active/performance.png'
import ResponsiveActive from '../../assets/icons/services/active/responsive.png'
import UiuxActive from '../../assets/icons/services/active/uiux.png'

const serviceData = [
  {
    id: 'api',
    title: 'API Integration & Backend',
    desc: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
    icon: Api,
    activeIcon: ApiActive
  },
  {
    id: 'performance',
    title: 'Website Performance Optimization',
    desc: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
    icon: Performance,
    activeIcon: PerformanceActive
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    desc: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
    icon: Responsive,
    activeIcon: ResponsiveActive
  },
  {
    id: 'debugging',
    title: 'Bug Fix & Code Review',
    desc: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
    icon: Debugging,
    activeIcon: DebuggingActive
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    desc: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
    icon: Uiux,
    activeIcon: UiuxActive
  },
  {
    id: 'freelance',
    title: 'Freelance Maintenance Support',
    desc: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
    icon: Freelance,
    activeIcon: FreelanceActive
  },
];

function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className='title text-center position-relative'>
        <h1 className='text-center'>SERVICES</h1>
        <div className='back-title'>SERVICES</div>
      </div>
      <div className='services-page mt-4 row gy-5 gx-5 container'>
        {serviceData.map((service) => (
          <div
            key={service.id}
            className='col-md-6 col-sm-12 col-lg-4'
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className='item aspect-[3/3]'>
              <div className='services-img'>
                <img src={hovered === service.id ? service.activeIcon : service.icon} alt={service.title} />
              </div>
              <h6>{service.title}</h6>
              <p className='text-sm font-normal text-color  text-center'>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
