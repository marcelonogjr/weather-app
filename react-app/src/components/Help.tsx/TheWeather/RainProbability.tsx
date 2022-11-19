import { ReactMdCustomWithKatex } from '../../React-Markdown/ReactMdCustom';
import SvgRainProbIcon from '../../UI/WeatherInfo-Icons/RainProbIcon';
import styles from '../HelpStyles.module.css';

const RainProbability = () => {
  return (
    <>
      <p>
        Rain probability, or{' '}
        <span className={styles['italic']}>
          Probability of Precipitation (PoP)
        </span>
        , is an important indicator in weather forecast's predictions. In this
        app, it is present on the{' '}
        <span className={styles['italic']}>hourly</span> and{' '}
        <span className={styles['italic']}>daily</span> forecasts, and is
        represented by the following icon{' '}
        <SvgRainProbIcon rainProbValue={50} component='help' />.
      </p>
      <p>
        It's purpose, like the name suggests, is to estimate probability of
        precipitation - rain or snow - in any point at a certain location for
        the specified time. The calculation of the probability is given by:
      </p>
      <ReactMdCustomWithKatex text='$PoP = \left( C \cdot A \right) \cdot 100$ %' />
      <ReactMdCustomWithKatex
        text={`Both variables are numbers from 0 to 1, where $C$ means the confidence of the meteorologist - based on pressure variations, winds and the formation of rain or snow clouds - and $A$ means the proportional area that the probable rain/snow clouds will occupy in the sky of the analyzed region.`}
      />
    </>
  );
};

export default RainProbability;
