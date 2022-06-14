import { useContext } from 'react';

import WeatherContext from '../../store/weather-context';
import { DailyAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './DailyWeatherInfo.module.css';
import TimeConversor, {
  dateConversorObjectType
} from '../../others/time-conversor';
import { NewUnitsType } from '../../models/WeatherContextType';

interface DailyWeatherInfoProps {
  dailyData: DailyAPIDataType;
};

const DailyWeatherInfo = (props: DailyWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);
  
  const dateInfo = (dateConversorObject: dateConversorObjectType) => {
    return (
      <b>
        {dateConversorObject.month.numb > 9 ? dateConversorObject.month.numb : '0'+dateConversorObject.month.numb}/
        {dateConversorObject.day > 9 ? dateConversorObject.day : '0' + dateConversorObject.day}/
        {dateConversorObject.year > 9 ? dateConversorObject.year : '0' + dateConversorObject.year}
      </b>
    );
  };

  const maxTemperatureDaily: number = Math.round([...props.dailyData].map((element) => element.temp.max).reduce((previousTemp, currentTemp) => {
    return Math.max(previousTemp, currentTemp);
  }));
  const minTemperatureDaily: number = Math.round([...props.dailyData].map((element) => element.temp.min).reduce((previousTemp, currentTemp) => {
    return Math.min(previousTemp, currentTemp);
  }));
  const rangeTemperatureDaily: number = maxTemperatureDaily-minTemperatureDaily;

  const styleLiWidth = 1500 / props.dailyData.length;
  const styleLiHeight =250;
  
  const liGradientBackground = () => {
    const temperatureStops = (unit: NewUnitsType | null) => {
      if (unit === 'metric'){
        return [-40, -30, -20, -10, 0, 10, 20, 25, 30, 50];
      } else {
        return [-40, -22, -4, 14, 32, 50, 68, 77, 86, 122];
      }
    };

    const filteredStops = temperatureStops(units).filter((element, index, array) => {
      if ((element >= minTemperatureDaily && array[index - 1] < minTemperatureDaily) || (element <= maxTemperatureDaily && array[index + 1] > maxTemperatureDaily)) {
        return true;
      }
      return false
    });
    const indexFilteredStops = [temperatureStops(units).indexOf(filteredStops[0]), temperatureStops(units).indexOf(filteredStops[1])]

    const minGradientStop = 15 * filteredStops[0] / minTemperatureDaily ;
    const maxGradientStop = 100 - (5 * (temperatureStops(units)[indexFilteredStops[1] + 1] - filteredStops[1]) / (temperatureStops(units)[indexFilteredStops[1] + 1] - maxTemperatureDaily)) ;

    const gradientStops = temperatureStops(units).map((element, index, array) => {
      if (element < minTemperatureDaily) {
        return element = 0;
      }
      if (element > maxTemperatureDaily) {
        return element = 100;
      }
      if (element >= minTemperatureDaily && array[index - 1] < minTemperatureDaily) {
        return element = minGradientStop;
      }
      if (element <= maxTemperatureDaily && array[index + 1] > maxTemperatureDaily) {
        return element = maxGradientStop;
      } else {
        return element = minGradientStop + (element - filteredStops[0]) / (filteredStops[1] - filteredStops[0]) * (maxGradientStop - minGradientStop);
      }
    });
    
    return (`linear-gradient(0deg, 
      rgb(130,22,146) ${gradientStops[0]}%,
      rgb(130,87,219) ${gradientStops[1]}%,
      rgb(32,140,236) ${gradientStops[2]}%,
      rgb(32,196,232) ${gradientStops[3]}%,
      rgb(35,221,221) ${gradientStops[4]}%,
      rgb(194,255,40) ${gradientStops[5]}%,
      rgb(255,240,40) ${gradientStops[6]}%,
      rgb(255,194,40) ${gradientStops[7]}%,
      rgb(252,128,20) ${gradientStops[8]}%,
      rgb(255,0,0) ${gradientStops[9]}%`
    );
  };
  
  const dailyList = props.dailyData.map((dayElement, index, dailyArray) => {
    if (index === 0) {
      return <li key={dayElement.dt+'null'}></li>
    }
    
    const dailyDate = dateInfo(TimeConversor(dayElement.dt).date);
    
    const graphLiStyle: React.CSSProperties = {
      width: `${styleLiWidth}px`,
      height: `${styleLiHeight}px`,
      clipPath: `polygon(
        100% calc(95% - ${80 * (Math.round(dayElement.temp.min) - minTemperatureDaily) / rangeTemperatureDaily}%),
        0% calc(95% - ${(80 * (Math.round(dailyArray[index-1].temp.min) - minTemperatureDaily) / rangeTemperatureDaily)}%),
        0% calc(95% - ${(80 * (Math.round(dailyArray[index-1].temp.max) - minTemperatureDaily) / rangeTemperatureDaily)}%),
        100% calc(95% - ${80 * (Math.round(dayElement.temp.max) - minTemperatureDaily) / rangeTemperatureDaily}%)
        )`,
      transform: `translateX(${-index}px)`,
      background: liGradientBackground(),
    };
    
    const pMaxTemperatureStyle: React.CSSProperties = {
      right: `-20px`,
      top: `calc(95% - ${80 * (Math.round(dayElement.temp.max) - minTemperatureDaily) / rangeTemperatureDaily}% + 0.5% - 37.5px)`,
      transform: `translateX(${-index}px)`,
    };
    const divMaxCircleStyle: React.CSSProperties = {
      right: `-4px`,
      top: `calc(95% - ${80 * (Math.round(dayElement.temp.max) - minTemperatureDaily) / rangeTemperatureDaily}% + 0.5% - 4px)`,
      transform: `translateX(${-index}px)`,
    };
    
    const pMinTemperatureStyle: React.CSSProperties = {
      right: `-20px`,
      top: `calc(95% - ${80 * (Math.round(dayElement.temp.min) - minTemperatureDaily) / rangeTemperatureDaily}% + 0.5% - 5px)`,
      transform: `translateX(${-index}px)`,
    };
    const divMinCircleStyle: React.CSSProperties = {
      right: `-4px`,
      top: `calc(95% - ${80 * (Math.round(dayElement.temp.min) - minTemperatureDaily) / rangeTemperatureDaily}% + 0.5% - 4px)`,
      transform: `translateX(${-index}px)`,
    };

    const divInfoStyle: React.CSSProperties = {
      width: `${styleLiWidth}px`,
      top: `calc(95% - ${80 * (Math.round(dayElement.temp.min) - minTemperatureDaily) / rangeTemperatureDaily}% + 0.5% + 30px)`,
      right: `${styleLiWidth * (- 0.5)}px`,
      transform: `translateX(${-index}px)`,
    };

    return (
      <li id={styles['daily-graph']} key={`li-key_${dayElement.dt}`}>
        <div style={graphLiStyle}>
        </div>
        <div className={styles['daily-graph__dots']} style={divMaxCircleStyle}></div>
        <p className = {styles['daily-temperature']} style={pMaxTemperatureStyle}>{Math.round(dayElement.temp.max)}{units === 'metric' ? '°C' : '°F'}</p>
        <div className={styles['daily-graph__dots']} style={divMinCircleStyle}></div>
        <p className = {styles['daily-temperature']} style={pMinTemperatureStyle}>{Math.round(dayElement.temp.min)}{units === 'metric' ? '°C' : '°F'}</p>
        <div className= {styles['daily-info']} style={divInfoStyle}>
          <p>{dailyDate}</p>
          <p>Weather: {dayElement.weather[0].main}</p>
          <p>Humidity: {Math.round(dayElement.humidity)}%</p>
          <p>POP: {Math.round(dayElement.pop * 100)}%</p>
        </div>
      </li>
    )
  });

  return (
    <div className={styles['daily-bundle']}>
      <ul >
      {dailyList}
      </ul>
    </div>
  );
};

export default DailyWeatherInfo;