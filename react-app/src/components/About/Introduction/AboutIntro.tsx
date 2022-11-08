import { ReactMdCustomPure } from '../../React-Markdown/ReactMdCustom';
import BottomNavButtons from '../BottomNavButtons';
import { aboutIntroText } from './text/aboutIntroText';

import styles from './AboutIntro.module.css';

const AboutIntro = () => {
  return (
    <>
      <article className={styles['article-right_nav_bar-bundle']}>
        <div className={styles['article-content']}>
          <ReactMdCustomPure text={aboutIntroText} />
          <blockquote>
            If you cannot explain something in simple terms, you don't
            understand it. The best way to learn is to teach.
          </blockquote>
          <figcaption>
            Feynman? Einstein? It doesn't really matter, does it?
          </figcaption>
        </div>
        <div className={styles['right-nav_bar-placeholder']} />
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
