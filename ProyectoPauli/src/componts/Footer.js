import React from 'react'

import '../styles/Footer.css'

import logoFooter from '../assets/logos/logo4.png';

import { Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

import { MdWhatsapp } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {

    const irWtsp = () => {
        window.location.href = 'https://wa.me/56977731753';
    };

    const irInstagram = () => {
        window.location.href = 'https://www.instagram.com/paulii_ordenes/';
    }

  return (
    <div id='contenedorFooter'>
        <Row id='contenedorSecundarioFooter'>
            <Col xs={12} md={4} id='imagenLogoFooter'>
                <img
                id="imagenFooter"
                src={logoFooter}
                alt={'Logo pie de pagina'}
                />
            </Col>
            <Col xs={12} md={4}>
            <Accordion defaultActiveKey="0" id='contendorAcordionFooter'>
                <Accordion.Item eventKey="0" id='contenedorItemFooter'>
                    <Accordion.Header >Conocenos!</Accordion.Header>
                        <Accordion.Body id='textoCuerpoAcordionFooter'>
                            Texto Pau
                        </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
            </Col>
            <Col xs={12} md={4}>
                <div id='contenedorRedesSocialesFooter'>
                    <h1 id='tituloRedesSocialesFooter'>Redes Sociales</h1>
                    <button className='botonesRedesSocialesFooter' onClick={irWtsp}><MdWhatsapp id='estiloWtsFooter'/> Whattsapp</button>
                    <button className='botonesRedesSocialesFooter' onClick={irInstagram}><FaInstagram id='estiloInstagramFooter'/> Instagram</button>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Footer