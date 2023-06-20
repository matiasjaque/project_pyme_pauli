import React from 'react';
import '../styles/Home.css';
import MyNavbar from '../componts/MyNavbar.js';
import Dashboard from '../componts/Dashboard';
import Productos from '../componts/Productos';

const Home = () => {
    return (
        <div id='contenedorPrincipal'>
            <MyNavbar/>
            <Dashboard/>
            <Productos/>
        </div>
    )
}

export default Home