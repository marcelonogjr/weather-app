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
      <p>Created by Marcelo Nogueira Jr.</p>
      <MapboxLogo />
      <OpenWeatherLogo />
      <TypeScriptLogo />
      <ReactLogo />
      <ReactRouterLogo />
      <NodeJSLogo />
      <ExpressJSLogo />
      <CSSLogo />
      <GreenSockLogo />
    </footer>
  );
};

export default Footer;
