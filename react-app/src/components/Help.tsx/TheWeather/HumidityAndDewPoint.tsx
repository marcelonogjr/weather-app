import SvgHumidityIcon from '../../UI/WeatherInfo-Icons/HumidityIcon';
import styles from '../HelpStyles.module.css';

const HumidityAndDewPoint = () => {
  return (
    <>
      <p>
        The humidity value indicates the proportion of water vapor contained in
        the atmosphere relative to the maximum possible amount of vapor that the
        current temperature allows it.
      </p>
      <p>
        In this app, I use this dynamic icon to represent humidity (the drop
        "filling" changes according to the humidity level):
      </p>
      <div className={styles['humidity-icons']}>
        <SvgHumidityIcon humidityValue={20} component='help' />
        <SvgHumidityIcon humidityValue={50} component='help' />
        <SvgHumidityIcon humidityValue={85} component='help' />
      </div>
      <p>
        On cold days the maximum amount of water vapor the atmospheric air can
        "hold" is significantly smaller when compared to hot days. This
        information is particularly important when it comes to understanding the{' '}
        <span className={styles['italic']}>Dew Point</span> temperature level.
      </p>
      <p>
        The <span className={styles['bold']}>Dew Point</span> is the temperature
        where, if the current air would be cooled down, the humidity would reach
        100% - that is, the amount or water that is currently in the air would
        become fully saturated. So if the dew point is close to the current
        temperature, that means that the humidity is high, and cooling the air
        just a little bit would suffice to reach the saturation point - for cold
        days, even when the humidity is not at a high level, the dew point can
        be considerably close to the current temperature.
      </p>
      <p>
        The humidity level (and dew point) are closely related to human comfort
        and possible health issues. Too high or too low levels of humidity can
        have a number of adverse effects in the human body, physical
        psychological effects.
      </p>
      <p>
        To know more on the <span className={styles['bold-italic']}>many</span>{' '}
        possible effects that humidity has in our body, I suggest reading{' '}
        <a
          href='https://www.nbcnews.com/health/health-news/it-s-not-just-heat-it-really-humidity-know-risks-n629486'
          target='_blank'
          rel='noopener noreferrer'
        >
          this
        </a>{' '}
        and{' '}
        <a
          href='https://www.allthingstalk.com/faq/how-does-humidity-and-temperature-ratio-relate-to-your-health'
          target='_blank'
          rel='noopener noreferrer'
        >
          this
        </a>{' '}
        articles (nothing too technical).
      </p>
    </>
  );
};

export default HumidityAndDewPoint;
