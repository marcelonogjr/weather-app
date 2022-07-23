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
} from './text/mapCoordinates';
import {
  MapCoordinatesImg1,
  MapCoordinatesImg2,
  MapCoordinatesImg3,
  MapCoordinatesImg4,
  MapCoordinatesImg5,
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
      <ReactMarkdown children={mapCoordinates6} />
    </>
  );
};

export default MapCoordinates;
