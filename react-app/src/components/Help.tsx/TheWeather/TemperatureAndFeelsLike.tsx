import styles from '../HelpStyles.module.css';

const TemperatureAndFeelsLike = () => {
  return (
    <>
      <p>
        Temperature and heat are commonly used interchangeably, but they are in
        fact two distinctive things. Knowing that difference is{' '}
        <span className={styles['italic']}>key</span> when trying to understand
        what the{' '}
        <span className={styles['italic']}>feels like temperature</span>,
        present in a lot of weather forecasts, means.
      </p>
      <p>
        <span className={styles['bold']}>Temperature</span> can be defined as{' '}
        <span className={styles['italic']}>
          the measure of agitation of the molecules
        </span>
        . That means that a <span className={styles['italic']}>body</span> (any
        "gathering" of particles, solid or fluid, alive or not) with a higher
        temperature will have higher average agitation of the molecules that
        compose that body when compared to a body with a lower temperature. The{' '}
        <a
          href='https://en.wikipedia.org/wiki/Energy'
          target='_blank'
          rel='noopener noreferrer'
        >
          energy
        </a>{' '}
        associated with temperature is called{' '}
        <span className={styles['italic']}>thermal energy</span>.
      </p>
      <p>
        <span className={styles['bold']}>Heat</span> is thermal energy that
        flows from a body with a higher temperature to a body with a lower
        temperature. Heat transfer always occurs when two bodies with different
        temperatures interact, but the transfer rate depends on the physical
        properties of those bodies and external inputs (or circumstances).
      </p>
      <p>
        Humans have the perception of hot or cold as a consequence of heat
        transfer when we interact with bodies with different temperatures. But
        this perception can sometimes "trick our brain" into having an
        inaccurate perception of temperature with those interactions, because of
        the difference in the heat transfer rate possible even when exchanging
        heat with bodies with the same temperature.
      </p>
      <p>
        The <span className={styles['bold']}>feels like</span> temperature is an
        estimate of our perception of the real atmospheric air temperature,
        considering the relative humidity and wind speed influences the heat
        transfer between our body and the air.
      </p>
    </>
  );
};

export default TemperatureAndFeelsLike;
