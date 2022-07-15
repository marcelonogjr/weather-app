import styles from './WeatherError.module.css';

interface WeatherErrorPropsType {
  errorMessage: string;
}

const WeatherError = (props: WeatherErrorPropsType) => {
  const ErrorIconSvg = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 1000'
        width={'50'}
        height={'50'}
        style={{
          marginRight: '15px',
        }}
      >
        <circle
          cx={500}
          cy={500}
          r={475}
          style={{
            fill: 'none',
            stroke: '#f00000',
            strokeWidth: 50,
            strokeMiterlimit: 10,
          }}
        />
        <path
          d='M500 688.5c40.8 0 74.3 33.3 74.3 73.8s-33.5 73.8-74.3 73.8-74.3-33.3-74.3-73.8 33.5-73.8 74.3-73.8zm71.6-344.7c0 13.5-1.8 27.9-3.6 42.3l-28.1 210.6c-3.6 26.1-16.3 33.3-39.9 33.3s-36.2-7.2-39.9-33.3L432 386.1c-1.8-14.4-3.6-28.8-3.6-42.3V239.4c0-45.9 26.3-69.3 71.6-69.3s71.6 23.4 71.6 69.3v104.4z'
          style={{
            fill: '#f00000',
          }}
        />
      </svg>
    );
  };

  return (
    <div className={styles['error-bundle']}>
      {ErrorIconSvg()}
      <p>{props.errorMessage}</p>
    </div>
  );
};

export default WeatherError;
