import React from 'react';
import ReactDOM from 'react-dom/client';
import Approuter from './Approuter';
import './style.css'
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Approuter/> 
  </React.StrictMode>
);

