import styles from '../BottomNavButtons.module.css';

const ButtonArrows = (props: { direction: 'next' | 'previous' }) => {
  return (
    <svg
      id={styles['button-arrow-svgs']}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 51 100'
    >
      {props.direction === 'previous' ? (
        <path
          d='M0 50c0-.3.1-.5.3-.7l49-49c.2-.2.4-.3.7-.3.6 0 1 .5 1 1v17.7c0 .3-.1.5-.3.7L20.9 49.2c-.2.2-.3.5-.3.8 0 .3.1.5.3.7l29.8 29.8.1.1c.2.2.3.4.3.7V99c0 .6-.5 1-1 1-.3 0-.5-.1-.7-.3l-49-49c-.3-.2-.4-.4-.4-.7z'
        />
      ) : (
        <path
          d='M51 50c0 .3-.1.5-.3.7l-49 49c-.1.2-.4.3-.7.3-.6 0-1-.5-1-1V81.3c0-.3.1-.5.3-.7l29.8-29.8c.2-.2.3-.5.3-.8 0-.3-.1-.5-.3-.7L.3 19.5l-.1-.1c-.1-.2-.2-.4-.2-.7V1c0-.6.5-1 1-1 .3 0 .5.1.7.3l49 49c.2.2.3.4.3.7z'
        />
      )}
    </svg>
  );
};

export default ButtonArrows;
