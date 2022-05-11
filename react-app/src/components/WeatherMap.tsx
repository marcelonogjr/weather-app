import React from 'react';

const WeatherMap = (props: { address: string | null }) => {
  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  const mapType = 'Anything for now';
  const zoom = 9;
  const mapImg = `${serverUrl}/api/weather-map?address=${props.address}&zoom=${zoom}&map__type=${mapType}`;

  return (
    <>
      {props.address && <img className='map' src={mapImg} alt='Weather Map' />}
    </>
  );
};

export default React.memo(WeatherMap);
