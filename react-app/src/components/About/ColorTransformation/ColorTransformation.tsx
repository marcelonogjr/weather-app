import { useRef } from 'react';

import {
  ReactMdCustomPure,
  ReactMdCustomWithKatex,
} from '../../React-Markdown/ReactMdCustom';
import AboutRightNavBar from '../AboutRightNavBar';
import BottomNavButtons from '../BottomNavButtons';
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
  ColorTransformationImg14,
} from './images/ColorTransformationSvgs';

const ColorTransformation = () => {
  const headingElementsRefs = useRef<HTMLHeadingElement[] | null[]>([]);
  const img8ElementsRef = useRef<HTMLDivElement | null>(null);
  const img9ElementsRef = useRef<HTMLDivElement | null>(null);

  const notNullTypeNarrowing = (
    refs: null | HTMLDivElement
  ): refs is HTMLDivElement => {
    return (refs as HTMLDivElement).offsetTop !== undefined;
  };

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
      {
        id: 'conclusion',
        title: 'Conclusion',
        type: 'main',
      },
    ],
    refs: headingElementsRefs.current,
  };

  const precipitationImgRefClickHandler = () => {
    if (notNullTypeNarrowing(img9ElementsRef.current)) {
      img9ElementsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  const windImgRefClickHandler = () => {
    if (notNullTypeNarrowing(img8ElementsRef.current)) {
      img8ElementsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  return (
    <>
      <article className={styles['article-right_nav_bar-bundle']}>
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
          <div
            ref={(element) => (img8ElementsRef.current = element)}
            className={styles['ref-image']}
          >
            <ColorTransformationImg8 />
          </div>
          <div
            ref={(element) => (img9ElementsRef.current = element)}
            className={styles['ref-image']}
          >
            <ColorTransformationImg9 />
          </div>
          <h4 ref={(element) => (headingElementsRefs.current[9] = element)}>
            {colorTransformationNavHeaders.headingSections[9].title}
          </h4>
          <ReactMdCustomPure text={colorTransformationText[13]} />
          <p>
            For instance, if we analyze the{' '}
            <span
              className={styles['ref-span']}
              onClick={precipitationImgRefClickHandler}
            >
              precipitation layer by looking at the graph
            </span>
            , is it possible to use only the Blue channel as a paremeter to
            track the correspondant precipitation value of any pixel color? The
            answer is <span className={styles['span_italic']}>yes</span>. Since
            there's a single blue value associated with one, and only one,
            precipitation value, by only tracking the blue channel it's possible
            to infer the values of all the other channels (since we know the
            theoretical values) and the precipitation value associated with the
            combination of all of them. In math, that's called an{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://en.wikipedia.org/wiki/Injective_function'
            >
              injective function
            </a>
            . It means that for every{' '}
            <span className={styles['span_italic']}>x</span> value of the
            function, there's only one{' '}
            <span className={styles['span_italic']}>y</span> value associated
            with it. Graphically, any horizontal line imaginable can only "go
            through" the function line once.
          </p>
          <ReactMdCustomPure text={colorTransformationText[14]} />
          <p>
            By looking at the{'  '}
            <span
              className={styles['ref-span']}
              onClick={windImgRefClickHandler}
            >
              wind speed graph
            </span>
            , you can see that the R, G and B channels have some values that are
            associated with three distinct wind speed values. For instance, if
            we imagine a horizontal line that represents the value{' '}
            <span className={styles['span_italic']}>70</span> for each channel,
            it will "go through" the Red, Green and Blue lines three times. The
            function that represents the Alpha channel of this layer is also not
            injective, since it has the same value (255) when the wind speed is
            equal or greater to 223.7 mph (100 m/s).
          </p>
          <ReactMdCustomPure text={colorTransformationText[15]} />
          <h4 ref={(element) => (headingElementsRefs.current[10] = element)}>
            {colorTransformationNavHeaders.headingSections[10].title}
          </h4>
          <ReactMdCustomPure text={colorTransformationText[16]} />
          <ColorTransformationImg10 />
          <ReactMdCustomPure text={colorTransformationText[17]} />
          <ColorTransformationImg11 />
          <h4 ref={(element) => (headingElementsRefs.current[11] = element)}>
            {colorTransformationNavHeaders.headingSections[11].title}
          </h4>
          <ReactMdCustomWithKatex text={colorTransformationText[18]} />
          <h4 ref={(element) => (headingElementsRefs.current[12] = element)}>
            {colorTransformationNavHeaders.headingSections[12].title}
          </h4>
          <ReactMdCustomPure text={colorTransformationText[19]} />
          <ColorTransformationImg12 />
          <ReactMdCustomPure text={colorTransformationText[20]} />
          <ColorTransformationImg13 />
          <ReactMdCustomPure text={colorTransformationText[21]} />
          <div className={styles['color_problems-bundle']}>
            <ColorTransformationImg14 />
            <img
              id={styles['color_problems_original']}
              src={require('./images/orig-wind_layer-wb.avif')}
              alt='Exemple of the original wind speed layer'
            />
            <img
              id={styles['color_problems_modified']}
              src={require('./images/modf-wind_layer-wb.avif')}
              alt='Exemple of the modified wind speed layer'
            />
          </div>
          <ReactMdCustomPure text={colorTransformationText[22]} />
          <h3 ref={(element) => (headingElementsRefs.current[13] = element)}>
            {colorTransformationNavHeaders.headingSections[13].title}
          </h3>
          <ReactMdCustomPure text={colorTransformationText[23]} />
        </div>
        <AboutRightNavBar articleSpecifics={colorTransformationNavHeaders} />
      </article>
      <BottomNavButtons
        previous={{ route: '/about/map-tiles', name: 'Map Coordinate Problem' }}
        next={{
          route: '/about/dynamic-graph',
          name: 'Dynamic Graph Color Problem',
        }}
      />
    </>
  );
};

export default ColorTransformation;
