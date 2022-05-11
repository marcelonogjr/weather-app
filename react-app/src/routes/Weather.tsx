import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import WeatherMap from "../components/WeatherMap";
import Data from "../models/Data";

const Weather: React.FC = () => {
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [newData, setNewData] = useState<Data>();
  const navigate = useNavigate();

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  const address = searchParams.get('address');
  useEffect( () => {

    if (address){
      fetch(`${serverUrl}/api/weather?address=${address}`)
      .then(response => response.json())
      .then(response => setNewData(response))
    }

  }, [address]);
  
  const submitAddressHandler = async(event: React.FormEvent) => {
    event.preventDefault();
    const address = addressInputRef.current?.value.trim().replace(/[/.,;]/g,'');

    if (address){
      setSearchParams(address);
      navigate(`?address=${address}`);
    }
  };

  return (
    <div className='main-content'>
      <p>Search for a city and get the weather below.</p>

      <form onSubmit={submitAddressHandler}>
        <input ref={addressInputRef} />
        <button>Search!</button>
      </form>

      {newData && <p>The temperature at {newData.location} is {newData.temperature}°C.</p>}
      <WeatherMap address={address} />
    </div>
  );
};

export default Weather;
