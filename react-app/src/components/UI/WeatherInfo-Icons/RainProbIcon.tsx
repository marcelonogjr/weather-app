import { useContext } from 'react';

import ThemeContext from '../../../store/theme-context';
import styles from './RainProbIcon.module.css';

type SvgRainProbIconProps = {
  rainProbValue: number;
  component: 'current' | 'hourly' | 'daily' | 'help';
};

const SvgRainProbIcon = (props: SvgRainProbIconProps) => {
  const { theme } = useContext(ThemeContext);

  const rainProb = (rainProbValue: number) => {
    const cloudColor = theme === 'light' ? '#3385e4' : '#fff';

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 76.5 100'
        className={styles[`rain-prob-icon_${props.component}`]}
      >
        <title>Rain probability: {rainProbValue}%</title>
        <style>{`.rainprob0{fill:${cloudColor}}`}</style>
        <path
          className='rainprob0'
          d='M15.9 19.5c-2.7 5.4-.5 11.9 4.9 14.6s11.9.5 14.6-4.9C38.1 23.8 38.6 0 38.6 0s-20 14.1-22.7 19.5zM72.7 66.5c3.1-6.3 3.8-34.1 3.8-34.1s-22.8 16.4-26 22.7-.6 13.9 5.7 17.1c5.7 3.1 13.3.6 16.5-5.7zM1.9 73.7c-4.5 9-.9 19.9 8.1 24.4s19.9.9 24.4-8.1 5.4-48.8 5.4-48.8S6.5 64.6 1.9 73.7z'
        />
      </svg>
    );
  };

  return (
    <>
      {props.component === 'help' ? (
        rainProb(props.rainProbValue)
      ) : (
        <div className={styles['rain_pop-bundle']}>
          {rainProb(props.rainProbValue)}
          <p>{props.rainProbValue}%</p>
        </div>
      )}
    </>
  );
};

export default SvgRainProbIcon;
