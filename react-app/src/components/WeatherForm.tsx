import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';

import WeatherMapLayers from './WeatherForm/WeatherMapLayers';
import WeatherMapZoom from './WeatherForm/WeatherMapZoom';

const WeatherForm = () => {
  const [selectedZoom, changeSelectedZoom] = useState('small');
  const [selectedMapLayer, setSelectedMapLayer] = useState('temperature');

  const { changeAddress } = useContext(WeatherContext);
  const { changeZoomLevel, changeMapLayer } = useContext(MapContext);

  const addressInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();

  useEffect(() => {
    const address = searchParams.get('address');
    const zoom = searchParams.get('zoom_level');
    const mapLayer = searchParams.get('weather_layer');

    if (
      address &&
      (zoom === 'small' || zoom === 'medium' || zoom === 'large') &&
      (mapLayer === 'clouds' ||
        mapLayer === 'precipitation' ||
        mapLayer === 'pressure' ||
        mapLayer === 'wind' ||
        mapLayer === 'temperature')
    ) {
      changeAddress(address);
      changeZoomLevel(zoom);
      changeMapLayer(mapLayer);
    } else {
      navigate('');
    }
  }, [searchParams, changeAddress, changeZoomLevel, changeMapLayer, navigate]);

  const zoomLevelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSelectedZoom(event.target.value);
  };

  const mapLayerHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMapLayer(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const searchAddress = addressInputRef.current?.value
      .trim()
      .replace(/[/.,;]/g, '');

    if (
      searchAddress &&
      (selectedZoom === 'small' ||
        selectedZoom === 'medium' ||
        selectedZoom === 'large') &&
      (selectedMapLayer === 'clouds' ||
        selectedMapLayer === 'precipitation' ||
        selectedMapLayer === 'pressure' ||
        selectedMapLayer === 'wind' ||
        selectedMapLayer === 'temperature')
    ) {
      changeAddress(searchAddress);
      changeZoomLevel(selectedZoom);
      changeMapLayer(selectedMapLayer);
      navigate(
        `?address=${searchAddress}&zoom_level=${selectedZoom}&weather_layer=${selectedMapLayer}`
      );
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input ref={addressInputRef} className='address-input' />
      <button type='submit'>Search!</button>

      <WeatherMapZoom selectedZoom={selectedZoom} onChange={zoomLevelHandler}/>
      <WeatherMapLayers selectedLayer={selectedMapLayer} onChange={mapLayerHandler}/>

    </form>
  );
};

export default WeatherForm;
