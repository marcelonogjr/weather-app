import SvgWindDirectionIcon from '../../UI/WeatherInfo-Icons/WindDirectionIcon';
import styles from '../HelpStyles.module.css';

const Wind = () => {
  return (
    <>
      <p>
        <span className={styles['italic']}>Wind</span> is the natural movement of
        air relative to the earth's surface. It occurs when there is a
        difference in atmospheric pressure, forcing air to move from region with
        higher pressure to a region with lower atmospheric pressure.
      </p>
      <p>
        There are two characteristics commonly associated with wind in weather
        forecasts, <span className={styles['italic']}>speed</span> (measurement
        on how fast, on average, the wind is moving - it{' '}
        <span className={styles['bold']}>does not</span> take{' '}
        <a
          href='https://en.wikipedia.org/wiki/Wind_gust'
          target='_blank'
          rel='noopener noreferrer'
        >
          wind gusts
        </a>{' '}
        into consideration), and the{' '}
        <span className={styles['italic']}>direction</span>, on average, that
        the wind blows. The wind speed is usually classified according to the{' '}
        <a
          href='https://en.wikipedia.org/wiki/Beaufort_scale'
          target='_blank'
          rel='noopener noreferrer'
        >
          Belfort Scale
        </a>{' '}
        - it provides information on what happens, on land and sea, depending on
        the wind speed.
      </p>
      <p>
        In this app, you can see the current wind speed and direction - the
        latter is shown by a dynamic icon, that changes the arrow direction and
        displays the{' '}
        <a
          href='https://en.m.wikipedia.org/wiki/Cardinal_direction'
          target='_blank'
          rel='noopener noreferrer'
        >
          cardinal and ordinal points
        </a>{' '}
        accordingly.
      </p>
      <div className={styles['wind-dir-icons']}>
        <div className={styles['wind-dir-icon']}>
          <SvgWindDirectionIcon windDirection={0} component='help' />
          <span className={styles['bold']}>0°</span>
        </div>
        <div className={styles['wind-dir-icon']}>
          <SvgWindDirectionIcon windDirection={90} component='help' />
          <span className={styles['bold']}>90°</span>
        </div>
        <div className={styles['wind-dir-icon']}>
          <SvgWindDirectionIcon windDirection={190} component='help' />
          <span className={styles['bold']}>190°</span>
        </div>
        <div className={styles['wind-dir-icon']}>
          <SvgWindDirectionIcon windDirection={230} component='help' />
          <span className={styles['bold']}>230°</span>
        </div>
        <div className={styles['wind-dir-icon']}>
          <SvgWindDirectionIcon windDirection={337} component='help' />
          <span className={styles['bold']}>337°</span>
        </div>
      </div>
    </>
  );
};

export default Wind;
