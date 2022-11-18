import { useRef } from 'react';

import HelpRightNavBar from '../components/Help.tsx/HelpRightNavBar';
import TheWeather from '../components/Help.tsx/TheWeather';
import AverageVisibility from '../components/Help.tsx/TheWeather/AverageVisibility';
import Cloudiness from '../components/Help.tsx/TheWeather/Cloudiness';
import HumidityAndDewPoint from '../components/Help.tsx/TheWeather/HumidityAndDewPoint';
import Pressure from '../components/Help.tsx/TheWeather/Pressure';
import RainProbability from '../components/Help.tsx/TheWeather/RainProbability';
import TemperatureAndFeelsLike from '../components/Help.tsx/TheWeather/TemperatureAndFeelsLike';
import UltravioletIndex from '../components/Help.tsx/TheWeather/UltravioletIndex';
import WeatherConditions from '../components/Help.tsx/TheWeather/WeatherConditions';
import WeatherMap from '../components/Help.tsx/TheWeather/WeatherMap';
import Wind from '../components/Help.tsx/TheWeather/Wind';
import UsingTheApp from '../components/Help.tsx/UsingTheApp';
import WhatYoullSee from '../components/Help.tsx/WhatYoullSee';
import styles from './Help.module.css';

const Help: React.FC = () => {
  const headingElementsRefs = useRef<HTMLHeadingElement[] | null[]>([]);

  const helpNavHeaders = {
    headingSections: [
      {
        id: 'this-section',
        title: "What you'll see in this section",
        type: 'main',
      },
      {
        id: 'using-app',
        title: 'Using the app',
        type: 'main',
      },
      {
        id: 'the-weather',
        title: 'The Weather',
        type: 'main',
      },
      {
        id: 'weather-conditions',
        title: 'Weather Conditions',
        type: 'sub',
      },
      {
        id: 'uvi',
        title: 'Ultraviolet Index',
        type: 'sub',
      },
      {
        id: 'humidity-dew',
        title: 'Humidity and Dew Point',
        type: 'sub',
      },
      {
        id: 'wind',
        title: 'Wind',
        type: 'sub',
      },
      {
        id: 'pressure',
        title: 'Pressure',
        type: 'sub',
      },
      {
        id: 'temperature-feels-like',
        title: 'Temperature and Feels like',
        type: 'sub',
      },
      {
        id: 'cloudiness',
        title: 'Cloudiness',
        type: 'sub',
      },
      {
        id: 'visibility',
        title: 'Average Visibility',
        type: 'sub',
      },
      {
        id: 'pop',
        title: 'Rain Probability',
        type: 'sub',
      },
      {
        id: 'weather-map',
        title: 'Weather Map',
        type: 'sub',
      },
    ],
    refs: headingElementsRefs.current,
  };

  return (
    <div className={styles['help-main']}>
      <div className={styles['help-left-navbar-space']} />
      <article className={styles['article-right_nav_bar-bundle']}>
        <div className={styles['help-content']}>
          <h2>Help</h2>
          <h3 ref={(element) => (headingElementsRefs.current[0] = element)}>
            {helpNavHeaders.headingSections[0].title}
          </h3>
          <WhatYoullSee />
          <h3 ref={(element) => (headingElementsRefs.current[1] = element)}>
            {helpNavHeaders.headingSections[1].title}
          </h3>
          <UsingTheApp />
          <h3 ref={(element) => (headingElementsRefs.current[2] = element)}>
            {helpNavHeaders.headingSections[2].title}
          </h3>
          <TheWeather />
          <h4 ref={(element) => (headingElementsRefs.current[3] = element)}>
            {helpNavHeaders.headingSections[3].title}
          </h4>
          <WeatherConditions />
          <h4 ref={(element) => (headingElementsRefs.current[4] = element)}>
            {helpNavHeaders.headingSections[4].title}
          </h4>
          <UltravioletIndex />
          <h4 ref={(element) => (headingElementsRefs.current[5] = element)}>
            {helpNavHeaders.headingSections[5].title}
          </h4>
          <HumidityAndDewPoint />
          <h4 ref={(element) => (headingElementsRefs.current[6] = element)}>
            {helpNavHeaders.headingSections[6].title}
          </h4>
          <Wind />
          <h4 ref={(element) => (headingElementsRefs.current[7] = element)}>
            {helpNavHeaders.headingSections[7].title}
          </h4>
          <Pressure />
          <h4 ref={(element) => (headingElementsRefs.current[8] = element)}>
            {helpNavHeaders.headingSections[8].title}
          </h4>
          <TemperatureAndFeelsLike />
          <h4 ref={(element) => (headingElementsRefs.current[9] = element)}>
            {helpNavHeaders.headingSections[9].title}
          </h4>
          <Cloudiness />
          <h4 ref={(element) => (headingElementsRefs.current[10] = element)}>
            {helpNavHeaders.headingSections[10].title}
          </h4>
          <AverageVisibility />
          <h4 ref={(element) => (headingElementsRefs.current[11] = element)}>
            {helpNavHeaders.headingSections[11].title}
          </h4>
          <RainProbability />
          <h4 ref={(element) => (headingElementsRefs.current[12] = element)}>
            {helpNavHeaders.headingSections[12].title}
          </h4>
          <WeatherMap />
        </div>
        <HelpRightNavBar articleSpecifics={helpNavHeaders} />
      </article>
    </div>
  );
};

export default Help;
