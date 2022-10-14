import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import WeatherContext from '../../store/weather-context';
import MapContext from '../../store/map-context';

import WeatherSearchBar from './WeatherForm/WeatherSearchBar';
import WeatherMapLayers from './WeatherForm/WeatherMapLayers';
import WeatherMapZoom from './WeatherForm/WeatherMapZoom';
import styles from './WeatherForm.module.css';

const WeatherForm = () => {
  const [selectedZoom, setSelectedZoom] = useState<
    'small' | 'medium' | 'large'
  >('small');
  const [selectedMapLayer, setSelectedMapLayer] = useState<
    'clouds' | 'precipitation' | 'pressure' | 'wind' | 'temperature'
  >('temperature');

  const { address, lat, lon, changeLocation, changeUnits } =
    useContext(WeatherContext);
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

    if (
      addressParam &&
      latParam &&
      lonParam &&
      (zoomParam === 'small' ||
        zoomParam === 'medium' ||
        zoomParam === 'large') &&
      (mapLayerParam === 'clouds' ||
        mapLayerParam === 'precipitation' ||
        mapLayerParam === 'pressure' ||
        mapLayerParam === 'wind' ||
        mapLayerParam === 'temperature')
    ) {
      changeLocation({
        address: addressParam,
        lat: parseFloat(latParam),
        lon: parseFloat(lonParam),
      });
      changeZoomLevel(zoomParam);
      changeMapLayer(mapLayerParam);
    } else {
      navigate('');
    }
  }, [
    searchParams,
    changeLocation,
    changeZoomLevel,
    changeMapLayer,
    changeUnits,
    navigate,
  ]);

  const zoomLevelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedZoom(event.target.value as 'small' | 'medium' | 'large');
  };

  const mapLayerHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMapLayer(
      event.target.value as
        | 'clouds'
        | 'precipitation'
        | 'pressure'
        | 'wind'
        | 'temperature'
    );
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
        selectedMapLayer === 'temperature')
    ) {
      changeZoomLevel(selectedZoom);
      changeMapLayer(selectedMapLayer);
      navigate(
        `?address=${address}&lat=${lat}&lon=${lon}&zoom_level=${selectedZoom}&weather_layer=${selectedMapLayer}`
      );
    }
  };

  return (
    <form className={styles['weather-form']} onSubmit={submitFormHandler}>
      <div className={styles['input-button-bundle']}>
        <WeatherSearchBar zoom={selectedZoom} mapLayer={selectedMapLayer} />
      </div>
      <p>Weather Map Settings</p>
      <div className={styles['map-settings-bundle']}>
        <WeatherMapZoom
          selectedZoom={selectedZoom}
          onChange={zoomLevelHandler}
        />
        <WeatherMapLayers
          selectedLayer={selectedMapLayer}
          onChange={mapLayerHandler}
        />
      </div>
    </form>
  );
};

export default WeatherForm;
