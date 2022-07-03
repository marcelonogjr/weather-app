import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  const params = useLocation();
  const title: string = params.pathname.charAt(1).toUpperCase() + params.pathname.slice(2);

  return (
    <div className={styles['app-component']}>
      <Header title={title} />
      <Routes>
        <Route path='/' element={<Navigate replace={true} to='/weather' />}/>
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
