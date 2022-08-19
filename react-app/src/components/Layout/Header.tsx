import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import ThemeButton from '../UI/ThemeButton';
import MainLogo from '../UI/MainLogo';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');

  return (
    <header>
      <div className={styles['nav_button-bundle']}>
        <MainLogo />
        <nav>
          <Link to='/weather' className={styles[`${currentPath === 'weather' ? 'selected' : ''}`]}>Weather</Link>
          <Link to='/about' className={styles[`${currentPath === 'about' ? 'selected' : ''}`]}>About</Link>
          <Link to='/help' className={styles[`${currentPath === 'help' ? 'selected' : ''}`]}>Help</Link>
        </nav>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
