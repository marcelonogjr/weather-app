import styles from '../HelpStyles.module.css';

const Pressure = () => {
  return (
    <>
      <p>
        The{' '}
        <a
          href='https://en.wikipedia.org/wiki/Pressure'
          target='_blank'
          rel='noopener noreferrer'
        >
          pressure
        </a>{' '}
        associated with weather forecasts is actually the{' '}
        <a
          href='https://en.wikipedia.org/wiki/Atmospheric_pressure'
          target='_blank'
          rel='noopener noreferrer'
        >
          atmospheric pressure
        </a>
        . It is a consequence of the weight of the column of air compressing
        every surface that it touches.
      </p>
      <p>The atmospheric pressure is influenced basically by:</p>
      <ul>
        <li>
          <span>Temperature;</span>
        </li>
        <li>
          <span>Humidity;</span>
        </li>
        <li>
          <span>Wind Speed; and</span>
        </li>
        <li>
          <span>
            <a
              href='https://en.wikipedia.org/wiki/Altitude'
              target='_blank'
              rel='noopener noreferrer'
            >
              Altitude
            </a>
            .
          </span>
        </li>
      </ul>
      <p>
        The last one is ignored on most weather forecasts, including the one in
        this app since the pressure portrayed is relative to the{' '}
        <a
          href='https://en.wikipedia.org/wiki/Sea_Level'
          target='_blank'
          rel='noopener noreferrer'
        >
          sea level
        </a>{' '}
        - it's often referred to as{' '}
        <span className={styles['-italic']}>sea level pressure</span>, and the
        standard pressure at sea level is{' '}
        <span className={styles['bold-italic']}>1013.25 mb.</span> (or 1{' '}
        <a
          href='https://en.wikipedia.org/wiki/Standard_atmosphere_(unit)'
          target='_blank'
          rel='noopener noreferrer'
        >
          atm
        </a>
        ) at 59 °F (15 °C).
      </p>
      <p>
        If you look for a region that is located at a high altitude, like{' '}
        <a
          href='https://en.wikipedia.org/wiki/Mexico_City'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mexico City
        </a>
        , that has an average altitude of 7615 ft (2321 m), the "default"
        atmospheric pressure should be 764.78 mb., just correcting the standard
        pressure considering the average altitude. But when you search for
        Mexico City, the displayed value for pressure is closer to 1013 mb.
      </p>
      <p>
        That happens because there is a correction in the pressure value for
        every location to make it easier to analyze it and compare it with other
        places that have different altitudes, and in that way, you don't need to
        know the "standard" pressure value for each region.
      </p>
      <p>
        Different pressure values can indicate a number of things. For example,
        it influences the calculus of the{' '}
        <span className={styles['italic']}>rain probability</span>. If you are
        curious to know more about its implications, I{' '}
        <span className={styles['italic']}>highly recommend</span> reading{' '}
        <a
          href='https://www.weather.gov/source/zhu/ZHU_Training_Page/winds/pressure_winds/Pressure.htm'
          target='_blank'
          rel='noopener noreferrer'
        >
          this series of articles
        </a>{' '}
        from the U.S. National Weather Service - just a heads up, this can be
        heavy reading for most people, especially for those not very familiar
        with basic physics, but it explains a lot of things related to pressure
        and weather in general.
      </p>
    </>
  );
};

export default Pressure;
