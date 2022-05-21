import {useState, useEffect, useContext} from 'react';

import Data from "../models/Data";
import WeatherContext from '../store/weather-context';

const WeatherInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newData, setNewData] = useState<Data>();
  
  const {address, statusIsReady, isReady} = useContext(WeatherContext);
  
  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  useEffect( () => {
    const fetchInfo = () => {      
      fetch(`${serverUrl}/api/weather?address=${address}`)
      .then(response => response.json())
      .then(response => {
        statusIsReady({
          infoIsReady: true
        });
        setNewData(response)
      });
    }

    if (address){
      setIsLoading(true);
      fetchInfo();      
    }

  }, [address, statusIsReady]);

  if (isLoading && isReady) {
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && !isReady && <p>Loading...</p>}
      {!isLoading && newData && isReady && <p>The temperature at {newData.location} is {newData.temperature}°C.</p>}
    </>
  )
}

export default WeatherInfo;