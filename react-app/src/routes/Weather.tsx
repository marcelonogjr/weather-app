import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import WeatherInfo from '../components/WeatherInfo';
import WeatherMap from '../components/WeatherMap';
import WeatherContext from '../store/weather-context';

const Weather: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState('small');
  const { changeAddress } = useContext(WeatherContext);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log(zoomLevel);

  useEffect(() => {
    const address = searchParams.get('address');
    if (address) {
      changeAddress(address);
    }
  }, [searchParams, changeAddress]);

  const zoomLevelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(event.target.value);
  } 

  const submitAddressHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const searchAddress = addressInputRef.current?.value
      .trim()
      .replace(/[/.,;]/g, '');

    if (searchAddress) {
      setSearchParams(searchAddress);
      navigate(`?address=${searchAddress}`);
      changeAddress(searchAddress);
    }
  };

  return (
    <div className='main-content'>
      <p>Search for a city and get the weather below.</p>

      <form onSubmit={submitAddressHandler}>
        <input ref={addressInputRef} className='address-input' />

        <ul className='zoom-level'>
          <p>Map Zoom Level:</p>
          <li>
            <label>
              <input
                type='radio'
                name='zoom-level'
                value='large'
                checked={zoomLevel === 'large'}
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
                checked={zoomLevel === 'medium'}
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
                checked={zoomLevel === 'small'}
                onChange={zoomLevelHandler}
              />
              <span>Close</span>
            </label>
          </li>
        </ul>

        <button type='submit'>Search!</button>
      </form>

      <WeatherInfo />
      <WeatherMap zoom={zoomLevel}/>
    </div>
  );
};

export default Weather;
