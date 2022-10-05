import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import styles from './WeatherIcons.module.css';

const WeatherIcon01d = (props: {
  description: string;
  parentComponent: 'current' | 'hourly' | 'daily';
}) => {
  const smallRaysRef = useRef<SVGPathElement>(null);
  const mediumRaysRef = useRef<SVGPathElement>(null);
  const largeRaysRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const biggerRaysAnimation = gsap.to(
      [mediumRaysRef.current, largeRaysRef.current],
      {
        duration: 10,
        scale: 'random(0.7, 1)',
        rotate: '+=50',
        transformOrigin: '50% 50%',
        ease: 'linear',
        repeat: -1,
        repeatRefresh: true,
      }
    );
    const smallerRaysAnimation = gsap.to(smallRaysRef.current, {
      duration: 10,
      scale: 'random(0.7, 1)',
      rotate: '-=50',
      transformOrigin: '50% 50%',
      ease: 'linear',
      repeat: -1,
      repeatRefresh: true,
    });

    return () => {
      biggerRaysAnimation.kill();
      smallerRaysAnimation.kill();
    };
  }, []);

  return (
    <svg
      id={styles['weather-01d-svg']}
      className={styles[`weather-svg_${props.parentComponent}`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900 900'
    >
      <title>{props.description}</title>
      <style>{'.wi01d0{fill:#f2a72e}'}</style>
      <circle className='wi01d0' cx={450} cy={450} r={180} />
      <g id='large_x5F_rays'>
        <path
          ref={largeRaysRef}
          className='wi01d0'
          d='M894 456H706c-3.3 0-6-2.7-6-6s2.7-6 6-6h188c3.3 0 6 2.7 6 6s-2.7 6-6 6zM194 456H6c-3.3 0-6-2.7-6-6s2.7-6 6-6h188c3.3 0 6 2.7 6 6s-2.7 6-6 6zM450 900c-3.3 0-6-2.7-6-6V706c0-3.3 2.7-6 6-6s6 2.7 6 6v188c0 3.3-2.7 6-6 6zM450 200c-3.3 0-6-2.7-6-6V6c0-3.3 2.7-6 6-6s6 2.7 6 6v188c0 3.3-2.7 6-6 6z'
        />
      </g>
      <g id='medium_x5F_rays'>
        <path
          ref={mediumRaysRef}
          className='wi01d0'
          d='M750.5 158 635.3 273.2c-2.3 2.3-6.1 2.3-8.5 0-2.3-2.3-2.3-6.1 0-8.5L742 149.5c2.3-2.3 6.1-2.3 8.5 0 2.4 2.3 2.4 6.1 0 8.5zM273.2 635.3 158 750.5c-2.3 2.3-6.1 2.3-8.5 0-2.3-2.3-2.3-6.1 0-8.5l115.3-115.3c2.3-2.3 6.1-2.3 8.5 0 2.3 2.4 2.3 6.2-.1 8.6zM750.5 750.5c-2.3 2.3-6.1 2.3-8.5 0L626.8 635.3c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0L750.5 742c2.4 2.4 2.4 6.2 0 8.5zM273.2 273.2c-2.3 2.3-6.1 2.3-8.5 0L149.5 158c-2.3-2.3-2.3-6.1 0-8.5 2.3-2.3 6.1-2.3 8.5 0l115.3 115.3c2.3 2.3 2.3 6.1-.1 8.4z'
        />
      </g>
      <g id='small_x5F_rays'>
        <path
          ref={smallRaysRef}
          className='wi01d0'
          d='m817.1 302.8-130.3 54c-2.3 1-4.9-.1-5.9-2.4s.1-4.9 2.4-5.9l130.3-54c2.3-1 4.9.1 5.9 2.4s-.1 5-2.4 5.9zM216.6 551.6l-130.3 54c-2.3 1-4.9-.1-5.9-2.4s.1-4.9 2.4-5.9l130.3-54c2.3-1 4.9.1 5.9 2.4s-.1 4.9-2.4 5.9zM603.1 819.6c-2.3 1-4.9-.1-5.9-2.4l-54-130.3c-1-2.3.1-4.9 2.4-5.9s4.9.1 5.9 2.4l54 130.3c1 2.3-.1 4.9-2.4 5.9zM354.3 219c-2.3 1-4.9-.1-5.9-2.4l-54-130.3c-1-2.3.1-4.9 2.4-5.9s4.9.1 5.9 2.4l54 130.3c1 2.3-.1 5-2.4 5.9zM813.7 605.5l-130.3-54c-2.3-1-3.4-3.6-2.4-5.9 1-2.3 3.6-3.4 5.9-2.4l130.3 54c2.3 1 3.4 3.6 2.4 5.9-1 2.3-3.6 3.4-5.9 2.4zM213.2 356.8l-130.3-54c-2.3-1-3.4-3.6-2.4-5.9 1-2.3 3.6-3.4 5.9-2.4l130.3 54c2.3 1 3.4 3.6 2.4 5.9-1 2.2-3.7 3.3-5.9 2.4zM296.9 819.6c-2.3-1-3.4-3.6-2.4-5.9l54-130.3c1-2.3 3.6-3.4 5.9-2.4 2.3 1 3.4 3.6 2.4 5.9l-54 130.3c-.9 2.2-3.6 3.3-5.9 2.4zM545.7 219c-2.3-1-3.4-3.6-2.4-5.9l54-130.3c1-2.3 3.6-3.4 5.9-2.4 2.3 1 3.4 3.6 2.4 5.9l-54 130.3c-1 2.3-3.6 3.4-5.9 2.4z'
        />
      </g>
    </svg>
  );
};

export default WeatherIcon01d;
