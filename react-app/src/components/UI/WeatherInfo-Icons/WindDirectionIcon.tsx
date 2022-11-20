import { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';
import styles from './WindDirectionIcon.module.css';

type SvgWindDirectionIconProps = {
  windDirection: number;
  component: 'current' | 'help';
};

const SvgWindDirectionIcon = (props: SvgWindDirectionIconProps) => {
  const { theme } = useContext(ThemeContext);

  const abbreviatedDirection = (windDirection: number) => {
    const directionCoeficient = Math.floor((windDirection - 22.5) / 45);

    if (windDirection < 22.5 || windDirection >= 337.5) {
      return 'N';
    } else if (directionCoeficient === 0) {
      return 'NE';
    } else if (directionCoeficient === 1) {
      return 'E';
    } else if (directionCoeficient === 2) {
      return 'SE';
    } else if (directionCoeficient === 3) {
      return 'S';
    } else if (directionCoeficient === 4) {
      return 'SW';
    } else if (directionCoeficient === 5) {
      return 'W';
    } else {
      return 'NW';
    }
  };

  const svgWindDirection = (windDirection: number) => {
    const lightThemeOutlineColor = '#000';
    const darkThemeOutlineColor = '#fff';

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 326.1 429.1'
        className={styles[`wind-${props.component}-svg`]}
        style={{
          transform: `rotate(${windDirection}deg)`,
        }}
      >
        <title>
          Wind Direction: {windDirection}° (
          {abbreviatedDirection(windDirection)})
        </title>
        <path
          d='M91.1 210.1C127.3 112.3 163 16 163 16s147.1 397.3 147 397.1L163 268.4 16 413.1s37.9-102.3 75.1-203z'
          style={{
            fill: `${
              theme === 'dark' ? lightThemeOutlineColor : darkThemeOutlineColor
            }`,
            stroke: `${
              theme !== 'dark' ? lightThemeOutlineColor : darkThemeOutlineColor
            }`,
            strokeWidth: 32,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />
      </svg>
    );
  };

  return (
    <div className={styles[`wind_direction-${props.component}-bundle`]}>
      <p>{abbreviatedDirection(props.windDirection)}</p>
      {svgWindDirection(props.windDirection)}
    </div>
  );
};

export default SvgWindDirectionIcon;
