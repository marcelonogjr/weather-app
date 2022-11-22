import styles from '../HelpStyles.module.css';

const WeatherMap = () => {
  return (
    <>
      <p>
        This app's weather maps are visible on the{' '}
        <span className={styles['italic']}>current</span> forecast section, and
        for each location, it offers a few different settings on{' '}
        <span className={styles['italic']}>Zoom Level</span> and{' '}
        <span className={styles['italic']}>Map Layer</span>.
      </p>
      <p>
        The <span className={styles['italic']}>Zoom Level</span> controls the
        size of the area represented in the image, and has 3 settings:
      </p>
      <ul>
        <li>
          <span>
            <span className={styles['bold']}>Far away</span> (x1) -{' '}
            <span className={styles['italic']}>continental</span>-like area;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Medium</span> (x2) -{' '}
            <span className={styles['italic']}>state/country</span>-like area;
            and
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Close</span> (x3) -{' '}
            <span className={styles['italic']}>city</span>-like area.
          </span>
        </li>
      </ul>
      <p>
        The <span className={styles['italic']}>Map Layer</span> offers 5
        different layers:
      </p>
      <ul>
        <li>
          <span>
            <span className={styles['bold']}>Temperature</span> - shows the
            temperature map of the region;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Precipitation</span> - shows the
            places that had precipitation in the last 3 hours and its total
            aggregated intensity;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Wind Speed</span> - shows the
            intensity (speed) of the wind in the specified region, without
            indicating direction;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Sea Level Pressure</span> - shows
            the pressure map of the region, normalizing its altitude to the{' '}
            <a
              href='https://en.wikipedia.org/wiki/Sea_level'
              target='_blank'
              rel='noopener noreferrer'
            >
              sea level
            </a>{' '}
            elevation; and
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Clouds</span> - shows the areas of
            the region covered by clouds and its intensity (percentage).
          </span>
        </li>
      </ul>
    </>
  );
};
export default WeatherMap;
