import { useNavigate } from 'react-router';

import styles from './BottomNavButtons.module.css';
import ButtonArrows from './BottomNavButtons/ButtonArrows';

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
    <div className={styles['top-div']}>
      <div className={styles['bottom-nav-bundle']}>
        <button
          className={`${styles['previous-button']} ${
            props.previous.name === 'none' ? styles['none'] : ''
          }`}
          onClick={previousButtonHandler}
        >
          <ButtonArrows direction='previous' />
          <div className={styles['words-bundle']}>
            <span className={styles['main-span']}>{props.previous.name}</span>
            <span className={styles['sub-span']}>Previous</span>
          </div>
        </button>
        <button
          className={`${styles['next-button']} ${
            props.next.name === 'none' ? styles['none'] : ''
          }`}
          onClick={nextButtonHandler}
        >
          <div className={styles['words-bundle']}>
            <span className={styles['main-span']}>{props.next.name}</span>
            <span className={styles['sub-span']}>Next</span>
          </div>
          <ButtonArrows direction='next' />
        </button>
      </div>
      <div className={styles['right-nav_bar-placeholder']} />
    </div>
  );
};

export default BottomNavButtons;
