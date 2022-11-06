import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;
  
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathName]);

  return (
    <>
      <div className={styles['app-component']}>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate replace={true} to='/weather' />} />
        </Routes>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
        <Footer />
    </>
  );
};

export default App;
