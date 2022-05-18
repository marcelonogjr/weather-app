import {useState, useEffect} from 'react';

import Data from "../models/Data";

const WeatherInfo = (props: { address: string | null ; onReady: (data: boolean) => void}) => {
  const [newData, setNewData] = useState<Data>();

  const serverUrl = 'http://localhost:5000';
  // const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  console.log('WeatherInfo worked');
  useEffect( () => {

    if (props.address){
      fetch(`${serverUrl}/api/weather?address=${props.address}`)
      .then(response => response.json())
      .then(response => setNewData(response))
      props.onReady(true); 
    }

  }, [props.address]);

  return (
    <>
      {newData && <p>The temperature at {newData.location} is {newData.temperature}°C.</p>}
    </>
  )
}

export default WeatherInfo;