import styles from './ReactLogo.module.css';

const ReactLogo = () => {
  return (
    <a
      className={styles['react_logo-button']}
      target='_blank'
      rel='noopener noreferrer'
      href='https://reactjs.org/'
    >
      <svg
        id={styles['react_logo-svg']}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-11.5 -10.232 23 20.463'
      >
        <title>{'React (link)'}</title>
        <circle r={2.05} fill='#61dafb' />
        <g stroke='#61dafb' fill='none'>
          <ellipse rx={11} ry={4.2} />
          <ellipse rx={11} ry={4.2} transform='rotate(60)' />
          <ellipse rx={11} ry={4.2} transform='rotate(120)' />
        </g>
      </svg>
    </a>
  );
};

export default ReactLogo;
