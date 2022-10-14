import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';

import styles from './WeatherFormIcons.module.css';

const WeatherFormZoomIcons = (props: {
  zoomType: 'Close' | 'Medium' | 'Far Away';
  currentlySelected: 'small' | 'medium' | 'large';
}) => {
  const { theme } = useContext(ThemeContext);

  const selectedIcon = () => {
    if (
      (props.zoomType === 'Close' && props.currentlySelected === 'small') ||
      (props.zoomType === 'Medium' && props.currentlySelected === 'medium') ||
      (props.zoomType === 'Far Away' && props.currentlySelected === 'large')
    ) {
      return true;
    } else {
      return false;
    }
  };

  // const genericColor = theme === 'light' ? '#1d1d1d' : '#fff';
  // const backgroundNotSelectedColor = theme === 'light' ? '#b0e7ff' : '#454545';
  // const backgroundSelectedColor = theme === 'light' ? '#fff' : '#1d1d1d';
  const genericNotSelectedColor = theme === 'light' ? '#1d1d1d' : '#fff';
  const genericSelectedColor = theme === 'light' ? '#fff' : '#1d1d1d';
  const backgroundNotSelectedColor = theme === 'light' ? '#fff' : '#1d1d1d';
  const backgroundSelectedColor = theme === 'light' ? '#1d1d1d' : '#fff';
  const backgroundColor = selectedIcon()
    ? backgroundSelectedColor
    : backgroundNotSelectedColor;
  const genericColor = selectedIcon()
    ? genericSelectedColor
    : genericNotSelectedColor;

  return (
    <svg
      className={styles[`icons-svg`]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
    >
      <title>{`Zoom: ${props.zoomType}`}</title>
      <path
        style={{
          fill: `${backgroundColor}`,
        }}
        d='m6.9 74.3.5-49.4L50.5.6l42.6 25.1-.5 49.4-43.1 24.3z'
      />
      <path
        style={{
          fill: `${genericColor}`,
        }}
        d='m50.5 1.2 42 24.8-.5 48.8-42.5 24L7.5 74 8 25.2l42.5-24m0-1.2L7 24.6l-.5 50 43 25.4L93 75.4l.5-50L50.5 0z'
      />
      {props.zoomType === 'Far Away' && (
        <path
          style={{
            fill: `${genericColor}`,
          }}
          d='m30.6 71.3-3.2-4.6-3.3 4.6h-5.7l6-7.8-5.4-7.1h5.7l2.8 4 2.8-4h5.5l-5.4 7.1 5.9 7.8h-5.7zM56.2 71.3V34.9L47 42l-6.1-8.3 16.3-12H68v49.6H56.2z'
        />
      )}
      {props.zoomType === 'Medium' && (
        <path
          style={{
            fill: `${genericColor}`,
          }}
          d='m30.6 71.3-3.2-4.6-3.3 4.6h-5.7l6-7.8-5.4-7.1h5.7l2.8 4 2.8-4h5.5l-5.4 7.1 5.9 7.8h-5.7zM41.1 71.3v-9.8L60.4 44c2.5-2.3 4.1-4.6 4.1-7.6 0-3.5-2.5-6-6.2-6-3.9 0-6.5 3.1-7 7.5L40 36.4c1.1-10 9.2-16 18.9-16 9.1 0 17.9 4.8 17.9 15.2 0 7.1-4.1 11.2-8.7 15.3L56.7 61.1h20.2v10.2H41.1z'
        />
      )}
      {props.zoomType === 'Close' && (
        <path
          style={{
            fill: `${genericColor}`,
          }}
          d='m30.6 71.3-3.2-4.6-3.3 4.6h-5.7l6-7.8-5.4-7.1h5.7l2.8 4 2.8-4h5.5l-5.4 7.1 5.9 7.8h-5.7zM58.5 72.7c-9 0-17.2-3.9-19.9-13.2l10.9-2.9c.9 3.3 3.9 6.2 8.4 6.2 3.4 0 7.2-1.7 7.2-6.3 0-5-5.2-6.5-10.1-6.5h-3.2v-8.6h3.4c4.4 0 8.7-1.1 8.7-5.9 0-3.6-3-5.5-6.2-5.5-3.4 0-6 2.2-6.8 5.5L40 33c2.4-8.3 10.2-12.6 18.5-12.6 8.8 0 17.4 4.5 17.4 14 0 5.5-3.5 9.5-8.3 10.8v.2c5.6 1.3 9.5 6 9.5 11.5.1 10.9-9.5 15.8-18.6 15.8z'
        />
      )}
    </svg>
  );
};

export default WeatherFormZoomIcons;
