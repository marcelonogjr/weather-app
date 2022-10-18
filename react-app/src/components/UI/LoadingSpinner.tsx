import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './LoadingSpinner.module.css';
import ThemeContext from '../../store/theme-context';

const LoadingSpinner = () => {
  const cloudsRef = useRef<SVGPathElement[] | null[]>([]);

  const { theme } = useContext(ThemeContext);

  const cloudsColor = theme === 'light' ? '#b0e7ff' : '#fff';

  useEffect(() => {
    const mainAnimation = gsap.fromTo(
      cloudsRef.current,
      {
        x: 0,
        opacity: 0,
      },
      {
        x: 720,
        opacity: 1,
        duration: 2,
        ease: 'linear',
        stagger: { each: 1, repeat: -1 },
      }
    );

    return () => {
      mainAnimation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['loading-spinner-svg']}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 990 170.4'
    >
      <path
        ref={(element) => {
          cloudsRef.current[0] = element;
        }}
        d='M112.4 0c28.1 0 51.7 20.8 55.3 48.9 5.4-2.7 10.9-4.5 17.2-4.5 20.8 0 37.2 16.3 37.2 37.2 0 4.5-.9 9.1-2.7 13.6 3.6-.9 7.2-1.8 11.8-1.8 20.9 0 39 17.2 39 38.1 0 21.7-17.2 39-39 39H51.7C22.7 170.5 0 147 0 118.8c0-29 23.5-52.6 51.7-52.6h5.4c0-2.7-.9-7.2-.9-10.9C56.2 24.4 81.6 0 112.4 0'
        style={{
          fill: `${cloudsColor}`,
          opacity: 0,
        }}
      />
      <path
        ref={(element) => {
          cloudsRef.current[1] = element;
        }}
        d='M112.4 0c28.1 0 51.7 20.8 55.3 48.9 5.4-2.7 10.9-4.5 17.2-4.5 20.8 0 37.2 16.3 37.2 37.2 0 4.5-.9 9.1-2.7 13.6 3.6-.9 7.2-1.8 11.8-1.8 20.9 0 39 17.2 39 38.1 0 21.7-17.2 39-39 39H51.7C22.7 170.5 0 147 0 118.8c0-29 23.5-52.6 51.7-52.6h5.4c0-2.7-.9-7.2-.9-10.9C56.2 24.4 81.6 0 112.4 0'
        style={{
          fill: `${cloudsColor}`,
          opacity: 0,
        }}
      />
      <path
        ref={(element) => {
          cloudsRef.current[2] = element;
        }}
        d='M112.4 0c28.1 0 51.7 20.8 55.3 48.9 5.4-2.7 10.9-4.5 17.2-4.5 20.8 0 37.2 16.3 37.2 37.2 0 4.5-.9 9.1-2.7 13.6 3.6-.9 7.2-1.8 11.8-1.8 20.9 0 39 17.2 39 38.1 0 21.7-17.2 39-39 39H51.7C22.7 170.5 0 147 0 118.8c0-29 23.5-52.6 51.7-52.6h5.4c0-2.7-.9-7.2-.9-10.9C56.2 24.4 81.6 0 112.4 0'
        style={{
          fill: `${cloudsColor}`,
          opacity: 0,
        }}
      />
    </svg>
  );
};

export default LoadingSpinner;
