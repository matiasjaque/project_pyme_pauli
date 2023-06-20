import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import '../styles/ModalProductos.css'

const ModalProductos = (props) => {
    console.log(props.dataProductos)
    return (
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ height: '100%' }}
        >
        <Modal.Header closeButton id='headerModalProductos'>
            <Modal.Title id="contained-modal-title-vcenter" className='estilosTituloModalProductos'>
                {props.titulo}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body id='bodyModalProductos'>
            <Carousel id={'CarouselModalProducto'}>

                {props.dataProductos.map(dataProducto => (
                    <Carousel.Item id='contenedorModalProductos'>
                        <div id='contenedorSecundarioModalProductos'>
                            <h3 className='tituloModalProductos'>
                                {dataProducto.tituloTipo}
                            </h3>
                            <img
                                src= {dataProducto.imgTipo}
                                alt= {dataProducto.tituloTipo}
                                id='imagenModalProductos'
                            />
                            <p id='parrafoModalProductos'>
                                {dataProducto.descripcion}
                                <strong>{dataProducto.precio}</strong>.
                            </p>
                            
                        </div>
                        
                    </Carousel.Item>
                ))}
            </Carousel> 
        </Modal.Body>
        <Modal.Footer id='footerModalProductos'>
            <Button id='botonModalProductosCerrar' onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
        </Modal>
    );
}


export default ModalProductos