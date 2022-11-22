import WeatherIconSelector from '../../UI/Weather-Icons/WeatherIconSelector';
import styles from '../HelpStyles.module.css';

const WeatherConditions = () => {
  return (
    <>
      <p>
        The <span className={styles['italic']}>weather condition</span> may be
        the most essential information contained in the weather forecast, and it
        can be defined as{' '}
        <span className={styles['italic']}>
          a generalization of the state of the atmosphere in terms of
          temperature, wind, clouds, and precipitation
        </span>{' '}
        - more on those terms in later topics.
      </p>
      <p>
        In this app, the weather conditions will be illustrated by 9 different
        icons (some of them with day and night versions) accompanied by their
        main characteristic. Below you will find all the icons used and their
        code that matches the{' '}
        <a
          href='https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2'
          target='_blank'
          rel='noopener noreferrer'
        >
          original API's icon codes
        </a>{' '}
        - in this link, you'll also find all possible weather conditions (with
        descriptions).
      </p>
      <div className={styles['weather-conditions']}>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='01d'
            iconDescription='Clear Group'
            parentComponent='help'
          />
          <span>01d</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='01n'
            iconDescription='Clear Group'
            parentComponent='help'
          />
          <span>01n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='02d'
            iconDescription='Few Clouds Group'
            parentComponent='help'
          />
          <span>02d</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='02n'
            iconDescription='Few Clouds Group'
            parentComponent='help'
          />
          <span>02n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='03d'
            iconDescription='Scattered Clouds Group'
            parentComponent='help'
          />
          <span>03d/03n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='04d'
            iconDescription='Broken Clouds Group'
            parentComponent='help'
          />
          <span>04d/04n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='09d'
            iconDescription='Shower Rain Group'
            parentComponent='help'
          />
          <span>09d/09n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='10d'
            iconDescription='Rain Group'
            parentComponent='help'
          />
          <span>10d</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='10n'
            iconDescription='Rain Group'
            parentComponent='help'
          />
          <span>10n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='11d'
            iconDescription='Thunderstorm Group'
            parentComponent='help'
          />
          <span>11d/11n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='13d'
            iconDescription='Snow Group'
            parentComponent='help'
          />
          <span>13d/13n</span>
        </div>
        <div className={styles['weather-condition']}>
          <WeatherIconSelector
            iconId='50d'
            iconDescription='Mist Group'
            parentComponent='help'
          />
          <span>50d/50n</span>
        </div>
      </div>
    </>
  );
};

export default WeatherConditions;
