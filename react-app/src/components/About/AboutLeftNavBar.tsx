import { Link } from 'react-router-dom';
import styles from './AboutLeftNavBar.module.css';

const AboutLeftNavBar = (props: {currentLocation: string}) => {

  return (
    <div className={styles['about-left_nav_bar']}>
      <nav>
        <Link to={'/about/intro'} className={`${styles['left-navbar_link']} ${props.currentLocation === 'intro' ? styles['active'] : ''}`}>
          Introduction
        </Link>
        <Link to={'/about/map-tiles'} className={`${styles['left-navbar_link']} ${props.currentLocation === 'map-tiles' ? styles['active'] : ''}`}>
          Map Coordinates
        </Link>
      </nav>
    </div>
  );
};

export default AboutLeftNavBar;
