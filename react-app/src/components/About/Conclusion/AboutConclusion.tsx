import { ReactMdCustomPure } from '../../React-Markdown/ReactMdCustom';
import BottomNavButtons from '../BottomNavButtons';
import { aboutConclusionText } from './text/aboutConclusionText';

import styles from './AboutConclusion.module.css';

const AboutConclusion = () => {
  return (
    <>
      <article className={styles['article-content']}>
        <ReactMdCustomPure text={aboutConclusionText} />
      </article>{' '}
      <BottomNavButtons
        previous={{
          route: '/about/dynamic-graph',
          name: 'Dynamic Graph Problem',
        }}
        next={{
          route: undefined,
          name: 'none',
        }}
      />
    </>
  );
};

export default AboutConclusion;
