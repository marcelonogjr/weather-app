import { useRef } from 'react';

import {
  ReactMdCustomPure,
  ReactMdCustomWithKatex,
} from '../../React-Markdown/ReactMdCustom';
import AboutRightNavBar from '../AboutRightNavBar';
import BottomNavButtons from '../BottomNavButtons';
import styles from './DynamicGraphColor.module.css';

import { dynamicGraphColorText } from './text/dynamicGraphColorText';
import {
  DynamicGraphColorImg1,
  DynamicGraphColorImg2,
  DynamicGraphColorImg3,
  DynamicGraphColorImg4,
  DynamicGraphColorImg5,
  DynamicGraphColorImg6,
  DynamicGraphColorImg7,
} from './images/DynamicGraphColorSvgs';

const DynamicGraphColor = () => {
  const headingElementsRefs = useRef<HTMLHeadingElement[] | null[]>([]);

  const dynamicGraphColorNavHeaders = {
    headingSections: [
      {
        id: 'intro',
        title: 'Introduction',
        type: 'main',
      },
      {
        id: 'solution',
        title: 'The Solution',
        type: 'main',
      },
      {
        id: 'max-min',
        title: 'Maximum and Minimum',
        type: 'sub',
      },
      {
        id: 'extremities',
        title: 'The Extremities',
        type: 'sub',
      },
      {
        id: 'between',
        title: 'Everything in Between',
        type: 'sub',
      },
      {
        id: 'conslusion',
        title: 'Conclusion',
        type: 'main',
      },
    ],
    refs: headingElementsRefs.current,
  };

  return (
    <>
      <article className={styles['article-right_nav_bar-bundle']}>
        <div className={styles['article-content']}>
          <h2>Dynamic Graph Color Problem</h2>
          <h3 ref={(element) => (headingElementsRefs.current[0] = element)}>
            {dynamicGraphColorNavHeaders.headingSections[0].title}
          </h3>
          <ReactMdCustomPure text={dynamicGraphColorText[0]} />
          <DynamicGraphColorImg1 />
          <ReactMdCustomPure text={dynamicGraphColorText[1]} />
          <h3 ref={(element) => (headingElementsRefs.current[1] = element)}>
            {dynamicGraphColorNavHeaders.headingSections[1].title}
          </h3>
          <ReactMdCustomPure text={dynamicGraphColorText[2]} />
          <DynamicGraphColorImg2 />
          <ReactMdCustomPure text={dynamicGraphColorText[3]} />
          <DynamicGraphColorImg3 />
          <ReactMdCustomPure text={dynamicGraphColorText[4]} />
          <h4 ref={(element) => (headingElementsRefs.current[2] = element)}>
            {dynamicGraphColorNavHeaders.headingSections[2].title}
          </h4>
          <ReactMdCustomPure text={dynamicGraphColorText[5]} />
          <DynamicGraphColorImg4 />
          <ReactMdCustomPure text={dynamicGraphColorText[6]} />
          <h4 ref={(element) => (headingElementsRefs.current[3] = element)}>
            {dynamicGraphColorNavHeaders.headingSections[3].title}
          </h4>
          <ReactMdCustomPure text={dynamicGraphColorText[7]} />
          <DynamicGraphColorImg5 />
          <ReactMdCustomWithKatex text={dynamicGraphColorText[8]} />
          <DynamicGraphColorImg6 />
          <h4 ref={(element) => (headingElementsRefs.current[4] = element)}>
            {dynamicGraphColorNavHeaders.headingSections[4].title}
          </h4>
          <ReactMdCustomWithKatex text={dynamicGraphColorText[9]} />
          <DynamicGraphColorImg7 />
          <ReactMdCustomPure text={dynamicGraphColorText[10]} />
          <h3 ref={(element) => (headingElementsRefs.current[5] = element)}>
            {dynamicGraphColorNavHeaders.headingSections[5].title}
          </h3>
          <ReactMdCustomPure text={dynamicGraphColorText[11]} />
        </div>
        <AboutRightNavBar articleSpecifics={dynamicGraphColorNavHeaders} />
      </article>{' '}
      <BottomNavButtons
        previous={{
          route: '/about/color-transform',
          name: 'Color Transformation Problem',
        }}
        next={{
          route: '/about/conclusion',
          name: 'Conclusion',
        }}
      />
    </>
  );
};

export default DynamicGraphColor;
