import { useContext, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import ThemeContext from '../../store/theme-context';
import styles from './ThemeButton.module.css';

const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const newViewbox = `0 ${theme === 'light' ? '0' : '1000'} 1000 1000`;
    
    gsap.to(svgRef.current, {
      duration: 1,
      rotation: "+=360",
      attr: {viewBox: newViewbox},
      transform: `scale(${theme === 'light' ? '1' : '1.3'})`,
      ease: 'power3.inOut'
    });
  }, [theme])

  const ThemeIcon = () => {
    return (
      <svg
        ref={svgRef}
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 1000 1000`}
        width={'30'}
        height={'30'}
        // style={{ }}
      >
        <style>{`.st10{fill:#fffbca} .st11{fill:none}`}</style>
        <radialGradient
          id='SVGID_1_'
          cx={499.99}
          cy={500.209}
          r={347.168}
          fx={445.491}
          fy={479.389}
          gradientTransform='matrix(.9992 0 0 -.9992 .41 999.809)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.133}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.37}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.475}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.554}
            style={{
              stopColor: '#f1911a',
            }}
          />
          <stop
            offset={0.62}
            style={{
              stopColor: '#f17f17',
            }}
          />
          <stop
            offset={0.678}
            style={{
              stopColor: '#f06813',
            }}
          />
          <stop
            offset={0.73}
            style={{
              stopColor: '#ef4b0d',
            }}
          />
          <stop
            offset={0.777}
            style={{
              stopColor: '#ee2907',
            }}
          />
          <stop
            offset={0.82}
            style={{
              stopColor: '#ed0301',
            }}
          />
          <stop
            offset={0.823}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <circle
          cx={500}
          cy={500}
          r={250}
          style={{
            fill: 'url(#SVGID_1_)',
            stroke: 'none',
          }}
        />
        <radialGradient
          id='SVGID_2_'
          cx={890.756}
          cy={499.995}
          r={104.419}
          fx={789.443}
          fy={499.995}
          gradientTransform='scale(1 -1) rotate(-45 -707.102 -.005)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='m802.1 837.5-87-87c-9.2-9.2-9.2-24 0-33.2l2.2-2.2c9.2-9.2 24-9.2 33.2 0l87 87c9.2 9.2 9.2 24 0 33.2l-2.2 2.2c-9.2 9.1-24 9.1-33.2 0z'
          style={{
            fill: 'url(#SVGID_2_)',
          }}
        />
        <radialGradient
          id='SVGID_3_'
          cx={890.75}
          cy={500}
          r={104.424}
          fx={789.433}
          fy={500}
          gradientTransform='matrix(0 1 1 0 0 0)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='M475 952.3V829.2c0-13 10.5-23.4 23.4-23.4h3.1c13 0 23.4 10.5 23.4 23.4v123.1c0 13-10.5 23.4-23.4 23.4h-3.1c-12.9 0-23.4-10.5-23.4-23.4z'
          style={{
            fill: 'url(#SVGID_3_)',
          }}
        />
        <radialGradient
          id='SVGID_4_'
          cx={890.756}
          cy={499.995}
          r={104.419}
          fx={789.443}
          fy={499.995}
          gradientTransform='scale(-1 1) rotate(45 -.012 -707.118)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='m162.5 802.1 87-87c9.2-9.2 24-9.2 33.2 0l2.2 2.2c9.2 9.2 9.2 24 0 33.2l-87 87c-9.2 9.2-24 9.2-33.2 0l-2.2-2.2c-9.1-9.2-9.1-24 0-33.2z'
          style={{
            fill: 'url(#SVGID_4_)',
          }}
        />
        <radialGradient
          id='SVGID_5_'
          cx={890.75}
          cy={500}
          r={104.424}
          fx={789.433}
          fy={500}
          gradientTransform='matrix(-1 0 0 1 1000 0)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='M47.7 475h123.1c13 0 23.4 10.5 23.4 23.4v3.1c0 13-10.5 23.4-23.4 23.4H47.7c-13 0-23.4-10.5-23.4-23.4v-3.1c0-12.9 10.5-23.4 23.4-23.4z'
          style={{
            fill: 'url(#SVGID_5_)',
          }}
        />
        <radialGradient
          id='SVGID_6_'
          cx={890.756}
          cy={499.995}
          r={104.419}
          fx={789.443}
          fy={499.995}
          gradientTransform='scale(-1 1) rotate(-45 .012 1707.118)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='m197.9 162.5 87 87c9.2 9.2 9.2 24 0 33.2l-2.2 2.2c-9.2 9.2-24 9.2-33.2 0l-87-87c-9.2-9.2-9.2-24 0-33.2l2.2-2.2c9.2-9.1 24-9.1 33.2 0z'
          style={{
            fill: 'url(#SVGID_6_)',
          }}
        />
        <radialGradient
          id='SVGID_7_'
          cx={890.75}
          cy={500}
          r={104.424}
          fx={789.433}
          fy={500}
          gradientTransform='matrix(0 -1 -1 0 1000 1000)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='M525 47.7v123.1c0 13-10.5 23.4-23.4 23.4h-3.1c-13 0-23.4-10.5-23.4-23.4V47.7c0-13 10.5-23.4 23.4-23.4h3.1c12.9 0 23.4 10.5 23.4 23.4z'
          style={{
            fill: 'url(#SVGID_7_)',
          }}
        />
        <radialGradient
          id='SVGID_8_'
          cx={890.756}
          cy={499.995}
          r={104.419}
          fx={789.443}
          fy={499.995}
          gradientTransform='scale(1 -1) rotate(45 1707.112 -.005)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='m837.5 197.9-87 87c-9.2 9.2-24 9.2-33.2 0l-2.2-2.2c-9.2-9.2-9.2-24 0-33.2l87-87c9.2-9.2 24-9.2 33.2 0l2.2 2.2c9.1 9.2 9.1 24 0 33.2z'
          style={{
            fill: 'url(#SVGID_8_)',
          }}
        />
        <radialGradient
          id='SVGID_9_'
          cx={890.75}
          cy={500}
          r={104.424}
          fx={789.433}
          fy={500}
          gradientTransform='matrix(1 0 0 -1 0 1000)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0.068}
            style={{
              stopColor: '#f2a71e',
            }}
          />
          <stop
            offset={0.446}
            style={{
              stopColor: '#f2a51e',
            }}
          />
          <stop
            offset={0.582}
            style={{
              stopColor: '#f29e1c',
            }}
          />
          <stop
            offset={0.679}
            style={{
              stopColor: '#f1931a',
            }}
          />
          <stop
            offset={0.758}
            style={{
              stopColor: '#f18217',
            }}
          />
          <stop
            offset={0.825}
            style={{
              stopColor: '#f06c13',
            }}
          />
          <stop
            offset={0.885}
            style={{
              stopColor: '#ef500e',
            }}
          />
          <stop
            offset={0.939}
            style={{
              stopColor: '#ee3009',
            }}
          />
          <stop
            offset={0.987}
            style={{
              stopColor: '#ed0c02',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#ed0000',
            }}
          />
        </radialGradient>
        <path
          d='M952.3 525H829.2c-13 0-23.4-10.5-23.4-23.4v-3.1c0-13 10.5-23.4 23.4-23.4h123.1c13 0 23.4 10.5 23.4 23.4v3.1c0 12.9-10.5 23.4-23.4 23.4z'
          style={{
            fill: 'url(#SVGID_9_)',
          }}
        />
        <path
          d='M688.2 1662.1c-45.8 55.6-115.3 91.1-193 91.1-138.1 0-250-111.9-250-250 0-122.9 88.6-225 205.4-246-35.6 43.2-57 98.6-57 158.9 0 138.1 111.9 250 250 250 15.3 0 30.2-1.4 44.6-4z'
          style={{
            fill: '#fffbca',
          }}
        />
        <path
          className='st10'
          d='M567.8 1334.7h-9.3c0 9.1-7.4 16.5-16.5 16.5v9.3c9.1 0 16.5 7.4 16.5 16.5h9.3c0-9.1 7.4-16.5 16.5-16.5v-9.3c-9.1 0-16.5-7.4-16.5-16.5zm-4.6 27.5c-1.7-2.5-3.9-4.6-6.4-6.4 2.5-1.7 4.6-3.9 6.4-6.4 1.7 2.5 3.9 4.6 6.4 6.4-2.5 1.8-4.7 3.9-6.4 6.4z'
        />
        <path
          className='st11'
          d='M569.5 1355.8c-2.5 1.7-4.6 3.9-6.4 6.4-1.7-2.5-3.9-4.6-6.4-6.4 2.5-1.7 4.6-3.9 6.4-6.4 1.8 2.5 4 4.7 6.4 6.4z'
        />
        <path
          className='st10'
          d='M542 1395.7h-9.3c0 20.7-16.8 37.6-37.6 37.6v9.3c20.7 0 37.6 16.8 37.6 37.6h9.3c0-20.7 16.8-37.6 37.6-37.6v-9.3c-20.7-.1-37.6-16.9-37.6-37.6zm-4.6 64.1c-4.6-9.5-12.4-17.3-21.9-21.9 9.5-4.6 17.3-12.4 21.9-21.9 4.6 9.5 12.3 17.3 21.9 21.9-9.6 4.6-17.3 12.3-21.9 21.9z'
        />
        <path
          className='st11'
          d='M559.3 1437.9c-9.5 4.6-17.3 12.3-21.9 21.9-4.6-9.5-12.4-17.3-21.9-21.9 9.5-4.6 17.3-12.4 21.9-21.9 4.6 9.5 12.3 17.3 21.9 21.9z'
        />
        <path
          className='st10'
          d='M776.4 1334.7h-9.3c0 10.4-8.4 18.8-18.8 18.8v9.3c10.4 0 18.8 8.4 18.8 18.8h9.3c0-10.4 8.4-18.8 18.8-18.8v-9.3c-10.4.1-18.8-8.4-18.8-18.8zm-4.6 31.5c-2.1-3.2-4.8-5.9-8-8 3.2-2.1 5.9-4.8 8-8 2.1 3.2 4.8 5.9 8 8-3.2 2.1-6 4.8-8 8z'
        />
        <circle className='st11' cx={771.8} cy={1358.2} r={8} />
        <path
          className='st10'
          d='M663.9 1358.2h-9.3c0 10.4-8.4 18.8-18.8 18.8v9.3c10.4 0 18.8 8.4 18.8 18.8h9.3c0-10.4 8.4-18.8 18.8-18.8v-9.3c-10.4 0-18.8-8.4-18.8-18.8zm-4.7 31.4c-2.1-3.2-4.8-5.9-8-8 3.2-2.1 5.9-4.8 8-8 2.1 3.2 4.8 5.9 8 8-3.1 2.1-5.9 4.9-8 8z'
        />
        <circle className='st11' cx={659.2} cy={1381.6} r={8} />
        <path
          className='st10'
          d='M523.3 1241H514c0 10.4-8.4 18.8-18.8 18.8v9.3c10.4 0 18.8 8.4 18.8 18.8h9.3c0-10.4 8.4-18.8 18.8-18.8v-9.3c-10.4 0-18.8-8.5-18.8-18.8zm-4.7 31.4c-2.1-3.2-4.8-5.9-8-8 3.2-2.1 5.9-4.8 8-8 2.1 3.2 4.8 5.9 8 8-3.1 2.1-5.9 4.8-8 8z'
        />
        <circle
          transform='rotate(-22.5 518.602 1264.345)'
          className='st11'
          cx={518.6}
          cy={1264.4}
          r={8}
        />
        <path
          className='st10'
          d='M710.8 1236.3h-9.3c0 10.4-8.4 18.8-18.8 18.8v9.3c10.4 0 18.8 8.4 18.8 18.8h9.3c0-10.4 8.4-18.8 18.8-18.8v-9.3c-10.4 0-18.8-8.4-18.8-18.8zm-4.7 31.5c-2.1-3.2-4.8-5.9-8-8 3.2-2.1 5.9-4.8 8-8 2.1 3.2 4.8 5.9 8 8-3.1 2-5.9 4.8-8 8z'
        />
        <circle className='st11' cx={706.1} cy={1259.7} r={8} />
        <path
          className='st10'
          d='M603 1489.4h-9.3c0 10.4-8.4 18.8-18.8 18.8v9.3c10.4 0 18.8 8.4 18.8 18.8h9.3c0-10.4 8.4-18.8 18.8-18.8v-9.3c-10.4 0-18.8-8.4-18.8-18.8zm-4.7 31.5c-2.1-3.2-4.8-5.9-8-8 3.2-2.1 5.9-4.8 8-8 2.1 3.2 4.8 5.9 8 8-3.1 2.1-5.9 4.8-8 8z'
        />
        <circle className='st11' cx={598.3} cy={1512.9} r={8} />
        <path
          className='st10'
          d='M706.1 1405.1h-9.3c0 33.6-27.4 61-61 61v9.3c33.6 0 61 27.4 61 61h9.3c0-33.6 27.4-61 61-61v-9.3c-33.7 0-61-27.4-61-61zm-4.7 106.1c-7.1-18.6-22-33.4-40.5-40.5 18.6-7.1 33.4-22 40.5-40.5 7.1 18.6 22 33.4 40.5 40.5-18.5 7.1-33.3 21.9-40.5 40.5z'
        />
        <path
          className='st11'
          d='M742 1470.7c-18.6 7.1-33.4 21.9-40.5 40.5-7.1-18.6-22-33.4-40.5-40.5 18.6-7.1 33.4-22 40.5-40.5 7.1 18.5 21.9 33.4 40.5 40.5z'
        />
        <path
          className='st10'
          d='M603 1241h-9.3c0 25.9-21.1 46.9-46.9 46.9v9.2c25.9 0 46.9 21.1 46.9 46.9h9.3c0-25.9 21-46.9 46.9-46.9v-9.2c-25.9 0-46.9-21-46.9-46.9zm-4.7 80.8c-5.7-13.1-16.2-23.6-29.2-29.2 13-5.7 23.5-16.2 29.2-29.2 5.7 13 16.2 23.5 29.2 29.2-13 5.6-23.5 16.1-29.2 29.2z'
        />
        <path
          className='st11'
          d='M627.5 1292.6c-13 5.7-23.5 16.2-29.2 29.2-5.7-13.1-16.2-23.6-29.2-29.2 13-5.7 23.5-16.2 29.2-29.2 5.7 13 16.2 23.5 29.2 29.2z'
        />
      </svg>
    );
  };

  const changeThemeHandler = () => {
    if (theme === 'light') {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  };

  return (
    <button className={styles['theme-button']} onClick={changeThemeHandler}>
      {ThemeIcon()}
    </button>
  );
};

export default ThemeButton;
