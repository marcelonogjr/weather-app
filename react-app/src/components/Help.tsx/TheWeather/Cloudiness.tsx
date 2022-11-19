import styles from '../HelpStyles.module.css';

const Cloudiness = () => {
  return (
    <>
      <p>
        The cloudiness value is an estimation of the fraction of sky that is
        covered by clouds in a particular region. Cloud coverage is particularly
        important in aviation, and is often classified as such:
      </p>
      <ul>
        <li>
          <span>
            <span className={styles['bold']}>Clear</span>: from{' '}
            <span className={styles['italic']}>0%</span> to{' '}
            <span className={styles['italic']}>10%</span>;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Few</span>: from{' '}
            <span className={styles['italic']}>10%</span> to{' '}
            <span className={styles['italic']}>25%</span>;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Scattered</span>: from{' '}
            <span className={styles['italic']}>25%</span> to{' '}
            <span className={styles['italic']}>50%</span>;
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Broken</span>: from{' '}
            <span className={styles['italic']}>50%</span> to{' '}
            <span className={styles['italic']}>85%</span>; and
          </span>
        </li>
        <li>
          <span>
            <span className={styles['bold']}>Overcast</span>: from{' '}
            <span className={styles['italic']}>85%</span> to{' '}
            <span className={styles['italic']}>100%</span>.
          </span>
        </li>
      </ul>
      <p>
        Although this classification is universal, the percentage associated to
        each one varies for different weather services, and the table above
        refers to the values used by this app - every time that the{' '}
        <span className={styles['italic']}>weather condition</span> is equal to
        "Clouds", in the <span className={styles['italic']}>current</span>{' '}
        section of the weather forecast, you will observe this classification by
        hovering the mouse cursor on the icon (in devices using a mouse only).
      </p>
    </>
  );
};

export default Cloudiness;
