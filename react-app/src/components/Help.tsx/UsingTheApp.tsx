import styles from './HelpStyles.module.css';
import MoonThemeSVG from './UsingTheApp/MoonThemeSVG';
import SunThemeSVG from './UsingTheApp/SunThemeSVG';

const UsingTheApp = () => {
  return (
    <>
      <p>
        In the{' '}
        <a
          href='https://weather.marcelojr.tech/home'
          target='_blank'
          rel='noopener noreferrer'
        >
          Home section
        </a>
        , once you start typing an address on the search bar, a list will appear
        with the best matches for a location based on the typed content
        (country, state, city, etc...).
      </p>
      <img
        id={styles['using-1-gif']}
        src={require('./UsingTheApp/help-1.gif')}
        alt='GIF showing how to use the search bar'
      />
      <p>
        Once you select an address, by clicking or using your keyboard, and
        select a zoom distance and a map layer for the weather map, you can
        search for it using those parameters.
      </p>
      <img
        id={styles['using-2-gif']}
        src={require('./UsingTheApp/help-2.gif')}
        alt='GIF showing how to change the map settings'
      />
      <p>
        After a quick loading (with the clouds moving), the specified location's
        current time (taking into consideration the location's time zone) and
        weather information will appear to you. You can select convert all units
        to the metric system by a click of a switch - this will also change the
        clock to a 24 hours format.
      </p>
      <img
        id={styles['using-3-gif']}
        src={require('./UsingTheApp/help-3.gif')}
        alt='GIF showing how to change units on the forecast'
      />
      <p>
        You can also change the visualization of the forecast between{' '}
        <span className={styles['italic']}>Current</span> (default),{' '}
        <span className={styles['italic']}>Hourly</span>, or{' '}
        <span className={styles['italic']}>Daily</span> by clicking on each
        correspondent button.
      </p>
      <img
        id={styles['using-4-gif']}
        src={require('./UsingTheApp/help-4.gif')}
        alt='GIF showing how to change forecast views between current, hourly and daily'
      />
      <p>
        If you are using a mouse to navigate this app, you can scroll
        horizontally on the Hourly and Daily forecast list by placing the cursor
        inside the designated visualization area and using the mouse wheel (or
        scroll wheel) to scroll normally (vertically).
      </p>
      <img
        id={styles['using-5-gif']}
        src={require('./UsingTheApp/help-5.gif')}
        alt='GIF showing how the horizontal scroll with the mouse'
      />
      <p>
        It's important to mention that, in case you already have called for the
        weather of a particular location using specific settings for the map, if
        you desire to change the zoom or the map layer and maintain the location
        you already looked for, it's necessary to make another call (i.e. click
        on the "Search" button again) to apply these changes.
      </p>
      <p>
        The color theme of the entire app can also be changed between{' '}
        <span className={styles['italic']}>light</span> and{' '}
        <span className={styles['italic']}>dark</span> at any given moment by
        clicking on the moon <MoonThemeSVG /> or sun <SunThemeSVG /> icons
        located on the top right region of the page (inside the navigation menu
        on smaller screens) - the default theme is chosen according to your
        browser preference settings.
      </p>
      <p>
        I deliberately chose <span className={styles['bold']}>not</span> to use
        cookies in this app, so you don't have to worry about them when using
        it.
      </p>
      <p>
        Now that you know everything there is to know about using this app, all
        that's left is to understand the information contained in it.
      </p>
    </>
  );
};

export default UsingTheApp;
