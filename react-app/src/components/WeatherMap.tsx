import React, { useState, useEffect } from 'react';

const WeatherMap = (props: { address: string | null ; onReady: (data: boolean) => void}) => {
  const serverUrl = 'http://localhost:5000';
  // const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  const [mapImage, setMapImage] = useState<undefined | string>();

  const mapType = 'Anything for now';
  const zoom = 9;
  const mapUrl = `${serverUrl}/api/weather-map?address=${props.address}&zoom=${zoom}&map__type=${mapType}`;

  useEffect(() => {
    const fetchMap = async () => {
      const res = await fetch(mapUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setMapImage(imageObjectURL);
      props.onReady(true);
    };
    if (props.address) {
      console.log('useEffect fetch running');
      fetchMap();
    }
  }, [mapUrl, props.address]);

  return (
    <>
      {props.address && (
        <img className='map' src={mapImage} alt='Weather Map' />
      )}
    </>
  );
};

export default React.memo(WeatherMap);
