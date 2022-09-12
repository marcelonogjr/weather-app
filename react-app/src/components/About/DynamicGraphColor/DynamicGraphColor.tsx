import { useRef } from 'react';

import { ReactMdCustomPure, ReactMdCustomWithKatex } from '../../React-Markdown/ReactMdCustom';
import AboutRightNavBar from '../AboutRightNavBar';
import styles from './DynamicGraphColor.module.css';

import { dynamicGraphColorText } from './text/dynamicGraphColorText';
import { DynamicGraphColorImg1 } from './images/DynamicGraphColorSvgs';

const DynamicGraphColor = () => {
  const headingElementsRefs = useRef<HTMLHeadingElement[] | null[]>([]);

  const dynamicGraphColorNavHeaders = {
    headingSections: [
      {
        id: 'intro',
        title: 'Introduction',
        type: 'main',
      },
    ],
    refs: headingElementsRefs.current,
  };

  return (
    <article>
      <div className={styles['article-content']}>
        <h2>Dynamic Graph Color Problem</h2>
        <h3 ref={(element) => (headingElementsRefs.current[0] = element)}>
          {dynamicGraphColorNavHeaders.headingSections[0].title}
        </h3>
        <ReactMdCustomPure text={dynamicGraphColorText[0]} />
      </div>
      <AboutRightNavBar articleSpecifics={dynamicGraphColorNavHeaders} />
    </article>
  );
};

export default DynamicGraphColor;
