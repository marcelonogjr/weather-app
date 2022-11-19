import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon01n = (props: {
  description: string;
  parentComponent: 'current' | 'hourly' | 'daily' | 'help';
}) => {
  const moonBlurRef = useRef<SVGCircleElement>(null);

  const { theme } = useContext(ThemeContext);

  const moonColorTheme = theme === 'light' ? '#fffbca' : '#fffbca';
  const moonBlurTheme = theme === 'light' ? '#a5a5a5' : '#fff697';
  const moonStrokeTheme = theme === 'light' ? '#fffbca' : '#fff9bd';

  useEffect(() => {
    const glowAnimation = gsap.fromTo(
      moonBlurRef.current,
      { opacity: 0.3 },
      {
        duration: 5,
        opacity: 1,
        yoyoEase: 'linear',
        repeat: -1,
      }
    );
    return () => {
      glowAnimation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['weather-01n-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 1000'
    >
      <title>{props.description}</title>
      <style>
        {`.wi01n0{fill:${moonColorTheme}; stroke: ${moonStrokeTheme}; stroke-width: 10; stroke-miterlimit:10}`}
      </style>
      <filter id='moon-blur' x='-100%' y='-100%' height='300%' width='300%'>
        <feGaussianBlur in='SourceGraphic' stdDeviation={70} result='BLUR' />
      </filter>
      <circle
        ref={moonBlurRef}
        style={{
          fill: `${moonBlurTheme}`,
          filter: 'url(#moon-blur)',
        }}
        cx={500}
        cy={500}
        r={250}
      />
      <circle className='wi01n0' cx={500} cy={500} r={200} />
    </svg>
  );
};

export default WeatherIcon01n;
