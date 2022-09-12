import { useRef } from 'react';

import {ReactMdCustomPure, ReactMdCustomWithKatex} from '../../React-Markdown/ReactMdCustom';
import AboutRightNavBar from '../AboutRightNavBar';
import styles from './ColorTransformation.module.css';

import { colorTransformationText } from './text/colorTransformationText';
import {
  ColorTransformationImg1,
  ColorTransformationImg2,
  ColorTransformationImg3,
  ColorTransformationImg4,
  ColorTransformationImg5,
  ColorTransformationImg6,
  ColorTransformationImg7,
  ColorTransformationImg8,
  ColorTransformationImg9,
  ColorTransformationImg10,
  ColorTransformationImg11,
  ColorTransformationImg12,
  ColorTransformationImg13,
} from './images/ColorTransformationSvgs';

const ColorTransformation = () => {
  const headingElementsRefs = useRef<HTMLHeadingElement[] | null[]>([]);

  const colorTransformationNavHeaders = {
    headingSections: [
      {
        id: 'intro',
        title: 'Introduction',
        type: 'main',
      },
      {
        id: 'necessary-concepts',
        title: 'Necessary Concepts',
        type: 'main',
      },
      {
        id: 'understanding-rgba',
        title: 'The RGBA Color Model',
        type: 'sub',
      },
      {
        id: 'linear-functions',
        title: 'Linear Functions',
        type: 'sub',
      },
      {
        id: 'linear-gradients',
        title: 'Linear Color Gradients',
        type: 'sub',
      },
      {
        id: 'trivial-solutions',
        title: 'The "Trivial" Solution',
        type: 'main',
      },
      {
        id: 'clouds-layer',
        title: 'The Clouds Layer',
        type: 'sub',
      },
      {
        id: 'complex-solutions',
        title: 'The "Not So Trivial" Solutions',
        type: 'main',
      },
      {
        id: 'step-one',
        title: 'First Step',
        type: 'sub',
      },
      {
        id: 'step-two',
        title: 'Second Step',
        type: 'sub',
      },
      {
        id: 'step-three',
        title: 'Third Step',
        type: 'sub',
      },
      {
        id: 'step-four',
        title: 'Fourth Step',
        type: 'sub',
      },
      {
        id: 'problems',
        title: 'Problems',
        type: 'sub',
      },
    ],
    refs: headingElementsRefs.current,
  };

  return (
    <article>
      <div className={styles['article-content']}>
        <h2>Color Transformation Problem</h2>
        <h3 ref={(element) => (headingElementsRefs.current[0] = element)}>
          {colorTransformationNavHeaders.headingSections[0].title}
        </h3>
        <ReactMdCustomPure text={colorTransformationText[0]} />
        <ColorTransformationImg1 />
        <ReactMdCustomPure text={colorTransformationText[1]} />
        <h3 ref={(element) => (headingElementsRefs.current[1] = element)}>
          {colorTransformationNavHeaders.headingSections[1].title}
        </h3>
        <h4 ref={(element) => (headingElementsRefs.current[2] = element)}>
          {colorTransformationNavHeaders.headingSections[2].title}
        </h4>
        <ReactMdCustomPure text={colorTransformationText[2]} />
        <ColorTransformationImg2 />
        <ReactMdCustomPure text={colorTransformationText[3]} />
        <ColorTransformationImg3 />
        <h4 ref={(element) => (headingElementsRefs.current[3] = element)}>
          {colorTransformationNavHeaders.headingSections[3].title}
        </h4>
        <ReactMdCustomWithKatex text={colorTransformationText[4]} />
        <ColorTransformationImg4 />
        <h4 ref={(element) => (headingElementsRefs.current[4] = element)}>
          {colorTransformationNavHeaders.headingSections[4].title}
        </h4>
        <ReactMdCustomPure text={colorTransformationText[5]} />
        <ColorTransformationImg5 />
        <ReactMdCustomPure text={colorTransformationText[6]} />
        <h3 ref={(element) => (headingElementsRefs.current[5] = element)}>
          {colorTransformationNavHeaders.headingSections[5].title}
        </h3>
        <ReactMdCustomPure text={colorTransformationText[7]} />
        <ColorTransformationImg6 />
        <ReactMdCustomPure text={colorTransformationText[8]} />
        <h4 ref={(element) => (headingElementsRefs.current[6] = element)}>
          {colorTransformationNavHeaders.headingSections[6].title}
        </h4>
        <ReactMdCustomWithKatex text={colorTransformationText[9]} />
        <ColorTransformationImg7 />
        <ReactMdCustomPure text={colorTransformationText[10]} />
        <h3 ref={(element) => (headingElementsRefs.current[7] = element)}>
          {colorTransformationNavHeaders.headingSections[7].title}
        </h3>
        <ReactMdCustomPure text={colorTransformationText[11]} />
        <h4 ref={(element) => (headingElementsRefs.current[8] = element)}>
          {colorTransformationNavHeaders.headingSections[8].title}
        </h4>
        <ReactMdCustomPure text={colorTransformationText[12]} />
        <ColorTransformationImg8 />
        <h4 ref={(element) => (headingElementsRefs.current[9] = element)}>
          {colorTransformationNavHeaders.headingSections[9].title}
        </h4>
        <ReactMdCustomPure text={colorTransformationText[13]} />
        <h4 ref={(element) => (headingElementsRefs.current[10] = element)}>
          {colorTransformationNavHeaders.headingSections[10].title}
        </h4>
        <ReactMdCustomPure text={colorTransformationText[14]} />
        <ColorTransformationImg9 />
        <ReactMdCustomPure text={colorTransformationText[15]} />
        <ColorTransformationImg10 />
        <h4 ref={(element) => (headingElementsRefs.current[11] = element)}>
          {colorTransformationNavHeaders.headingSections[11].title}
        </h4>
        <ReactMdCustomWithKatex text={colorTransformationText[16]} />
        <h4 ref={(element) => (headingElementsRefs.current[12] = element)}>
          {colorTransformationNavHeaders.headingSections[12].title}
        </h4>
        <ReactMdCustomPure text={colorTransformationText[17]} />
        <ColorTransformationImg11 />
        <ReactMdCustomPure text={colorTransformationText[18]} />
        <ColorTransformationImg12 />
        <ReactMdCustomPure text={colorTransformationText[19]} />
        <div className={styles['color_problems-bundle']}>
          <img
            id={styles['color_problems_original']}
            src={require('./images/orig-wind_layer-wb.png')}
            alt='Exemple of the original wind speed layer'
          />
          <img
            id={styles['color_problems_modified']}
            src={require('./images/modf-wind_layer-wb.png')}
            alt='Exemple of the modified wind speed layer'
          />
          <ColorTransformationImg13 />
          <ReactMdCustomPure text={colorTransformationText[20]} />
        </div>
      </div>
      <AboutRightNavBar articleSpecifics={colorTransformationNavHeaders} />
    </article>
  );
};

export default ColorTransformation;
