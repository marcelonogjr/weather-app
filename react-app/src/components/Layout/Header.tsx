import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import ThemeButton from '../UI/ThemeButton';
import MainLogo from '../UI/MainLogo';

const Header = (props: { title: string }) => {
  const title = props.title;

  return (
    <header>
      <div className={styles['nav_button-bundle']}>
        <MainLogo />
        <nav>
          <Link to='/weather'>Weather</Link>
          <Link to='/about'>About</Link>
          <Link to='/help'>Help</Link>
        </nav>
        <ThemeButton />
      </div>
      <h1 className={styles['page-title']}>{title}</h1>
    </header>
  );
};

export default Header;
