import { useContext } from 'react';

import styles from '../MapCoordinates.module.css';
import ThemeContext from '../../../../store/theme-context';

export const DynamicGraphColorImg1 = () => {
  const { theme } = useContext(ThemeContext);

  const genericColor = theme === 'light' ? '#000000' : '#ffffff';

  return <></>;
};
