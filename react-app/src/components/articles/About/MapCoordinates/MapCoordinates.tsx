import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import styles from './MapCoordinates.module.css';
import 'katex/dist/katex.min.css';

import {
  mapCoordinates1,
  mapCoordinates2,
  mapCoordinates3,
  mapCoordinates4,
  mapCoordinates5,
  mapCoordinates6,
  mapCoordinates7,
  mapCoordinates8,
  mapCoordinates9,
  mapCoordinates10,
  mapCoordinates11,
  mapCoordinates12,
} from './text/mapCoordinates';
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
} from './images/MapCoordinatesSvgs';

const MapCoordinates = () => {
  return (
    <>
      <ReactMarkdown children={mapCoordinates1} />
      <div className={styles['map_distortion-bundle']}>
        <MapCoordinatesImg1 />
      </div>
      <ReactMarkdown children={mapCoordinates2} />
      <div className={styles['web_mercator_zoom_0-bundle']}>
        <MapCoordinatesImg2 />
        <img
          id={styles['tile_map_zoom_0']}
          src={require('./images/tile_zoom_0_satellite.jpg')}
          alt='Satellite view of the earth using the Web Mercator Projection'
        />
      </div>
      <ReactMarkdown children={mapCoordinates3} />
      <MapCoordinatesImg3 />
      <ReactMarkdown children={mapCoordinates4} />
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
      <ReactMarkdown
        children={mapCoordinates5}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
      <MapCoordinatesImg5 />
      <ReactMarkdown
        children={mapCoordinates6}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
      <MapCoordinatesImg6 />
      <ReactMarkdown children={mapCoordinates7} />
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
      <ReactMarkdown children={mapCoordinates8} />
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
      <ReactMarkdown children={mapCoordinates9} />
      <MapCoordinatesImg9 />
      <ReactMarkdown children={mapCoordinates10} />
      <MapCoordinatesImg10 />
      <ReactMarkdown
        children={mapCoordinates11}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
      <MapCoordinatesImg11 />
      <ReactMarkdown children={mapCoordinates12} />
      <div className={styles['san_francisco_step_6-bundle']}>
        <MapCoordinatesImg8 />
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
    </>
  );
};

export default MapCoordinates;
