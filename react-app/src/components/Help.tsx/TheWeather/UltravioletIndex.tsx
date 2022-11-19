import SvgUVIIcons from '../../UI/WeatherInfo-Icons/UVIIcons';
import styles from '../HelpStyles.module.css';

const UltravioletIndex = () => {
  return (
    <>
      <p>
        As a way to measure the ultraviolet radiation level caused by the sun in
        a particular location and time, the UV Index purpose is to inform, using
        a simple scale, about the possible skin and eye damage caused by the sun
        and the necessity to adopt protective measures.
      </p>
      <p>
        The background of this app's UV index icons follows the international
        color code for risk of damage from unprotected sun exposure, and they
        are categorized as follows:
      </p>
      <div className={styles['uvi-containers']}>
        <div className={styles['uvi-category-container']}>
          <span>None</span>
          <div className={styles['uvi-icons']}>
            <SvgUVIIcons uvIndex={0} component='help' />
          </div>
        </div>
        <div className={styles['uvi-category-container']}>
          <span>Low</span>
          <div className={styles['uvi-icons']}>
            <SvgUVIIcons uvIndex={1} component='help' />
            <SvgUVIIcons uvIndex={2} component='help' />
          </div>
        </div>
        <div className={styles['uvi-category-container']}>
          <span>Moderate</span>
          <div className={styles['uvi-icons']}>
            <SvgUVIIcons uvIndex={3} component='help' />
            <SvgUVIIcons uvIndex={4} component='help' />
            <SvgUVIIcons uvIndex={5} component='help' />
          </div>
        </div>
        <div className={styles['uvi-category-container']}>
          <span>High</span>
          <div className={styles['uvi-icons']}>
            <SvgUVIIcons uvIndex={6} component='help' />
            <SvgUVIIcons uvIndex={7} component='help' />
          </div>
        </div>
        <div className={styles['uvi-category-container']}>
          <span>Very High</span>
          <div className={styles['uvi-icons']}>
            <SvgUVIIcons uvIndex={8} component='help' />
            <SvgUVIIcons uvIndex={9} component='help' />
            <SvgUVIIcons uvIndex={10} component='help' />
          </div>
        </div>
        <div className={styles['uvi-category-container']}>
          <span>Extreme</span>
          <div className={styles['uvi-icons']}>
            <SvgUVIIcons uvIndex={12} component='help' />
          </div>
        </div>
      </div>
      <p>
        <a
          href='https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index'
          target='_blank'
          rel='noopener noreferrer'
        >
          According to the World Health Organization
        </a>
        , the recommended actions to take depending on the current local UVI are
        as follows:
      </p>
      <ul>
        <li>
          <p>
            None or Low: Nothing to worry about, it's safe to go out outside
            with no sun protection;
          </p>
        </li>
        <li>
          <p>
            Moderate or High: You should seek shade whenever possible, wear
            sun-protective clothing and use sunscreen;
          </p>
        </li>
        <li>
          <p>
            Very High and Extreme: You should avoid being outside and, if you do
            go outside, make sure to wear protection.
          </p>
        </li>
      </ul>
      <p>
        If you want more details on how UV radiation propagates and the dangers
        associated with high exposure to it,{' '}
        <a
          href='https://apps.who.int/iris/bitstream/handle/10665/42459/9241590076.pdf?sequence=1&isAllowed=y'
          target='_blank'
          rel='noopener noreferrer'
        >
          check this out
        </a>
        .
      </p>
    </>
  );
};

export default UltravioletIndex;
