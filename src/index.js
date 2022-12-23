import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterHotel from './components/RegisterHotel';
import Login from './components/Login';
import BodyIndex from './components/BodyIndex';
import RegisterCustomer from './components/RegisterCustomer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        
        <Route path='/' element={<App />}>
          <Route path='/' element={<BodyIndex />} />
          <Route path='/register-hotel' element={<RegisterHotel />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register-customer' element={<RegisterCustomer />} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
