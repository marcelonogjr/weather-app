import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';

import styles from './WeatherFormIcons.module.css';

const WeatherFormLayerIcons = (props: {
  layerType:
    | 'Clouds'
    | 'Precipitation'
    | 'Sea Level Pressure'
    | 'Wind Speed'
    | 'Temperature';
  currentlySelected:
    | 'clouds'
    | 'precipitation'
    | 'pressure'
    | 'wind'
    | 'temperature';
}) => {
  const { theme } = useContext(ThemeContext);

  const selectedIcon = () => {
    if (
      (props.layerType === 'Clouds' && props.currentlySelected === 'clouds') ||
      (props.layerType === 'Precipitation' &&
        props.currentlySelected === 'precipitation') ||
      (props.layerType === 'Sea Level Pressure' &&
        props.currentlySelected === 'pressure') ||
      (props.layerType === 'Wind Speed' &&
        props.currentlySelected === 'wind') ||
      (props.layerType === 'Temperature' &&
        props.currentlySelected === 'temperature')
    ) {
      return true;
    } else {
      return false;
    }
  };

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
      <title>{`Layer: ${props.layerType}`}</title>
      <circle
        style={{
          fill: `${backgroundColor}`,
        }}
        cx={50}
        cy={50}
        r={49.5}
      />
      <path
        style={{
          fill: `${genericColor}`,
        }}
        d='M50 2c26.5 0 48 21.5 48 48S76.5 98 50 98 2 76.5 2 50 23.5 2 50 2m0-2C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0z'
      />
      {props.layerType === 'Wind Speed' && (
        <>
          <path
            style={{
              fill: `none`,
              stroke: `${genericColor}`,
              strokeWidth: 5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M7.5 50H85c.5 0 1.1 0 1.8-.2 3.2-.9 6.2-4.6 5.9-8.8-.3-4.3-4.1-8.2-8.8-8.1-4.7.1-8.6 4.3-8.4 9.2M54.9 68.1c-.2 5 3.7 9.2 8.4 9.3 4.7.1 8.5-3.8 8.8-8.2.3-4.2-2.7-8-5.9-8.9-.7-.3-1.3-.3-1.8-.3H26.8'
          />
          <path
            style={{
              fill: `none`,
              stroke: `${genericColor}`,
              strokeWidth: 5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M44.7 32.1c-.2-4.9 3.7-9.1 8.4-9.2 4.7-.1 8.5 3.8 8.8 8.1.3 4.2-2.7 7.9-5.9 8.8-.8.2-1.4.2-1.8.2H16.9'
          />
        </>
      )}
      {props.layerType === 'Temperature' && (
        <>
          <path
            d='M59 59.2v-42c0-5-4-9-9-9s-9 4-9 9v42c-5.1 3.1-8.5 8.6-8.5 15 0 9.7 7.8 17.5 17.5 17.5s17.5-7.8 17.5-17.5c0-6.4-3.4-12-8.5-15z'
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 3.723,
              strokeMiterlimit: 10,
            }}
          />
          <path
            style={{
              fill: `${genericColor}`,
            }}
            d='M53.5 63.2v-8.5c0-1.8-1.5-3.3-3.3-3.3h-.3c-1.8 0-3.3 1.5-3.3 3.3v8.5c-4.6 1.5-8 5.8-8 11 0 6.4 5.1 11.5 11.5 11.5s11.5-5.1 11.5-11.5c-.1-5.1-3.5-9.4-8.1-11z'
          />
          <path
            style={{
              fill: `${genericColor}`,
            }}
            d='M50.1 35c-1.9 0-3.5 1.5-3.5 3.4V58c0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4V38.5c.1-1.9-1.4-3.5-3.3-3.5z'
          />
          <path
            style={{
              fill: `none`,
              stroke: `${genericColor}`,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
              strokeWidth: 4,
            }}
            d='M60 19.4h6.7M60 27.4h6.7M60 35.4h6.7M60 43.4h6.7M60 51.4h6.7'
          />
        </>
      )}
      {props.layerType === 'Sea Level Pressure' && (
        <>
          <path
            style={{
              fill: `${genericColor}`,
            }}
            d='M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 77.5c-20.7 0-37.5-16.8-37.5-37.5S29.3 12.5 50 12.5 87.5 29.3 87.5 50 70.7 87.5 50 87.5z'
          />
          <circle
            style={{
              fill: `${genericColor}`,
            }}
            cx={50}
            cy={50}
            r={3.3}
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeMiterlimit: 10,
            }}
            d='m28.9 71.3 9.4-9.4c-3.1-3-5-7.2-5-11.9 0-9.2 7.5-16.7 16.7-16.7S66.7 40.8 66.7 50c0 4.6-1.9 8.8-5 11.9l9.4 9.4c5.5-5.4 8.9-13 8.9-21.3 0-16.6-13.4-30-30-30S20 33.4 20 50c0 8.3 3.4 15.9 8.9 21.3z'
          />
          <path
            style={{
              fill: `${genericColor}`,
            }}
            d='m74.7 33-10.9 7.6c1.8 2.7 2.9 5.9 2.9 9.4 0 4.6-1.9 8.8-5 11.9l9.4 9.4c5.5-5.4 8.9-13 8.9-21.3 0-6.3-2-12.2-5.3-17z'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m56.9 24.2.9-3.2'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.75,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M50 25v-5'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m43.1 24.2-.9-3.2'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.75,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M37.5 28.3 35 24'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m31.1 31.1-2.3-2.3'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.75,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M62.5 28.3 65 24'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m68.9 31.1 2.3-2.3M21 57.8l3.2-.9'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.75,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M28.3 37.5 24 35M25 50h-5'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m24.2 43.1-3.2-.9'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${genericColor}`,
              strokeWidth: 0.75,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m24 65 4.3-2.5'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${backgroundColor}`,
              strokeWidth: 0.75,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='M71.7 37.5 76 35M76 65l-4.3-2.5M80 50h-5'
          />
          <path
            style={{
              fill: 'none',
              stroke: `${backgroundColor}`,
              strokeWidth: 0.5,
              strokeMiterlimit: 10,
              strokeLinecap: 'round',
            }}
            d='m79 57.8-3.2-.9M75.8 43.1l3.2-.9'
          />
          <path
            style={{
              fill: `${genericColor}`,
            }}
            d='m62.3 24.1-.4-.1c-.3-.1-.6 0-.7.3L49.6 49.2c-.1.3 0 .6.3.7l.3.2c.3.1.6 0 .7-.3l11.6-24.9c.2-.3.1-.7-.2-.8z'
          />
        </>
      )}
      {props.layerType === 'Precipitation' && (
        <path
          style={{
            fill: 'none',
            stroke: `${genericColor}`,
            strokeWidth: 4,
            strokeMiterlimit: 10,
          }}
          d='M82.7 41.9c0 5.3-4.2 9.4-9.4 9.4H29.8c-7 0-12.5-5.7-12.5-12.5 0-7 5.7-12.7 12.5-12.7h1.3c-.2-.9-.2-1.8-.2-2.6C30.9 15.9 37 10 44.5 10c6.8 0 12.5 5.1 13.4 11.6 1.3-.7 2.6-1.1 4.2-1.1 5.1 0 9 4 9 9 0 1.1-.2 2.2-.7 3.3.9-.2 1.8-.4 2.9-.4 5 0 9.4 4.2 9.4 9.5zM36.5 71.3c1.1-2.2 1.3-11.9 1.3-11.9s-7.9 5.7-9 7.9c-1.1 2.2-.2 4.8 2 5.9 2 1.2 4.6.3 5.7-1.9zM52.8 71.3c1.1-2.2 1.3-11.9 1.3-11.9s-7.9 5.7-9 7.9c-1.1 2.2-.2 4.8 2 5.9 1.9 1.2 4.6.3 5.7-1.9zM62.4 67.3c-1.1 2.2-.2 4.8 2 5.9 2.2 1.1 4.8.2 5.9-2 1.1-2.2 1.3-11.9 1.3-11.9s-8.1 5.8-9.2 8zM32.6 83.6c-1.1 2.2-.2 4.8 2 5.9s4.8.2 5.9-2c1.1-2.2 1.3-11.9 1.3-11.9s-8.1 5.8-9.2 8zM48.8 83.6c-1.1 2.2-.2 4.8 2 5.9 2.2 1.1 4.8.2 5.9-2S58 75.7 58 75.7s-8.1 5.7-9.2 7.9z'
        />
      )}
      {props.layerType === 'Clouds' && (
        <path
          d='M90 58.7c0 6.4-5.1 11.5-11.5 11.5H25.3c-8.6 0-15.3-7-15.3-15.3 0-8.6 7-15.6 15.3-15.6h1.6c0-.8-.3-2.1-.3-3.2 0-9.1 7.5-16.4 16.6-16.4 8.3 0 15.3 6.2 16.4 14.5 1.6-.8 3.2-1.3 5.1-1.3 6.2 0 11 4.8 11 11 0 1.3-.3 2.7-.8 4 1.1-.3 2.1-.5 3.5-.5 6.2 0 11.6 5.1 11.6 11.3z'
          style={{
            // opacity: 0.5,
            fill: `${genericColor}`,
            stroke: `${genericColor}`,
            strokeMiterlimit: 10,
          }}
        />
      )}
    </svg>
  );
};

export default WeatherFormLayerIcons;
