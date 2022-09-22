import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import ThemeButton from '../UI/ThemeButton';
import GitHubLogo from '../UI/GitHubLogo';
import MainLogo from '../UI/MainLogo';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  return (
    <header className={styles['header']}>
        <MainLogo />
        <nav className={styles['nav_button-bundle']}>
          <Link to='/weather' className={styles[`link${currentPath === 'weather' ? '-selected' : ''}`]}>Weather</Link>
          <Link to='/about/intro' className={styles[`link${currentPath === 'about' ? '-selected' : ''}`]}>About</Link>
          <Link to='/help' className={styles[`link${currentPath === 'help' ? '-selected' : ''}`]}>Help</Link>
        </nav>
        <GitHubLogo />
        <ThemeButton />
    </header>
  );
};

export default Header;
