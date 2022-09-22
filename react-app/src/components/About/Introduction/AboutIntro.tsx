import { ReactMdCustomPure } from '../../React-Markdown/ReactMdCustom';
import BottomNavButtons from '../BottomNavButtons';
import { aboutIntroText } from './text/aboutIntroText';

import styles from './AboutIntro.module.css';

const AboutIntro = () => {
  return (
    <>
      <article className={styles['article-content']}>
        <ReactMdCustomPure text={aboutIntroText} />
      </article>{' '}
      <BottomNavButtons
        previous={{
          route: undefined,
          name: 'none',
        }}
        next={{
          route: '/about/map-tiles',
          name: 'Map Coordinates Problem',
        }}
      />
    </>
  );
};

export default AboutIntro;
