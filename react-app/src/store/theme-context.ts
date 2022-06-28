import React from "react";

import ThemeContextType from '../models/ThemeContextType';

const MapContext = React.createContext<ThemeContextType>({
  theme: null,
  changeTheme: (newTheme: 'light' | 'dark') => {},
});

export default MapContext;