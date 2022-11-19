import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon50 = (props: {
  description: string;
  parentComponent: 'current' | 'hourly' | 'daily' | 'help';
}) => {
  const mistG1Ref = useRef<SVGPathElement>(null);
  const mistG2Ref = useRef<SVGPathElement>(null);

  const { theme } = useContext(ThemeContext);

  const mistG1Color = theme === 'light' ? '#333335' : '#abaeb3';
  const mistG2Color = theme === 'light' ? '#808285' : '#686868';

  useEffect(() => {
    const mistAnimation = gsap.to([mistG1Ref.current, mistG2Ref.current], {
      duration: 5,
      x: 'random(-80,80)',
      scale: 'random(0.9, 1.1)',
      opacity: 'random(0.5,1)',
      ease: 'linear',
      repeat: -1,
      repeatRefresh: true,
    });
    return () => {
      mistAnimation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['weather-50-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 525.5'
    >
      <title>{props.description}</title>
      <style>{`.wi50t0{fill:${mistG2Color}}.wi50t1{fill:${mistG1Color}}`}</style>
      <path
        ref={mistG1Ref}
        className='wi50t0'
        d='M583.3 53H336.1c-8.3 0-16.7-5.6-16.7-13.9s5.6-13.9 13.9-13.9h250c8.3 0 13.9 5.6 13.9 13.9 0 8.4-5.5 13.9-13.9 13.9zM638.9 164.1H166.7c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h472.2c8.3 0 13.9 5.6 13.9 13.9 0 8.4-8.4 13.9-13.9 13.9zM861.1 247.5H333.3c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h527.8c8.3 0 13.9 5.6 13.9 13.9-2.8 8.3-8.3 13.9-13.9 13.9zM666.7 330.8H138.9c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h527.8c8.3 0 13.9 5.6 13.9 13.9s-8.4 13.9-13.9 13.9zM777.8 414.1H250c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h527.8c8.3 0 13.9 5.6 13.9 13.9 0 8.4-8.4 13.9-13.9 13.9zM333.3 500.2h333.3c8.3 0 13.9-5.6 13.9-13.9s-5.6-13.9-13.9-13.9H333.3c-8.3 0-13.9 5.6-13.9 13.9 0 5.6 5.6 13.9 13.9 13.9zM305.6 441.9H275c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h30.6c8.3 0 13.9 5.6 13.9 13.9-.1 8.4-5.6 13.9-13.9 13.9z'
      />
      <path
        ref={mistG2Ref}
        className='wi50t1'
        d='M583.3 80.8H336.1c-8.3 0-16.7-5.6-16.7-13.9S325 53 333.3 53h250c8.3 0 13.9 5.6 13.9 13.9s-5.5 13.9-13.9 13.9zM638.9 136.4H166.7c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h472.2c8.3 0 13.9 5.6 13.9 13.9s-8.4 13.9-13.9 13.9zM861.1 219.7H333.3c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h527.8c8.3 0 13.9 5.6 13.9 13.9-2.8 8.3-8.3 13.9-13.9 13.9zM666.7 303H138.9c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h527.8c8.3 0 13.9 5.6 13.9 13.9 0 8.4-8.4 13.9-13.9 13.9zM777.8 386.4H250c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9h527.8c8.3 0 13.9 5.6 13.9 13.9s-8.4 13.9-13.9 13.9zM333.3 469.7h333.3c8.3 0 13.9-5.6 13.9-13.9s-5.6-13.9-13.9-13.9H333.3c-8.3 0-13.9 5.6-13.9 13.9s5.6 13.9 13.9 13.9zM750 441.9h-58.3c-8.3 0-13.9-5.6-13.9-13.9s5.6-13.9 13.9-13.9H750c8.3 0 13.9 5.6 13.9 13.9 0 8.4-5.6 13.9-13.9 13.9z'
      />
    </svg>
  );
};

export default WeatherIcon50;
