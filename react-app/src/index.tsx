import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './routes/About';
import Help from './routes/Help';
import Error404 from './routes/Error404';
import Weather from './routes/Weather';
import WeatherContextProvider from './store/WeatherContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />}>
        <Route path='weather' element={
            <WeatherContextProvider>
              <Weather />
            </WeatherContextProvider>
          }
        >
          <Route path=':address' />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='help' element={<Help />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
