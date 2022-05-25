import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';

const WeatherForm = () => {
  const [selectedZoom, changeSelectedZoom] = useState('small');

  const { changeAddress } = useContext(WeatherContext);
  const { changeZoomLevel } = useContext(MapContext);

  const addressInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams()[0];
  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const address = searchParams.get('address');
    const zoom = searchParams.get('zoom_level');
    
    if (address && (zoom === 'small' || zoom === 'medium' || zoom === 'large' )) {
      changeAddress(address);
      changeZoomLevel(zoom);
    } else {
      navigate('');
    }
  }, [searchParams, changeAddress, changeZoomLevel, navigate]);

  const zoomLevelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSelectedZoom(event.target.value);
  } 

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const searchAddress = addressInputRef.current?.value
      .trim()
      .replace(/[/.,;]/g, '');

    if (searchAddress && selectedZoom) {
      navigate(`?address=${searchAddress}&zoom_level=${selectedZoom}`);
    }
  };
  
  return (
    <form onSubmit={submitFormHandler}>
      <input ref={addressInputRef} className='address-input' />

      <ul className='zoom-level'>
        <p>Map Zoom Level:</p>
        <li>
          <label>
            <input
              type='radio'
              name='zoom-level'
              value='large'
              checked={selectedZoom === 'large'}
              onChange={zoomLevelHandler}
            />
            <span>Far Away</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='zoom-level'
              value='medium'
              checked={selectedZoom === 'medium'}
              onChange={zoomLevelHandler}
            />
            <span>Medium</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='zoom-level'
              value='small'
              checked={selectedZoom === 'small'}
              onChange={zoomLevelHandler}
            />
            <span>Close</span>
          </label>
        </li>
      </ul>

      <button type='submit'>Search!</button>
    </form>
  );
};

export default WeatherForm;
