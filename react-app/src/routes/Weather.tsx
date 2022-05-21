import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import WeatherInfo from "../components/WeatherInfo";
import WeatherMap from "../components/WeatherMap";
import WeatherContext from "../store/weather-context";

const Weather: React.FC = () => {
  const {changeAddress} = useContext(WeatherContext);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const address = searchParams.get('address');
    if (address) {
      changeAddress(address);
    }

  }, [searchParams, changeAddress])

  
  const submitAddressHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const searchAddress = addressInputRef.current?.value.trim().replace(/[/.,;]/g,'');

    if (searchAddress){
      setSearchParams(searchAddress);
      navigate(`?address=${searchAddress}`);
      changeAddress(searchAddress);
    }
  };


  return (
    <div className='main-content'>
      <p>Search for a city and get the weather below.</p>

      <form onSubmit={submitAddressHandler}>
        <input ref={addressInputRef} />
        <button>Search!</button>
      </form>

      <WeatherInfo />
      <WeatherMap />
    </div>
  );
};

export default Weather;
