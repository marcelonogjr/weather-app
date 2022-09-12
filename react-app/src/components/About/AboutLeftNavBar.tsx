import { Link } from 'react-router-dom';
import styles from './AboutLeftNavBar.module.css';

const AboutLeftNavBar = (props: { currentLocation: string }) => {
  
  const clickHandler = () => {
    window.scrollTo({top: 0});
  };

  return (
    <div className={styles['about-left_nav_bar']}>
      <nav>
        <Link
          to={'/about/intro'}
          className={`${styles['left-navbar_link']} ${
            props.currentLocation === 'intro' ? styles['active'] : ''
          }`}
          onClick={clickHandler}
          >
          Introduction
        </Link>
        <Link
          to={'/about/map-tiles'}
          className={`${styles['left-navbar_link']} ${
            props.currentLocation === 'map-tiles' ? styles['active'] : ''
          }`}
          onClick={clickHandler}
          >
          Map Coordinates
        </Link>
        <Link
          to={'/about/color-transform'}
          className={`${styles['left-navbar_link']} ${
            props.currentLocation === 'color-transform' ? styles['active'] : ''
          }`}
          onClick={clickHandler}
        >
          Color Transformation
        </Link>
        <Link
          to={'/about/dynamic-graph'}
          className={`${styles['left-navbar_link']} ${
            props.currentLocation === 'dynamic-graph' ? styles['active'] : ''
          }`}
          onClick={clickHandler}
        >
          Dynamic Graph Color
        </Link>
      </nav>
    </div>
  );
};

export default AboutLeftNavBar;
