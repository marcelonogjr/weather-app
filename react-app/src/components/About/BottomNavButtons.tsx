import { useNavigate } from 'react-router';

import styles from './BottomNavButtons.module.css';

interface BottomNavButtonsPropsType {
  previous: {
    route: string | undefined;
    name: string;
  };
  next: {
    route: string | undefined;
    name: string;
  };
}

const BottomNavButtons = (props: BottomNavButtonsPropsType) => {
  const navigate = useNavigate();

  const previousButtonHandler = () => {
    if (props.previous.route !== undefined) {
      window.scrollTo({ top: 0 });
      navigate(props.previous.route);
    }
  };

  const nextButtonHandler = () => {
    if (props.next.route !== undefined) {
      window.scrollTo({ top: 0 });
      navigate(props.next.route);
    }
  };

  return (
    <div className={styles['bottom-nav-bundle']}>
      <button
        className={`${styles['previous-button']} ${
          props.previous.name === 'none' ? styles['none'] : ''
        }`}
        onClick={previousButtonHandler}
      >
        <span className={styles['main-span']}>{props.previous.name}</span>
        <span className={styles['sub-span']}>Previous</span>
      </button>
      <button
        className={`${styles['next-button']} ${
          props.next.name === 'none' ? styles['none'] : ''
        }`}
        onClick={nextButtonHandler}
      >
        <span className={styles['main-span']}>{props.next.name}</span>
        <span className={styles['sub-span']}>Next</span>
      </button>
    </div>
  );
};

export default BottomNavButtons;
