import React, { useCallback, useState } from 'react';

import ThemeContext from './theme-context';
import {ChildrenProps} from '../models/ThemeContextType';

const ThemeContextProvider: React.FC<ChildrenProps> = (props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(window.matchMedia("(prefers-color-scheme: dark)").matches === true ? 'dark' : 'light');
  
  const changeThemeHandler = useCallback((newTheme: 'light' | 'dark') => {
    document.documentElement.setAttribute("theme", newTheme);
    setTheme(newTheme);
  }, [])

  const contextValue = {
    theme: theme,
    changeTheme: changeThemeHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;