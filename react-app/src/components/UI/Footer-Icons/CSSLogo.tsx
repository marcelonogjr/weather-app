import { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';
import styles from './CSSLogo.module.css';

const CSSLogo = () => {
  const { theme } = useContext(ThemeContext);

  const genericColor = theme === 'light' ? '#000' : '#fff';

  return (
    <a
      className={styles['css_logo-link']}
      target='_blank'
      rel='noopener noreferrer'
      href='https://developer.mozilla.org/en-US/docs/Web/CSS'
    >
      <svg
        id={styles['css_logo-svg']}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 290.2 409.6'
      >
        <title>{'CSS3 (link)'}</title>
        <style>{`.csst2{fill:#ebebeb}.csst3{fill:${genericColor}}`}</style>
        <g id='layer1' transform='translate(-193.633 -276.362)'>
          <g id='g3013' transform='translate(119 276.362)'>
            <path
              id='polygon2989'
              style={{
                fill: '#264de4',
              }}
              d='m364.8 80.5-26.4 296.2-118.9 32.9L101 376.7 74.6 80.5z'
            />
            <path
              id='polygon2991'
              style={{
                fill: '#2965f1',
              }}
              d='m315.8 357.8 22.5-253.1H219.7v279.7z'
            />
            <path
              id='polygon2993'
              className='csst2'
              d='m135.2 214.6 3.2 36.3h81.3v-36.3z'
            />
            <path
              id='polygon2995'
              className='csst2'
              d='M219.7 141h-91.1l3.3 36.4h87.8z'
            />
            <path
              id='polygon2997'
              className='csst2'
              d='M219.7 346.7v-37.8l-.1.1-40.5-11-2.6-28.9H140.1l5 57 74.5 20.7z'
            />
            <path
              id='path2999'
              className='csst3'
              d='M142.9 0h44v18.4h-25.6v18.4h25.6v18.4h-44V0z'
            />
            <path
              id='path3001'
              className='csst3'
              d='M195.7 0h44v16h-25.6v3.2h25.6V56h-44V39.2h25.6V36h-25.6V0z'
            />
            <path
              id='path3003'
              className='csst3'
              d='M248.5 0h44v16h-25.6v3.2h25.6V56h-44V39.2h25.6V36h-25.6V0z'
            />
            <path
              id='polygon3005'
              style={{
                fill: '#fff',
              }}
              d='m264.3 250.9-4.2 47.1-40.5 11v37.7l74.5-20.6.5-6.1 8.6-95.7.8-9.7 6.6-73.6h-91v36.4h51.2l-3.3 37.2h-47.9v36.3z'
            />
          </g>
        </g>
      </svg>
    </a>
  );
};

export default CSSLogo;
