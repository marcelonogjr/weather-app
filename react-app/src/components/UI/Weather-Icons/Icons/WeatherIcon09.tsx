import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon09 = (props: {
  description: string;
  parentComponent: 'current' | 'hourly' | 'daily';
}) => {
  const rainDrop1Ref = useRef<SVGPathElement>(null);
  const rainDrop2Ref = useRef<SVGPathElement>(null);
  const rainDrop3Ref = useRef<SVGPathElement>(null);
  const rainDrop4Ref = useRef<SVGPathElement>(null);
  const rainDrop5Ref = useRef<SVGPathElement>(null);

  const { theme } = useContext(ThemeContext);

  const lightCloudColor = theme === 'light' ? '#b0e7ff' : '#fff';
  const darkCloudColor = theme === 'light' ? '#3a3a3a' : '#1d313f';

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
      id={styles['weather-09-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 939.4 1000'
    >
      <title>{props.description}</title>
      <style>{`.wi09t1{fill:${lightCloudColor}; opacity: 0.7}`}</style>
      <path
        d='M938.4 375.5c0 62.2-49.2 111.4-111.4 111.4H316.9c-82.9 0-147.6-67.3-147.6-147.6 0-82.9 67.3-150.2 147.6-150.2h15.5c-2.6-10.4-2.6-20.7-2.6-31.1 0-88 72.5-158 160.6-158 80.3 0 147.6 59.6 158 139.8 15.5-7.8 31.1-12.9 49.2-12.9 59.6 0 106.2 46.6 106.2 106.2 0 12.9-2.6 25.9-7.8 38.8 10.4-2.6 20.7-5.2 33.7-5.2 59.5 0 108.7 49.2 108.7 108.8z'
        style={{
          fill: `${darkCloudColor}`,
        }}
      />
      <path
        className='wi09t1'
        d='M772.7 466.1c0 62.2-49.2 111.4-111.4 111.4H148.6C65.7 577.5 1 510.2 1 429.9 1 347 68.3 279.7 148.6 279.7h15.5c-2.6-10.4-2.6-20.7-2.6-31.1 0-88 72.5-158 160.6-158 80.3 0 147.6 59.6 158 137.3 15.5-7.8 31.1-12.9 49.2-12.9 59.6 0 106.2 46.6 106.2 106.2 0 12.9-2.6 25.9-7.8 38.8 10.4-2.6 20.7-5.2 33.7-5.2 59.5 0 111.3 49.2 111.3 111.3z'
      />
      {/* drops */}
      <path
        ref={rainDrop5Ref}
        className='wi09t1'
        d='M208.1 779.5c12.9-25.9 15.5-139.8 15.5-139.8s-93.2 67.3-106.2 93.2-2.6 57 23.3 69.9c23.4 12.9 54.5 2.6 67.4-23.3z'
      />
      <path
        ref={rainDrop4Ref}
        className='wi09t1'
        d='M399.8 779.5c12.9-25.9 15.5-139.8 15.5-139.8s-93.2 67.3-106.2 93.2c-12.9 25.9-2.6 57 23.3 69.9 23.4 12.9 54.4 2.6 67.4-23.3z'
      />
      <path
        ref={rainDrop3Ref}
        className='wi09t1'
        d='M513.7 732.9c-12.9 25.9-2.6 57 23.3 69.9 25.9 12.9 57 2.6 69.9-23.3 12.9-25.9 15.5-139.8 15.5-139.8s-95.7 67.3-108.7 93.2z'
      />
      <path
        ref={rainDrop2Ref}
        className='wi09t1'
        d='M161.5 924.5c-12.9 25.9-2.6 57 23.3 69.9 25.9 12.9 57 2.6 69.9-23.3 12.9-25.9 15.5-139.8 15.5-139.8s-95.7 67.3-108.7 93.2z'
      />
      <path
        ref={rainDrop1Ref}
        className='wi09t1'
        d='M353.2 924.5c-12.9 25.9-2.6 57 23.3 69.9 25.9 12.9 57 2.6 69.9-23.3 12.9-25.9 15.5-139.8 15.5-139.8s-95.8 67.3-108.7 93.2z'
      />
    </svg>
  );
};

export default WeatherIcon09;
