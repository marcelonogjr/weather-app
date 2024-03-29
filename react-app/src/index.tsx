import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import ThemeContextProvider from './store/ThemeContextProvider';

import App from './App';
import About from './routes/About';
import Help from './routes/Help';
import Error404 from './routes/Error404';
import Weather from './routes/Weather';
import AboutIntro from './components/About/Introduction/AboutIntro';
import MapCoordinates from './components/About/MapCoordinates/MapCoordinates';
import ColorTransformation from './components/About/ColorTransformation/ColorTransformation';
import DynamicGraphColor from './components/About/DynamicGraphColor/DynamicGraphColor';
import AboutConclusion from './components/About/Conclusion/AboutConclusion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<ThemeContextProvider><App /></ThemeContextProvider>}>
        <Route path='weather' element={<Weather />} />
        <Route path='about' element={<About />}>
          <Route path='*' element={<Navigate replace={true} to='/about/intro' />}/>
          <Route path='intro' element={<AboutIntro />}/>
          <Route path='map-tiles' element={<MapCoordinates />}/>
          <Route path='color-transform' element={<ColorTransformation />}/>
          <Route path='dynamic-graph' element={<DynamicGraphColor />}/>
          <Route path='conclusion' element={<AboutConclusion />}/>
        </Route>
        <Route path='help' element={<Help />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
