import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation_Bar from './Navigation_Bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage';
import SignPage from './SignPage';
import LoginPage from './LoginPage';
import Menu from './Menu';
import TopDeals from './TopDeals';
import Scan from './Scan';
import Cart from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation_Bar />}>
          <Route index element={<Menu />} />
          <Route path='TopDeals' element={<TopDeals />} />
          <Route path='Login' element={<LoginPage />} />
          <Route path='Scanitems' element={<Scan />} />
          <Route path='Cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
