import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon02 = (props: {
  description: string;
  period: string;
  parentComponent: 'current' | 'hourly' | 'daily' | 'help';
}) => {
  const cloudRef = useRef<SVGPathElement>(null);

  const { theme } = useContext(ThemeContext);

  const sunOrMoonColor = props.period === 'd' ? '#f2a71e' : '#fffbca';
  const cloudsColor = theme === 'light' ? '#b0e7ff' : '#fff';

  useEffect(() => {
    const cloudAnimation = gsap.to(cloudRef.current, {
      duration: 7,
      opacity: 'random(0.3, 1)',
      x: 'random(-125, 189)',
      y: 'random(-71, 96)',
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
      id={styles['weather-02-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 600'
    >
      <title>{props.description}</title>
      <circle
        cx={677.1}
        cy={197.9}
        r={197.9}
        style={{
          fill: `${sunOrMoonColor}`,
        }}
      />
      <path
        ref={cloudRef}
        d='M810.6 404.9c0 55.2-43.7 98.9-98.9 98.9H256.1C182.5 503.8 125 444 125 372.7c0-73.6 59.8-133.4 131.1-133.4h13.8c-2.3-9.2-2.3-18.4-2.3-27.6 0-78.2 64.4-140.3 142.6-140.3 71.3 0 131.1 52.9 140.3 124.2 13.8-6.9 27.6-11.5 43.7-11.5 52.9 0 94.3 41.4 94.3 94.3 0 11.5-2.3 23-6.9 34.5 9.2-2.3 18.4-4.6 29.9-4.6 53.1-2.3 99.1 41.4 99.1 96.6z'
        style={{
          fill: `${cloudsColor}`,
        }}
      />
    </svg>
  );
};

export default WeatherIcon02;
