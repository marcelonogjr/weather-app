import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon04 = (props: {
  description: string;
  parentComponent: 'current' | 'hourly' | 'daily';
}) => {
  const lightCloudRef = useRef<SVGCircleElement>(null);
  const darkCloudRef = useRef<SVGCircleElement>(null);

  const { theme } = useContext(ThemeContext);

  const lightCloudColor = theme === 'light' ? '#b0e7ff' : '#fff';
  const darkCloudColor = theme === 'light' ? '#3a3a3a' : '#1d313f';

  useEffect(() => {
    const lightCloudAnimation = gsap.to(lightCloudRef.current, {
      duration: 5,
      opacity: 'random(0.65, 1)',
      x: 'random(-125, 175)',
      y: 'random(-50, 100)',
      scale: 'random(0.9, 1.1)',
      ease: 'power1.inOut',
      repeat: -1,
      repeatRefresh: true,
    });
    const darkCloudAnimation = gsap.to(darkCloudRef.current, {
      duration: 10,
      opacity: 'random(0.65, 1)',
      x: 'random(-175, 125)',
      y: 'random(-125, 50)',
      scale: 'random(0.9, 1.1)',
      ease: 'power1.inOut',
      repeat: -1,
      repeatRefresh: true,
    });
    return () => {
      lightCloudAnimation.kill();
      darkCloudAnimation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['weather-04-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 712'
    >
      <title>{props.description}</title>
      <path
        ref={darkCloudRef}
        d='M875 425.4c0 49.7-39.4 89.1-89.1 89.1H377.8c-66.3 0-118.1-53.9-118.1-118.1 0-66.3 53.9-120.2 118.1-120.2h12.4c-2.1-8.3-2.1-16.6-2.1-24.9 0-70.4 58-126.4 128.5-126.4 64.2 0 118.1 47.7 126.4 111.9 12.4-6.2 24.9-10.4 39.4-10.4 47.7 0 84.9 37.3 84.9 84.9 0 10.4-2.1 20.7-6.2 31.1 8.3-2.1 16.6-4.1 26.9-4.1 47.6.1 87 39.5 87 87.1z'
        style={{
          fill: `${darkCloudColor}`,
        }}
      />
      <path
        ref={lightCloudRef}
        d='M742.4 497.9c0 49.7-39.4 89.1-89.1 89.1H243.1C176.8 587 125 533.1 125 468.9c0-66.3 53.9-120.2 118.1-120.2h12.4c-2.1-8.3-2.1-16.6-2.1-24.9 0-70.4 58-126.4 128.5-126.4 64.2 0 118.1 47.7 126.4 109.8 12.4-6.2 24.9-10.4 39.4-10.4 47.7 0 84.9 37.3 84.9 84.9 0 10.4-2.1 20.7-6.2 31.1 8.3-2.1 16.6-4.1 26.9-4.1 47.7.1 89.1 39.5 89.1 89.2z'
        style={{
          fill: `${lightCloudColor}`,
        }}
      />
    </svg>
  );
};

export default WeatherIcon04;
