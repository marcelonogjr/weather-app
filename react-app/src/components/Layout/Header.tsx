import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import ThemeButton from '../UI/ThemeButton';

const Header = (props: { title: string }) => {
  const title = props.title;

  return (
    <header>
      <h1>{title}</h1>
      <div className={styles['nav_button-bundle']}>
        <nav>
          <Link to='/weather'>Weather</Link>
          <Link to='/about'>About</Link>
          <Link to='/help'>Help</Link>
        </nav>

        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
