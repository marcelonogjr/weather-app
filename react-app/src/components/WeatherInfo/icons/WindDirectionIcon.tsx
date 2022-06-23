import styles from './WindDirectionIcon.module.css';

type SvgWindDirectionIconProps = {
  windDirection: number;
};

const SvgWindDirectionIcon = (props: SvgWindDirectionIconProps) => {
  const abbreviatedDirection = (windDirection: number) => {
    // windDirection = 340;
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
    const theme = 'dark';

    const lightThemeOutlineColor = '#000';
    const darkThemeOutlineColor = '#fff';

    const widhtValue = '20';
    const heightValue = '20';

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 326.1 429.1'
        width={widhtValue}
        height={heightValue}
        style={{
          margin: 'auto 2px',
          padding: '2px',
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
              theme === 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
            }`,
            stroke: `${
              theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
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
    <div className={styles['wind_direction-bundle']}>
      <p>{abbreviatedDirection(props.windDirection)}</p>
      {svgWindDirection(props.windDirection)}
    </div>
  );
};

export default SvgWindDirectionIcon;
