import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';

import WeatherSearchBar from './WeatherForm/WeatherSearchBar';
import WeatherMapLayers from './WeatherForm/WeatherMapLayers';
import WeatherMapZoom from './WeatherForm/WeatherMapZoom';
import WeatherUnits from './WeatherForm/WeatherUnits';
import styles from './WeatherForm.module.css';

const WeatherForm = () => {
  const [selectedZoom, setSelectedZoom] = useState('small');
  const [selectedMapLayer, setSelectedMapLayer] = useState('temperature');
  const [selectedUnits, setSelectedUnits] = useState<'imperial' | 'metric'>('imperial');

  const { address, lat, lon, changeLocation, units, changeUnits } = useContext(WeatherContext);
  const { changeZoomLevel, changeMapLayer } = useContext(MapContext);

  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();

  // change url
  useEffect(() => {
    const addressParam = searchParams.get('address');
    const latParam = searchParams.get('lat');
    const lonParam = searchParams.get('lon');
    const zoomParam = searchParams.get('zoom_level');
    const mapLayerParam = searchParams.get('weather_layer');
    const unitsParam = searchParams.get('units');

    if (
      addressParam &&
      latParam &&
      lonParam &&
      (zoomParam === 'small' || zoomParam === 'medium' || zoomParam === 'large') &&
      (mapLayerParam === 'clouds' ||
        mapLayerParam === 'precipitation' ||
        mapLayerParam === 'pressure' ||
        mapLayerParam === 'wind' ||
        mapLayerParam === 'temperature') &&
      (unitsParam === 'metric' || unitsParam === 'imperial')
    ) {
      changeLocation({address: addressParam, lat: parseFloat(latParam), lon: parseFloat(lonParam)});
      changeZoomLevel(zoomParam);
      changeMapLayer(mapLayerParam);
      changeUnits(unitsParam);      
    } else {
      navigate('');
    }
  }, [searchParams, changeLocation, changeZoomLevel, changeMapLayer, changeUnits, navigate]);

  const zoomLevelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedZoom(event.target.value);
  };

  const mapLayerHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMapLayer(event.target.value);
  };

  const unitsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'metric' || event.target.value === 'imperial'){
      setSelectedUnits(event.target.value);
    }
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      address &&
      lat &&
      lon &&
      (selectedZoom === 'small' ||
        selectedZoom === 'medium' ||
        selectedZoom === 'large') &&
      (selectedMapLayer === 'clouds' ||
        selectedMapLayer === 'precipitation' ||
        selectedMapLayer === 'pressure' ||
        selectedMapLayer === 'wind' ||
        selectedMapLayer === 'temperature') &&
      (units === 'metric'|| units === 'imperial')
    ) {
      changeZoomLevel(selectedZoom);
      changeMapLayer(selectedMapLayer);
      changeUnits(selectedUnits);
      navigate(
        `?address=${address}&lat=${lat}&lon=${lon}&zoom_level=${selectedZoom}&weather_layer=${selectedMapLayer}&units=${selectedUnits}`
      );
    }
  };

  return (
    <form onSubmit={submitFormHandler}>

      <div className={styles['input-button-bundle']}>
        <WeatherSearchBar zoom={selectedZoom} mapLayer={selectedMapLayer}/>
      </div>

      <div className={styles['other-inputs-bundle']}>
        <WeatherMapZoom selectedZoom={selectedZoom} onChange={zoomLevelHandler}/>
        <WeatherUnits selectedUnits={selectedUnits} onChange={unitsChangeHandler}/>
      </div>
        <WeatherMapLayers selectedLayer={selectedMapLayer} onChange={mapLayerHandler}/>

    </form>
  );
};

export default WeatherForm;
