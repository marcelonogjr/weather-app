import { useRef } from 'react';

import {
  ReactMdCustomPure,
  ReactMdCustomWithKatex,
} from '../../React-Markdown/ReactMdCustom';
import AboutRightNavBar from '../AboutRightNavBar';
import BottomNavButtons from '../BottomNavButtons';
import styles from './MapCoordinates.module.css';

import { mapCoordinatesText } from './text/mapCoordinates';
import {
  MapCoordinatesImg1,
  MapCoordinatesImg2,
  MapCoordinatesImg3,
  MapCoordinatesImg4,
  MapCoordinatesImg5,
  MapCoordinatesImg6,
  MapCoordinatesImg7,
  MapCoordinatesImg8,
  MapCoordinatesImg9,
  MapCoordinatesImg10,
  MapCoordinatesImg11,
  MapCoordinatesImg12,
  MapCoordinatesImg13,
  MapCoordinatesImg14,
  MapCoordinatesImg15,
} from './images/MapCoordinatesSvgs';

const MapCoordinates = () => {
  const headingElementsRefs = useRef<HTMLHeadingElement[] | null[]>([]);
  const img5ElementsRef = useRef<HTMLDivElement | null>(null);

  const notNullTypeNarrowing = (
    refs: null | HTMLDivElement
  ): refs is HTMLDivElement => {
    return (refs as HTMLDivElement).offsetTop !== undefined;
  };

  const mapCoordinatesNavHeaders = {
    headingSections: [
      {
        id: 'necessary-concepts',
        title: 'Necessary Concepts',
        type: 'main',
      },
      {
        id: 'the-problem',
        title: 'The Problem',
        type: 'main',
      },
      {
        id: 'alternatives',
        title: 'Alternatives',
        type: 'sub',
      },
      {
        id: 'the-solution',
        title: 'The Solution',
        type: 'main',
      },
      {
        id: 'first-step',
        title: 'First Step',
        type: 'sub',
      },
      {
        id: 'second-step',
        title: 'Second Step',
        type: 'sub',
      },
      {
        id: 'third-step',
        title: 'Third Step',
        type: 'sub',
      },
      {
        id: 'fourth-step',
        title: 'Fourth Step',
        type: 'sub',
      },
      {
        id: 'fifth-step',
        title: 'Fifth Step',
        type: 'sub',
      },
      {
        id: 'sixth-step',
        title: 'Sixth Step',
        type: 'sub',
      },
      {
        id: 'seventh-step',
        title: 'Seventh Step',
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

  const imgRefClickHandler = () => {
    if (notNullTypeNarrowing(img5ElementsRef.current)) {
      img5ElementsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  return (
    <>
      <article>
        <div className={styles['article-content']}>
          <h2>Map Coordinates Problem</h2>
          <h3 ref={(element) => (headingElementsRefs.current[0] = element)}>
            {mapCoordinatesNavHeaders.headingSections[0].title}
          </h3>
          <ReactMdCustomPure text={mapCoordinatesText[0]} />
          <MapCoordinatesImg1 />
          <ReactMdCustomPure text={mapCoordinatesText[1]} />
          <div className={styles['web_mercator_zoom_0-bundle']}>
            <MapCoordinatesImg2 />
            <img
              id={styles['tile_map_zoom_0']}
              src={require('./images/tile_zoom_0_satellite.jpg')}
              alt='Satellite view of the earth using the Web Mercator Projection'
            />
          </div>
          <ReactMdCustomPure text={mapCoordinatesText[2]} />
          <MapCoordinatesImg3 />
          <ReactMdCustomPure text={mapCoordinatesText[3]} />
          <h3 ref={(element) => (headingElementsRefs.current[1] = element)}>
            {mapCoordinatesNavHeaders.headingSections[1].title}
          </h3>
          <ReactMdCustomPure text={mapCoordinatesText[4]} />
          <h4 ref={(element) => (headingElementsRefs.current[2] = element)}>
            {mapCoordinatesNavHeaders.headingSections[2].title}
          </h4>
          <ReactMdCustomPure text={mapCoordinatesText[5]} />
          <div className={styles['san_francisco_comparison-bundle']}>
            <MapCoordinatesImg4 />
            <img
              id={styles['map_coordinates_comparison-1']}
              src={require('./images/coordinates_comparison_traditional.png')}
              alt='Map view of San Francisco using the tile coordinate system with zoom 10'
            />
            <img
              id={styles['map_coordinates_comparison-2']}
              src={require('./images/coordinates_comparison_tiles.png')}
              alt='Map view of San Francisco using traditional coordinate system with zoom 10'
            />
          </div>
          <ReactMdCustomPure text={mapCoordinatesText[6]} />
          <h3 ref={(element) => (headingElementsRefs.current[3] = element)}>
            {mapCoordinatesNavHeaders.headingSections[3].title}
          </h3>
          <ReactMdCustomPure text={mapCoordinatesText[7]} />
          <h4 ref={(element) => (headingElementsRefs.current[4] = element)}>
            {mapCoordinatesNavHeaders.headingSections[4].title}
          </h4>
          <ReactMdCustomWithKatex text={mapCoordinatesText[8]} />
          <h4 ref={(element) => (headingElementsRefs.current[5] = element)}>
            {mapCoordinatesNavHeaders.headingSections[5].title}
          </h4>
          <ReactMdCustomWithKatex text={mapCoordinatesText[9]} />
          <div
            ref={(element) => (img5ElementsRef.current = element)}
            className={styles['ref-image']}
          >
            <MapCoordinatesImg5 />
          </div>
          <ReactMdCustomWithKatex text={mapCoordinatesText[10]} />
          <h4 ref={(element) => (headingElementsRefs.current[6] = element)}>
            {mapCoordinatesNavHeaders.headingSections[6].title}
          </h4>
          <p>
            Based on the tile coordinates found in the previous step, now it's
            possible to determine the right tiles to call that are necessary to
            compose the final image - the point will be inside in one of the
            colored squares, like the{' '}
            <span className={styles['ref-span']} onClick={imgRefClickHandler}>
              image illustrating the step 2
            </span>
            .
          </p>
          <MapCoordinatesImg6 />
          <ReactMdCustomPure text={mapCoordinatesText[12]} />
          <div className={styles['san_francisco_step_3-bundle']}>
            <MapCoordinatesImg7 />
            <img
              id={styles['map_complementary_center']}
              src={require('./images/coordinates_comparison_tiles.png')}
              alt='Map view of San Francisco using the tile coordinate system with zoom 10'
            />
            <img
              id={styles['map_complementary_right']}
              src={require('./images/san_francisco_complementary_right.png')}
              alt='Complementary tile of San Francisco located on the right of the original'
            />
            <img
              id={styles['map_complementary_bottom']}
              src={require('./images/san_francisco_complementary_bottom.png')}
              alt='Complementary tile of San Francisco located on the bottom of the original'
            />
            <img
              id={styles['map_complementary_bottom_right']}
              src={require('./images/san_francisco_complementary_bottom-right.png')}
              alt='Complementary tile of San Francisco located on the bottom-right diagonal of the original'
            />
          </div>
          <h4 ref={(element) => (headingElementsRefs.current[7] = element)}>
            {mapCoordinatesNavHeaders.headingSections[7].title}
          </h4>
          <ReactMdCustomPure text={mapCoordinatesText[13]} />
          <div className={styles['san_francisco_step_4-bundle']}>
            <MapCoordinatesImg8 />
            <img
              id={styles['map_step_4_center']}
              src={require('./images/coordinates_comparison_tiles.png')}
              alt='Map view of San Francisco using the tile coordinate system with zoom 10'
            />
            <img
              id={styles['map_step_4_right']}
              src={require('./images/san_francisco_complementary_right.png')}
              alt='Complementary tile of San Francisco located on the right of the original'
            />
            <img
              id={styles['map_step_4_bottom']}
              src={require('./images/san_francisco_complementary_bottom.png')}
              alt='Complementary tile of San Francisco located on the bottom of the original'
            />
            <img
              id={styles['map_step_4_bottom_right']}
              src={require('./images/san_francisco_complementary_bottom-right.png')}
              alt='Complementary tile of San Francisco located on the bottom-right diagonal of the original'
            />
          </div>
          <h4 ref={(element) => (headingElementsRefs.current[8] = element)}>
            {mapCoordinatesNavHeaders.headingSections[8].title}
          </h4>
          <ReactMdCustomPure text={mapCoordinatesText[14]} />
          <MapCoordinatesImg9 />
          <ReactMdCustomPure text={mapCoordinatesText[15]} />
          <MapCoordinatesImg10 />
          <ReactMdCustomWithKatex text={mapCoordinatesText[16]} />
          <div className={styles['san_francisco_step_5-bundle']}>
            <img
              id={styles['map_step_5']}
              src={require('./images/tile_zoom_0_satellite.jpg')}
              alt='Satellite view of the earth using the Web Mercator Projection'
            />
            <MapCoordinatesImg11 />
          </div>
          <ReactMdCustomWithKatex text={mapCoordinatesText[17]} />
          <MapCoordinatesImg12 />
          <h4 ref={(element) => (headingElementsRefs.current[9] = element)}>
            {mapCoordinatesNavHeaders.headingSections[9].title}
          </h4>
          <ReactMdCustomPure text={mapCoordinatesText[18]} />
          <div className={styles['san_francisco_step_6-bundle']}>
            <MapCoordinatesImg13 />
            <img
              id={styles['map_step_6_center']}
              src={require('./images/coordinates_comparison_tiles.png')}
              alt='Map view of San Francisco using the tile coordinate system with zoom 10'
            />
            <img
              id={styles['map_step_6_right']}
              src={require('./images/san_francisco_complementary_right.png')}
              alt='Complementary tile of San Francisco located on the right of the original'
            />
            <img
              id={styles['map_step_6_bottom']}
              src={require('./images/san_francisco_complementary_bottom.png')}
              alt='Complementary tile of San Francisco located on the bottom of the original'
            />
            <img
              id={styles['map_step_6_bottom_right']}
              src={require('./images/san_francisco_complementary_bottom-right.png')}
              alt='Complementary tile of San Francisco located on the bottom-right diagonal of the original'
            />
          </div>
          <h4 ref={(element) => (headingElementsRefs.current[10] = element)}>
            {mapCoordinatesNavHeaders.headingSections[10].title}
          </h4>
          <ReactMdCustomPure text={mapCoordinatesText[19]} />
          <MapCoordinatesImg14 />
          <ReactMdCustomPure text={mapCoordinatesText[20]} />
          <div className={styles['san_francisco_step_7-bundle']}>
            <img
              id={styles['map_step_7_street']}
              src={require('./images/sf-street_layer.png')}
              alt='Complementary tile of San Francisco located on the right of the original'
            />
            <img
              id={styles['map_step_7_weather']}
              src={require('./images/sf-weather_layer.png')}
              alt='Complementary tile of San Francisco located on the bottom of the original'
            />
            <img
              id={styles['map_step_7_combined']}
              src={require('./images/sf-combined_layers.png')}
              alt='Complementary tile of San Francisco located on the bottom-right diagonal of the original'
            />
            <MapCoordinatesImg15 />
          </div>
          <ReactMdCustomPure text={mapCoordinatesText[21]} />
          <h3 ref={(element) => (headingElementsRefs.current[11] = element)}>
            {mapCoordinatesNavHeaders.headingSections[11].title}
          </h3>
          <ReactMdCustomPure text={mapCoordinatesText[22]} />
        </div>
        <AboutRightNavBar articleSpecifics={mapCoordinatesNavHeaders} />
      </article>
      <BottomNavButtons
        previous={{ route: '/about/intro', name: 'Introduction' }}
        next={{
          route: '/about/color-transform',
          name: 'Color Transformation Problem',
        }}
      />
    </>
  );
};

export default MapCoordinates;
