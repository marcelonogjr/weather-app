import MapboxLogo from '../UI/Footer-Icons/MapboxLogo';
import OpenWeatherLogo from '../UI/Footer-Icons/OpenWeatherLogo';
import TypeScriptLogo from '../UI/Footer-Icons/TypeScriptLogo';
import ReactLogo from '../UI/Footer-Icons/ReactLogo';
import styles from './Footer.module.css';
import NodeJSLogo from '../UI/Footer-Icons/NodeJSLogo';
import ExpressJSLogo from '../UI/Footer-Icons/ExpressJSLogo';
import ReactRouterLogo from '../UI/Footer-Icons/ReactRouterLogo';
import GreenSockLogo from '../UI/Footer-Icons/GreenSockLogo';
import CSSLogo from '../UI/Footer-Icons/CSSLogo';

const Footer = () => {
  return (
    <footer className={styles['page-footer']}>
      <div className={styles['footer-description']}>
        <p>
          This is a fully functional demo weather app.
          <br />
          Developed by{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://marcelojr.dev/'
          >
            Marcelo Nogueira Jr.
          </a>
        </p>
      </div>
      <div className={styles['technologies-bundle']}>
        <div className={styles['weather-geo']}>
          <p>Geolocation & Weather</p>
          <div className={styles['weather-geo_logos']}>
            <MapboxLogo />
            <OpenWeatherLogo />
          </div>
        </div>
        <div className={styles['main-language']}>
          <p>
            Main Programming
            <br />
            Language
          </p>
          <div className={styles['main-language_logos']}>
            <TypeScriptLogo />
          </div>
        </div>
        <div className={styles['frontend-bundle']}>
          <p>Frontend Technologies</p>
          <div className={styles['frontend-main']}>
            <ReactLogo />
            <ReactRouterLogo />
            <div className={styles['frontend-styling']}>
              <p>Styling & Animations</p>
              <div className={styles['frontend-styling_logos']}>
                <CSSLogo />
                <GreenSockLogo />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['backend']}>
          <p>Backend Technologies</p>
          <div className={styles['backend_logos']}>
            <NodeJSLogo />
            <ExpressJSLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
