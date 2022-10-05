import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import styles from './WeatherIcons.module.css';
import ThemeContext from '../../../../store/theme-context';

const WeatherIcon11 = (props: { description: string }) => {
  const lightningRef = useRef<SVGPathElement>(null);
  const lightCloudRef = useRef<SVGCircleElement>(null);
  const darkCloudRef = useRef<SVGCircleElement>(null);
  const lightningTimeline = useRef<GSAPTimeline>();

  const { theme } = useContext(ThemeContext);

  const lightCloudPulsingColor = theme === 'light' ? '#b0e7ff' : '#fff';
  const lightCloudColor = theme === 'light' ? '#1d313f' : '#3a3a3a';
  const darkCloudColor = theme === 'light' ? '#3a3a3a' : '#1d313f';
  gsap.registerPlugin(CustomEase);

  useEffect(() => {
    lightningTimeline.current = gsap
      .timeline({ repeat: -1, repeatRefresh: true, repeatDelay: 2 })
      .to(lightningRef.current, {
        duration: 1,
        opacity: 1,
        delay: 1,
        ease: CustomEase.create(
          'custom',
          'M0,0,C0.022,0.05,0.095,0.441,0.138,0.561,0.202,0.742,0.22,0.808,0.276,1,0.378,1,0.288,1,0.376,1,0.416,1,0.418,-0.011,0.522,0,0.646,0.014,0.719,0.981,0.726,0.998,0.754,0.892,0.775,0.018,0.798,0.01,0.824,0,0.852,0.985,0.866,0.998,0.877,0.994,0.912,0.621,0.928,0.504,0.944,0.384,1,0,1,0'
        ),
      })
      .to(
        lightCloudRef.current,
        {
          duration: 1,
          fill: lightCloudPulsingColor,
          ease: CustomEase.create(
            'custom',
            'M0,0,C0.022,0.05,0.095,0.441,0.138,0.561,0.202,0.742,0.22,0.808,0.276,1,0.378,1,0.288,1,0.376,1,0.416,1,0.418,-0.011,0.522,0,0.646,0.014,0.719,0.981,0.726,0.998,0.754,0.892,0.775,0.018,0.798,0.01,0.824,0,0.852,0.985,0.866,0.998,0.877,0.994,0.912,0.621,0.928,0.504,0.944,0.384,1,0,1,0'
          ),
        },
        '>-1'
      )
      .to(lightningRef.current, {
        duration: 0.5,
        x: 'random(-50, 100)',
        y: 'random(-50, 50)',
        ease: CustomEase.create(
          'custom',
          'M0,0,C0.078,0,0.256,0,0.5,0,0.5,0,0.52,1,0.5,1,0.724,1,0.808,1,1,1'
        ),
        repeatRefresh: true,
      });

    const lightCloudAnimation = gsap.to([lightCloudRef.current, darkCloudRef.current], {
      duration: 10,
      x: 'random(-100, 100)',
      scale: 'random(0.8, 1)',
      ease: 'power1.inOut',
      repeat: -1,
      repeatRefresh: true,
    });


    return () => {
      lightCloudAnimation.kill();
      lightningTimeline.current && lightningTimeline.current.kill();
    };
  }, [lightCloudPulsingColor]);

  return (
    <svg
      id={styles['weather-09-svg']}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 939.4 1000'
    >
      <title>{props.description}</title>
      <path
        ref={darkCloudRef}
        d='M875 400.4c0 49.7-39.4 89.1-89.1 89.1H377.8c-66.3 0-118.1-53.9-118.1-118.1 0-66.3 53.9-120.2 118.1-120.2h12.4c-2.1-8.3-2.1-16.6-2.1-24.9 0-70.4 58-126.4 128.5-126.4 64.2 0 118.1 47.7 126.4 111.9 12.4-6.2 24.9-10.4 39.4-10.4 47.7 0 84.9 37.3 84.9 84.9 0 10.4-2.1 20.7-6.2 31.1 8.3-2.1 16.6-4.1 26.9-4.1 47.6.1 87 39.5 87 87.1z'
        style={{
          fill: `${darkCloudColor}`,
          scale: 1.2,
        }}
      />
      <path
        ref={lightCloudRef}
        d='M742.4 472.9c0 49.7-39.4 89.1-89.1 89.1H243.1C176.8 562 125 508.1 125 443.9c0-66.3 53.9-120.2 118.1-120.2h12.4c-2.1-8.3-2.1-16.6-2.1-24.9 0-70.4 58-126.4 128.5-126.4 64.2 0 118.1 47.7 126.4 109.8 12.4-6.2 24.9-10.4 39.4-10.4 47.7 0 84.9 37.3 84.9 84.9 0 10.4-2.1 20.7-6.2 31.1 8.3-2.1 16.6-4.1 26.9-4.1 47.7.1 89.1 39.5 89.1 89.2z'
        style={{
          fill: `${lightCloudColor}`,
          scale: 1.2,
        }}
      />
      <path
        ref={lightningRef}
        style={{
          fill: '#f1a71f',
          opacity: 0,
        }}
        d='m294.9 690.5 43.5-114h-49.7l132.6-153.3-41.5 116h47.7z'
      />
    </svg>
  );
};

export default WeatherIcon11;
