import { useState, useEffect, useContext } from 'react';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';

const WeatherMap = () => {
  const [mapImage, setMapImage] = useState<undefined | string>();

  const {address, statusIsReady, isReady} = useContext(WeatherContext);
  const {zoom} = useContext(MapContext);

  const serverUrl = 'http://localhost:5000';
  // const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  
  const mapType = 'Anything for now';
  // const zoom = 'small';
  const mapUrl = `${serverUrl}/api/weather-map?address=${address}&zoom=${zoom}&map__type=${mapType}`;
  
  useEffect(() => {
    const fetchMap = async () => {
      const res = await fetch(mapUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setMapImage(imageObjectURL);
      statusIsReady({
        mapIsReady: true
      });
    };
    if (address && zoom) {
      console.log('The zoom inside the context is: ', zoom);
      console.log('The map fetch is running by the way...')
      fetchMap();
    }
  }, [mapUrl, address, zoom, statusIsReady]);

  return (
    <>
      {isReady && (
        <img className='map' src={mapImage} alt='Weather Map' />
      )}
    </>
  );
};

export default WeatherMap;
