import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon10 = (props: { description: string; period: string }) => {
  const rainDrop1Ref = useRef<SVGPathElement>(null);
  const rainDrop2Ref = useRef<SVGPathElement>(null);
  const rainDrop3Ref = useRef<SVGPathElement>(null);
  const rainDrop4Ref = useRef<SVGPathElement>(null);
  const rainDrop5Ref = useRef<SVGPathElement>(null);

  const { theme } = useContext(ThemeContext);

  const sunOrMoonColor = props.period === 'd' ? '#f2a71e' : '#fffbca';
  const lightCloudColor = theme === 'light' ? '#b0e7ff' : '#fff';
  
  useEffect(() => {
      const gsapFromAnimation = {
        opacity: 0,
        x: 220 * Math.tan(0.595588398),
        y: -220,
      };
    
      const gsapToAnimation = {
        duration: 'random(1, 1.5)',
        opacity: 1,
        x: 0,
        y: 0,
        ease: 'linear',
        repeat: -1,
      };

    const rainDrop1Animation = gsap.fromTo(
      rainDrop1Ref.current,
      gsapFromAnimation,
      gsapToAnimation
    );
    const rainDrop2Animation = gsap.fromTo(
      rainDrop2Ref.current,
      gsapFromAnimation,
      gsapToAnimation
    );
    const rainDrop3Animation = gsap.fromTo(
      rainDrop3Ref.current,
      gsapFromAnimation,
      gsapToAnimation
    );
    const rainDrop4Animation = gsap.fromTo(
      rainDrop4Ref.current,
      gsapFromAnimation,
      gsapToAnimation
    );
    const rainDrop5Animation = gsap.fromTo(
      rainDrop5Ref.current,
      gsapFromAnimation,
      gsapToAnimation
    );
    return () => {
      rainDrop1Animation.kill();
      rainDrop2Animation.kill();
      rainDrop3Animation.kill();
      rainDrop4Animation.kill();
      rainDrop5Animation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['weather-10-svg']}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 857 1000'
    >
      <title>{props.description}</title>
      <style>{`.wi10t1{fill:${lightCloudColor}}`}</style>
      <circle
        cx={631}
        cy={226.1}
        r={226.1}
        style={{
          fill: `${sunOrMoonColor}`,
        }}
      />
      <path
        className='wi10t1'
        d='M783.4 462.7c0 63.1-50 113-113 113H149.9C65.7 575.7 0 507.4 0 425.9c0-84.1 68.4-152.5 149.9-152.5h15.8c-2.6-10.5-2.6-21-2.6-31.5 0-89.4 73.6-160.4 163-160.4 81.5 0 149.9 60.5 160.4 142 15.8-7.9 31.5-13.1 50-13.1 60.5 0 107.8 47.3 107.8 107.8 0 13.1-2.6 26.3-7.9 39.4 10.5-2.6 21-5.3 34.2-5.3 60.3-2.6 112.8 47.3 112.8 110.4z'
      />
      <path
        ref={rainDrop5Ref}
        id='drop5'
        className='wi10t1'
        d='M165.6 804.5c-26.3-13.1-34.2-44.7-21-68.4 13.1-23.7 105.2-92 105.2-92s-2.6 115.7-15.8 139.3c-13.2 23.7-44.7 34.2-68.4 21.1z'
      />
      <path
        ref={rainDrop4Ref}
        id='drop4'
        className='wi10t1'
        d='M354.9 804.5c-26.3-13.1-34.2-44.7-21-68.4 13.1-23.7 105.2-92 105.2-92s-2.6 115.7-15.8 139.3c-13.2 23.7-42.1 34.2-68.4 21.1z'
      />
      <path
        ref={rainDrop3Ref}
        id='drop3'
        className='wi10t1'
        d='M646.7 641.5s-2.6 115.7-15.8 139.3c-13.1 23.7-44.7 34.2-68.4 21-26.3-13.1-34.2-44.7-21-68.4s105.2-91.9 105.2-91.9z'
      />
      <path
        ref={rainDrop2Ref}
        id='drop2'
        className='wi10t1'
        d='M291.8 833.4s-2.6 115.7-15.8 139.3c-13.1 26.3-44.7 34.2-68.4 21-26.3-13.1-34.2-44.7-21-68.4 13.2-23.6 105.2-91.9 105.2-91.9z'
      />
      <path
        ref={rainDrop1Ref}
        id='drop1'
        className='wi10t1'
        d='M483.7 833.4s-2.6 115.7-15.8 139.3c-13.1 26.3-44.7 34.2-68.4 21-26.3-13.1-34.2-44.7-21-68.4 13.2-23.6 105.2-91.9 105.2-91.9z'
      />
    </svg>
  );
};

export default WeatherIcon10;
