import React, { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';
import styles from './HumidityIcon.module.css';

type SvgHumidityIconProps = {
  humidityValue: number;
  component: 'current' | 'hourly' | 'daily';
};

const SvgHumidityIcon = (props: SvgHumidityIconProps) => {
  const { theme } = useContext(ThemeContext);

  const svgHumidity = (humidityValue: number, component: string) => {
    const lightThemeOutlineColor = '#000';
    const darkThemeOutlineColor = '#fff';

    // const widhtValue = component === 'current' ? '60' : '30';
    // const heightValue = component === 'current' ? '60' : '30';

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 376.1 525'
        className={styles[`humidity-icon_${component}`]}
      >
        <title>{`Humidity: ${humidityValue}%`}</title>
        <defs>
          <path
            id='a1'
            d='M246.7 90.8c-24.6-35.3-45.8-65.8-51-80.4-1.1-3.2-4.1-5.4-7.6-5.4-3.1.1-6.5 2-7.7 5.2C175.2 24 155 53 131.7 86.5 78.2 163.3 5 268.5 5 336.9c0 100.9 82.1 183 183 183s183-82.1 183-183c.1-67.3-71.8-170.6-124.3-246.1z'
          />
        </defs>
        <clipPath id='b1'>
          <use
            xlinkHref='#a1'
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
        <path
          style={{
            clipPath: 'url(#b1)',
            fill: '#3385e4',
          }}
          d={`M0 ${(525 * (100 - humidityValue)) / 100}h376.1V525H0z`}
        />
        <path
          d='M246.7 90.8c-24.6-35.3-45.8-65.8-51-80.4-1.1-3.2-4.1-5.4-7.6-5.4-3.1.1-6.5 2-7.7 5.2C175.2 24 155 53 131.7 86.5 78.2 163.3 5 268.5 5 336.9c0 100.9 82.1 183 183 183s183-82.1 183-183c.1-67.3-71.8-170.6-124.3-246.1z'
          style={{
            fill: 'none',
            stroke: `${
              theme !== 'dark' ? lightThemeOutlineColor : darkThemeOutlineColor
            }`,
            strokeWidth: 10,
            strokeMiterlimit: 10,
          }}
        />
      </svg>
    );
  };

  return (
    <div className={styles['humidity-bundle']}>
      <p className={styles[`humidity-description_${props.component}`]}>{props.humidityValue}%</p>
      {svgHumidity(props.humidityValue, props.component)}
    </div>
  );
};

export default SvgHumidityIcon;
