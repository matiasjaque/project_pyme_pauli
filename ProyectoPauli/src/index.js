import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes/RoutesApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);


