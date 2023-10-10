import React from 'react';
import '../styles/Home.css';
import MyNavbar from '../componts/MyNavbar.js';
import Dashboard from '../componts/Dashboard';
import Productos from '../componts/Productos';
import Footer from '../componts/Footer.js';

const Home = () => {
    return (
        <div id='contenedorPrincipal'>
            <MyNavbar/>
            <div id="separacionSeccion"></div>
            {/* <Dashboard/> */}
            <Productos/>
            <Footer/>
        </div>
    )
}

export default Home