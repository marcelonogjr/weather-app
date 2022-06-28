import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import ThemeContextProvider from './store/ThemeContextProvider';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  const params = useLocation();
  const title: string = params.pathname.charAt(1).toUpperCase() + params.pathname.slice(2);



  return (
    <ThemeContextProvider>
      <Header title={title} />
      <Routes>
        <Route path='/' element={<Navigate replace={true} to='/weather' />}/>
      </Routes>
      <Outlet />
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;
