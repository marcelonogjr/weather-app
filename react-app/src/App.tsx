import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles['app-component']}>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate replace={true} to='/weather' />}/>
      </Routes>
      <div className='main-content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
