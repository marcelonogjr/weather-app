import { useState, useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';

import useScrollDirection from '../custom-hooks/useScrollDirection';

import styles from './Header.module.css';
import ThemeButton from '../UI/Header-Icons/ThemeButton';
import GitHubLogo from '../UI/Header-Icons/GitHubLogo';
import MainLogo from '../UI/Header-Icons/MainLogo';
import ThemeContext from '../../store/theme-context';

const Header = () => {
  const [backdropAndMenuIsVisible, setBackdropAndMenuIsVisible] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const scrollDirection = useScrollDirection();

  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const currentSubPath = location.pathname.split('/')[2];

  const backdropHandler = () => {
    setBackdropAndMenuIsVisible(!backdropAndMenuIsVisible);
  };

  return (
    <>
      <header
        className={`${styles['header']} ${
          scrollDirection === 'down' ? styles['hide'] : styles['show']
        } ${backdropAndMenuIsVisible ? styles['not-active'] : ''}`}
      >
        <div
          className={`${styles['hamburguer-menu_button']} ${
            backdropAndMenuIsVisible ? styles['not-active'] : ''
          }`}
          onClick={backdropHandler}
        >
          <svg
            id={styles['hamburguer-menu_svg']}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <style>{`.hamb-svg-0{fill:${
              themeCtx.theme === 'dark' ? '#fff' : '#000'
            }}`}</style>
            <path
              className='hamb-svg-0'
              d='M1 2h98v15H1zM1 42.5h98v15H1zM1 83h98v15H1z'
            />
          </svg>
        </div>
        <MainLogo />
        <div className={styles['horizontal-navbar']}>
          <nav className={styles['nav_button-bundle']}>
            <Link
              to='/weather'
              className={`${styles['link']} ${
                styles[`${currentPath === 'weather' ? 'link-selected' : ''}`]
              }`}
            >
              Weather
            </Link>
            <Link
              to='/about/intro'
              className={`${styles['link']} ${
                styles[`${currentPath === 'about' ? 'link-selected' : ''}`]
              }`}
            >
              About
            </Link>
            <Link
              to='/help'
              className={`${styles['link']} ${
                styles[`${currentPath === 'help' ? 'link-selected' : ''}`]
              }`}
            >
              Help
            </Link>
          </nav>
          <GitHubLogo />
          <ThemeButton />
        </div>
      </header>
      <div
        className={`${styles['hamburguer-menu']} ${
          !backdropAndMenuIsVisible ? styles['not-active'] : ''
        }`}
      >
        <div
          className={styles['hamburguer-menu_backdrop']}
          onClick={backdropHandler}
        />
        <div
          className={`${styles['hamburguer-menu_close-button']}`}
          onClick={backdropHandler}
        >
          <svg
            id={styles['hamburguer-menu_close_svg']}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <style>{`.hamb-close-svg-0{fill:${
              themeCtx.theme === 'dark' ? '#fff' : '#000'
            }}`}</style>
            <path
              transform='rotate(135 50 50)'
              className='hamb-close-svg-0'
              d='M-10.1 40.8h120.2v18.4H-10.1z'
            />
            <path
              transform='rotate(-135 50 50)'
              className='hamb-close-svg-0'
              d='M-10.1 40.8h120.2v18.4H-10.1z'
            />
          </svg>
        </div>
        <div className={styles['hamburguer-git-and-theme']}>
          <GitHubLogo />
          <ThemeButton />
        </div>
        <nav className={styles['hamburguer-nav_buttons']}>
          <Link
            to='/weather'
            className={`${styles['link-hamb']} ${
              styles[`${currentPath === 'weather' ? 'link-hamb-selected' : ''}`]
            }`}
            onClick={backdropHandler}
          >
            Weather
          </Link>
          <Link
            to='/about/intro'
            className={`${styles['link-hamb']} ${
              styles[`${currentPath === 'about' ? 'link-hamb-selected' : ''}`]
            }`}
            onClick={backdropHandler}
          >
            About
          </Link>
          <Link
            to='/about/intro'
            className={`${styles['link-hamb']} ${styles['sub']} ${
              styles[
                `${currentSubPath === 'intro' ? 'link-hamb-sub-selected' : ''}`
              ]
            } ${currentPath !== 'about' ? styles['not-active'] : ''}`}
            onClick={backdropHandler}
          >
            Intro
          </Link>
          <Link
            to='/about/map-tiles'
            className={`${styles['link-hamb']} ${styles['sub']} ${
              styles[
                `${currentSubPath === 'map-tiles' ? 'link-hamb-sub-selected' : ''}`
              ]
            } ${currentPath !== 'about' ? styles['not-active'] : ''}`}
            onClick={backdropHandler}
          >
            Map Coordinates
          </Link>
          <Link
            to='/about/color-transform'
            className={`${styles['link-hamb']} ${styles['sub']} ${
              styles[
                `${
                  currentSubPath === 'color-transform'
                    ? 'link-hamb-sub-selected'
                    : ''
                }`
              ]
            } ${currentPath !== 'about' ? styles['not-active'] : ''}`}
            onClick={backdropHandler}
          >
            Color Transformation
          </Link>
          <Link
            to='/about/dynamic-graph'
            className={`${styles['link-hamb']} ${styles['sub']} ${
              styles[
                `${
                  currentSubPath === 'dynamic-graph' ? 'link-hamb-sub-selected' : ''
                }`
              ]
            } ${currentPath !== 'about' ? styles['not-active'] : ''}`}
            onClick={backdropHandler}
          >
            Dynamic Graph Color
          </Link>
          <Link
            to='/about/conclusion'
            className={`${styles['link-hamb']} ${styles['sub']} ${
              styles[
                `${currentSubPath === 'conclusion' ? 'link-hamb-sub-selected' : ''}`
              ]
            } ${currentPath !== 'about' ? styles['not-active'] : ''}`}
            onClick={backdropHandler}
          >
            Conclusion
          </Link>
          <Link
            to='/help'
            className={`${styles['link-hamb']} ${
              styles[`${currentPath === 'help' ? 'link-hamb-selected' : ''}`]
            }`}
            onClick={backdropHandler}
          >
            Help
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
