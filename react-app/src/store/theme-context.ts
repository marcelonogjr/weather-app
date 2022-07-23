import React from "react";

import ThemeContextType from '../models/ThemeContextType';

const ThemeContext = React.createContext<ThemeContextType>({
  theme: null,
  changeTheme: (newTheme: 'light' | 'dark') => {},
});

export default ThemeContext;