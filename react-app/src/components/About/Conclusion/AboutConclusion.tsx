import { ReactMdCustomPure } from '../../React-Markdown/ReactMdCustom';
import BottomNavButtons from '../BottomNavButtons';
import { aboutConclusionText } from './text/aboutConclusionText';

import styles from './AboutConclusion.module.css';

const AboutConclusion = () => {
  return (
    <>
      <article className={styles['article-content']}>
        <ReactMdCustomPure text={aboutConclusionText} />
        <blockquote>
          A work is never completed, but merely abandoned.
        </blockquote>
        <figcaption>
          Paul Valéry? Da Vinci?{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://quoteinvestigator.com/2019/03/01/abandon/'
          >
            Probably Valéry
          </a>
          ...
        </figcaption>
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
