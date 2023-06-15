import React from 'react';
import '../styles/Home.css';
import MyNavbar from '../componts/MyNavbar.js';
import Dashboard from '../componts/Dashboard';

const Home = () => {
    return (
        <div id='contenedorPrincipal'>
            <MyNavbar/>
            <Dashboard/>
        </div>
    )
}

export default Home