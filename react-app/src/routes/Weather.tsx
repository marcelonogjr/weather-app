import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import WeatherInfo from "../components/WeatherInfo";
import WeatherMap from "../components/WeatherMap";

const Weather: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataIsReady, setDataIsReady] = useState<boolean>(false);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const address = searchParams.get('address');
  
  const submitAddressHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const address = addressInputRef.current?.value.trim().replace(/[/.,;]/g,'');

    if (address){
      setSearchParams(address);
      navigate(`?address=${address}`);
      setIsLoading(true);
      setDataIsReady(false);
    }
  };

  let arrDataIsReady = [false, false];

  const infoIsReadyHandler = (info: boolean) => {
    if (info){
      arrDataIsReady[0]=true;
    }
  };
  const mapIsReadyHandler = (map: boolean) => {
    if (map){
      arrDataIsReady[1]=true;
    }
  };

  if (arrDataIsReady[0] && arrDataIsReady[1]){
    setDataIsReady(true);
    arrDataIsReady = [false, false];
  }

  console.log(isLoading, dataIsReady);

  return (
    <div className='main-content'>
      <p>Search for a city and get the weather below.</p>

      <form onSubmit={submitAddressHandler}>
        <input ref={addressInputRef} />
        <button>Search!</button>
      </form>
      {isLoading && !dataIsReady && <p>Loading...</p>}
      {!isLoading && dataIsReady && <WeatherInfo address={address} onReady={infoIsReadyHandler}/>}
      {!isLoading && dataIsReady && <WeatherMap address={address} onReady={mapIsReadyHandler}/>}
    </div>
  );
};

export default Weather;
