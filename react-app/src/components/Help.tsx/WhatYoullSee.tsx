import styles from './HelpStyles.module.css';

const WhatYoullSee = () => {
  return (
    <>
      <p>
        This is the Help section of this demo weather app. For more information
        on the project and some insights on how I solved some unique problems in
        developing this app, please visit the{' '}
        <a
          href='https://weather.marcelojr.tech/about/intro'
          target='_blank'
          rel='noopener noreferrer'
        >
          About section
        </a>
        .
      </p>
      <p>
        In this section you'll find information on how to use this app{' '}
        <span className={styles['bold-italic']}>and</span> also something that
        most weather services take for granted:{' '}
        <span className={styles['italic']}>the weather itself</span> - essential
        information only, without getting too much into it (this should be a
        light reading).
      </p>
    </>
  );
};

export default WhatYoullSee;
