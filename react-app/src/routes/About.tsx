import React from 'react';
import { Outlet, useLocation } from 'react-router';

import AboutLeftNavBar from '../components/About/AboutLeftNavBar';
import styles from './About.module.css';

const About: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[2];

  console.log(pathName);
  
  return (
    <div className={styles['articles-main']}>
      <AboutLeftNavBar currentLocation={pathName}/>
      <div className={styles['articles-content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
