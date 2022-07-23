import MapCoordinates from './articles/About/MapCoordinates/MapCoordinates';

import styles from './AboutGeneral.module.css';

const AboutGeneral = () => {

  return (
    <div className={styles['articles-content']}>
      <MapCoordinates />
    </div>
  );
};

export default AboutGeneral;
