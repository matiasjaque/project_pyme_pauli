import React from 'react'

import '../styles/Footer.css'

import logoFooter from '../assets/logos/logoOficial.png';

import { Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

import { MdWhatsapp } from 'react-icons/md';

import logoInsta from '../assets/logos/logoInstagram.png';




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
            <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0" id='contendorAcordionFooter'>
                <Accordion.Item eventKey="0" id='contenedorItemFooter'>
                    <Accordion.Header >Nuestra Historia</Accordion.Header>
                        <Accordion.Body id='textoCuerpoAcordionFooter'>
                        ¡Hola a todos! Soy Paulina Órdenes, la mente y manos detrás de Lina Antojitos. Desde niña, encontré mi pasión en cocinar dulces y satisfacer los paladares de mis vecinos con delicias como queques, cupcakes, donuts y más. La pandemia nos llevó a mi hermana y a mí a crear desayunos personalizados, llenando de alegría los corazones de quienes los recibían.

                        Aunque dejamos temporalmente esta aventura, mi espíritu emprendedor me impulsó a continuar en solitario. Así que decidí seguir mi pasión por cocinar y crear pastelitos dulces que transmiten amor y felicidad en cada mordisco. Lina Antojitos es mi manera de compartir esa alegría con todos ustedes. Gracias por ser parte de este dulce viaje, ¡seguiré endulzando vidas y construyendo sueños, un antojito a la vez!

                        </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
            </Col>
            <Col xs={12} md={2}>
                <div id='contenedorRedesSocialesFooter'>
                    <button className='botonesRedesSocialesFooter' onClick={irWtsp}><MdWhatsapp id='estiloWtsFooter'/> Whattsapp</button>
                    <button className='botonesRedesSocialesFooter' onClick={irInstagram}>
                        <img src={logoInsta} alt="Logo Instagram" id='estiloInstagramFooter'/>Instagram
                    </button>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Footer