import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon03 = (props: {
  description: string;
  parentComponent: 'current' | 'hourly' | 'daily';
}) => {
  const cloudRef = useRef<SVGCircleElement>(null);

  const { theme } = useContext(ThemeContext);

  const cloudsColor = theme === 'light' ? '#b0e7ff' : '#fff';

  useEffect(() => {
    const cloudAnimation = gsap.to(cloudRef.current, {
      duration: 7,
      opacity: 'random(0.3, 1)',
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      scale: 'random(0.9, 1.1)',
      ease: 'power1.inOut',
      repeat: -1,
      repeatRefresh: true,
    });
    return () => {
      cloudAnimation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['weather-03-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 723.2'
    >
      <title>{props.description}</title>
      <path
        ref={cloudRef}
        d='M875 489.9c0 60.4-47.8 108.2-108.2 108.2H268.5C188 598.1 125 532.7 125 454.6c0-80.5 65.4-146 143.5-146h15.1c0-7.6-2.5-20.1-2.5-30.2 0-85.6 70.5-153.5 156-153.5 78 0 143.5 57.9 153.5 135.9 15.1-7.6 30.2-12.6 47.8-12.6 57.9 0 103.2 45.3 103.2 103.2 0 12.6-2.5 25.2-7.6 37.8 10.1-2.5 20.1-5 32.7-5 58 0 108.3 47.8 108.3 105.7z'
        style={{
          fill: `${cloudsColor}`,
        }}
      />
    </svg>
  );
};

export default WeatherIcon03;
