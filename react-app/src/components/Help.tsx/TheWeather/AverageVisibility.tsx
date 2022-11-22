import styles from '../HelpStyles.module.css';

const AverageVisibility = () => {
  return (
    <>
      <p>
        The average visibility is an{' '}
        <span className={styles['italic']}>indicator</span> of how clearly a
        large black object situated on the ground and far away can be seen
        without the use of any visual aid. It{' '}
        <span className={styles['bold-italic']}>does not</span> take into
        consideration an angular or vertical distance to an object - the sun is
        situated about 93 million miles from earth and can be perfectly seen
        especially in a clear sky scenario.
      </p>
      <p>
        It's possible to clearly see objects situated at a great distance under
        certain conditions, like if the region's air is particularly clean and
        you are situated at a high altitude (like a mountain), and the average
        visibility value can be up to 150 miles. Weather forecasts limit the
        maximum value to a certain number, and in the case of this app, the
        maximum distance for average visibility is 10,000 meters (or 6.21
        miles).
      </p>
      <p>
        On the forecast, any value below the maximum means that the visibility
        is being obstructed somehow, with fog, air pollution, and/or even high
        humidity can impact visibility. This indicator is particularly important
        for traffic - air, sea, or land.
      </p>
    </>
  );
};

export default AverageVisibility;
