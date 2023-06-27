import React from 'react'
import '../styles/MyNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { MdWhatsapp } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';



import logo from '../assets/logos/logo4.png';

const MyNavbar = () => {
    return (
        <Navbar id='nabvar' expand="lg">
            <Container id='contenedorNavbar' fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand id='contenedorImagenNavbar' href="/">
                    <Image id='imagenLogoNavbar' src={logo} alt="Logo" />
                </Navbar.Brand>
                
                <Nav id='contenedorRedesSocialesNavbar'>
                    <Nav.Link className='RedesSociales' href="https://wa.me/56977731753"><MdWhatsapp />WhatsApp</Nav.Link>
                    <Nav.Link className='RedesSociales' href="https://www.instagram.com/paulii_ordenes/"><FaInstagram />Instagram</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar