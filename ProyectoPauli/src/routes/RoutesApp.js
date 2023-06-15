import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Ha llegado a una pagina que no existe</h1>
    </div>
  )
};

export default RoutesApp;
