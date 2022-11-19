import styles from '../HelpStyles.module.css';

const SunThemeSVG = () => {
  return (
    <svg
      id={styles['sun-theme-svg']}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 1000'
    >
      <style>{'.help-sun-theme{fill:#f2a71e}'}</style>
      <circle className='help-sun-theme' cx={500} cy={500} r={250} />
      <path
        className='help-sun-theme'
        d='m802.1 837.5-87-87c-9.2-9.2-9.2-24 0-33.2l2.2-2.2c9.2-9.2 24-9.2 33.2 0l87 87c9.2 9.2 9.2 24 0 33.2l-2.2 2.2c-9.2 9.1-24 9.1-33.2 0zM475 952.3V829.2c0-13 10.5-23.4 23.4-23.4h3.1c13 0 23.4 10.5 23.4 23.4v123.1c0 13-10.5 23.4-23.4 23.4h-3.1c-12.9 0-23.4-10.5-23.4-23.4zM162.5 802.1l87-87c9.2-9.2 24-9.2 33.2 0l2.2 2.2c9.2 9.2 9.2 24 0 33.2l-87 87c-9.2 9.2-24 9.2-33.2 0l-2.2-2.2c-9.1-9.2-9.1-24 0-33.2zM47.7 475h123.1c13 0 23.4 10.5 23.4 23.4v3.1c0 13-10.5 23.4-23.4 23.4H47.7c-13 0-23.4-10.5-23.4-23.4v-3.1c0-12.9 10.5-23.4 23.4-23.4zM197.9 162.5l87 87c9.2 9.2 9.2 24 0 33.2l-2.2 2.2c-9.2 9.2-24 9.2-33.2 0l-87-87c-9.2-9.2-9.2-24 0-33.2l2.2-2.2c9.2-9.1 24-9.1 33.2 0zM525 47.7v123.1c0 13-10.5 23.4-23.4 23.4h-3.1c-13 0-23.4-10.5-23.4-23.4V47.7c0-13 10.5-23.4 23.4-23.4h3.1c12.9 0 23.4 10.5 23.4 23.4zM837.5 197.9l-87 87c-9.2 9.2-24 9.2-33.2 0l-2.2-2.2c-9.2-9.2-9.2-24 0-33.2l87-87c9.2-9.2 24-9.2 33.2 0l2.2 2.2c9.1 9.2 9.1 24 0 33.2zM952.3 525H829.2c-13 0-23.4-10.5-23.4-23.4v-3.1c0-13 10.5-23.4 23.4-23.4h123.1c13 0 23.4 10.5 23.4 23.4v3.1c0 12.9-10.5 23.4-23.4 23.4z'
      />
    </svg>
  );
};
export default SunThemeSVG;
