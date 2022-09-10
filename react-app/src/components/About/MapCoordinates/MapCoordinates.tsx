import { useRef } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import AboutRightNavBar from '../AboutRightNavBar';
import styles from './MapCoordinates.module.css';
import 'katex/dist/katex.min.css';

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
    ],
    refs: headingElementsRefs.current,
  };


  return (
    <article>
      <div className={styles['article-content']}>
        <h2>Map Coordinates Problem</h2>
        <h3 ref={(element) => (headingElementsRefs.current[0] = element)}>
          {mapCoordinatesNavHeaders.headingSections[0].title}
        </h3>
        <ReactMarkdown children={mapCoordinatesText[0]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <div className={styles['map_distortion-bundle']}>
          <MapCoordinatesImg1 />
        </div>
        <ReactMarkdown children={mapCoordinatesText[1]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <div className={styles['web_mercator_zoom_0-bundle']}>
          <MapCoordinatesImg2 />
          <img
            id={styles['tile_map_zoom_0']}
            src={require('./images/tile_zoom_0_satellite.jpg')}
            alt='Satellite view of the earth using the Web Mercator Projection'
          />
        </div>
        <ReactMarkdown children={mapCoordinatesText[2]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <MapCoordinatesImg3 />
        <ReactMarkdown children={mapCoordinatesText[3]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <h3 ref={(element) => (headingElementsRefs.current[1] = element)}>
          {mapCoordinatesNavHeaders.headingSections[1].title}
        </h3>
        <ReactMarkdown children={mapCoordinatesText[4]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <h4 ref={(element) => (headingElementsRefs.current[2] = element)}>
          {mapCoordinatesNavHeaders.headingSections[2].title}
        </h4>
        <ReactMarkdown children={mapCoordinatesText[5]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
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
        <ReactMarkdown children={mapCoordinatesText[6]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <h3 ref={(element) => (headingElementsRefs.current[3] = element)}>
          {mapCoordinatesNavHeaders.headingSections[3].title}
        </h3>
        <ReactMarkdown children={mapCoordinatesText[7]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <h4 ref={(element) => (headingElementsRefs.current[4] = element)}>
          {mapCoordinatesNavHeaders.headingSections[4].title}
        </h4>
        <ReactMarkdown
          children={mapCoordinatesText[8]}
          components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}} /* eslint-disable-line */
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
        <h4 ref={(element) => (headingElementsRefs.current[5] = element)}>
          {mapCoordinatesNavHeaders.headingSections[5].title}
        </h4>
        <ReactMarkdown
          children={mapCoordinatesText[9]}
          components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}} /* eslint-disable-line */
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
        <MapCoordinatesImg5 />
        <ReactMarkdown
          children={mapCoordinatesText[10]}
          components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}} /* eslint-disable-line */
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
        <h4 ref={(element) => (headingElementsRefs.current[6] = element)}>
          {mapCoordinatesNavHeaders.headingSections[6].title}
        </h4>
        <ReactMarkdown children={mapCoordinatesText[11]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <MapCoordinatesImg6 />
        <ReactMarkdown children={mapCoordinatesText[12]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
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
        <ReactMarkdown children={mapCoordinatesText[13]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
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
        <ReactMarkdown children={mapCoordinatesText[14]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <MapCoordinatesImg9 />
        <ReactMarkdown children={mapCoordinatesText[15]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <MapCoordinatesImg10 />
        <ReactMarkdown
          children={mapCoordinatesText[16]}
          components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}} /* eslint-disable-line */
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
        <div className={styles['san_francisco_step_5-bundle']}>
          <img
            id={styles['map_step_5']}
            src={require('./images/tile_zoom_0_satellite.jpg')}
            alt='Satellite view of the earth using the Web Mercator Projection'
          />
          <MapCoordinatesImg11 />
        </div>
        <ReactMarkdown
          children={mapCoordinatesText[17]}
          components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}} /* eslint-disable-line */
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
        <MapCoordinatesImg12 />
        <h4 ref={(element) => (headingElementsRefs.current[9] = element)}>
          {mapCoordinatesNavHeaders.headingSections[9].title}
        </h4>
        <ReactMarkdown children={mapCoordinatesText[18]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
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
        <ReactMarkdown children={mapCoordinatesText[19]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
        <MapCoordinatesImg14 />
        <ReactMarkdown children={mapCoordinatesText[20]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
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
        <ReactMarkdown children={mapCoordinatesText[21]} components={{a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />}}/> {/* eslint-disable-line */}
      </div>
      <AboutRightNavBar articleSpecifics={mapCoordinatesNavHeaders}/>
    </article>
  );
};

export default MapCoordinates;
