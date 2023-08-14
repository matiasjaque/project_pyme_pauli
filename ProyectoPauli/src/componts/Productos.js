import React from "react";
import "../styles/Productos.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import quequeImg from "../assets/productos/queque.svg";
import galletasDiseñoImg from "../assets/productos/galletas_diseño.svg";
import lenguaGatoImg from "../assets/productos/lengua_gato.svg";
import alfajorMaicenaImg from "../assets/productos/alfajor_maicena.svg";
import donasImg from "../assets/productos/donas.svg";
import mararonsImg from '../assets/productos/mararons.svg';

import alfajorGrande from '../assets/productos/alfajorG.svg';

import alfajorX6 from "../assets/productos/alfajoresPorSeis.svg";

import ModalProductos from "../componts/ModalProductos.js";

const Productos = () => {
  // variable para mostrar el modal
  const [modalShow, setModalShow] = React.useState(false);

  // datos del modal
  const [tituloModal, setTituloModal] = React.useState("");
  const [dataProductos, setDataProductos] = React.useState([]);

  // arreglo de productos estaticos
  const products = [

    {
      titulo: "Alfajores Negros",
      img: alfajorGrande,
      tiposProducto: [
        {
          tituloTipo: "Caja de 3 Alfajores Negros",
          imgTipo:
            "https://i0.wp.com/www.distribuidoracasacosta.cl/wp-content/uploads/2021/04/caja-4-alfajores-1-scaled.jpg?fit=2361%2C2560&ssl=1",
          descripcion:
            "Deliciosos alfajores rellenos de manjar y cubiertos a elección con chocolate blanco, negro o mixto, como más te guste, a demás puedes agregar un mensaje a estas delicias, ideal para cualquier ocasión. Su costo es de ",
          precio: "$4.200",
        },
        {
          tituloTipo: "Caja de 4 Alfajores Negros",
          imgTipo:
            "https://i0.wp.com/www.distribuidoracasacosta.cl/wp-content/uploads/2021/04/caja-4-alfajores-1-scaled.jpg?fit=2361%2C2560&ssl=1",
          descripcion:
            "Deliciosos alfajores rellenos de manjar y cubiertos a elección con chocolate blanco, negro o mixto, como más te guste, a demás puedes agregar un mensaje a estas delicias, ideal para cualquier ocasión. Su costo es de ",
          precio: "$5.600",
        },
        {
          tituloTipo: "Caja de 6 Alfajores Negros",
          imgTipo: alfajorX6,
          descripcion:
            "Deliciosos alfajores rellenos de manjar y cubiertos a elección con chocolate blanco, negro o mixto, como más te guste, a demás puedes agregar un mensaje a estas delicias, ideal para cualquier ocasión. Su costo es de ",
          precio: "$7.990",
        },
        {
          tituloTipo: "Caja de 9 Alfajores Negros",
          imgTipo:
            "https://falabella.scene7.com/is/image/Falabella/gsc_113607183_695528_3?wid=800&hei=800&qlt=70",
          descripcion:
            "Deliciosos alfajores rellenos de manjar y cubiertos a elección con chocolate blanco, negro o mixto, como más te guste, a demás puedes agregar un mensaje a estas delicias, ideal para cualquier ocasión. Su costo es de ",
          precio: "$12.600",
        },
      ],
    },
    
    {
      titulo: "Queque",
      img: quequeImg,
      tiposProducto: [
        {
          tituloTipo: "Queque Tradicional",
          imgTipo:
            "https://cdn.bolivia.com/sdi/2018/04/19/como-preparar-el-mejor-queque-de-vainilla-628390.jpg",
          descripcion:
            "Delicioso Queque con vainilla, con una textura suave y esponjosa. Su costo es de ",
          precio: "$6.500",
        },
        {
          tituloTipo: "Queque Marmoleado",
          imgTipo:
            "https://cdn0.recetasgratis.net/es/posts/9/0/1/queque_marmoleado_35109_600.jpg",
          descripcion:
            "Maravillosa mezcla de Cacao con vainilla que te dejará alucinando. Su costo es de ",
          precio: "$7.500",
        },
        {
          tituloTipo: "Queque de Chocolate",
          imgTipo:
            "https://www.recetas-chilenas.com/base/stock/Recipe/152-image-15-queque-de-chocolate/152-image-15-queque-de-chocolate_web.jpg",
          descripcion:
            "Delicioso queque con chispas de chocolates. Su costo es de ",
          precio: "$7.500",
        },
      ],
    },
    
    {
      titulo: "Galletas con Diseño",
      img: galletasDiseñoImg,
      tiposProducto: [
        {
          tituloTipo: "Galletas Mood",
          imgTipo:
            "https://www.gourmet.cl/wp-content/uploads/2016/09/galletas-de-navidad.jpg",
          descripcion:
            "Tenemos galles mood, donde puedes enviarnos tus frases y las ponemos en tus galletitas. Su costo es de ",
          precio: "$550 c/u",
        },
        {
          tituloTipo: "Galletas con Diseños Flork",
          imgTipo:
            "https://i.pinimg.com/originals/a9/5a/d6/a95ad6a54795b0d91a092bc366135934.jpg",
          descripcion:
            "Tenemos galles del conocido personaje flork, tú puedes elegir el mood que quieres comer o regalar, puedes elegir mínimo 2 mood y máximo 6. Su costo es de ",
          precio: "$550 c/u",
        },
      ],
    },
    {
      titulo: "Lenguas de Gato",
      img: lenguaGatoImg,
      tiposProducto: [
        {
          tituloTipo: "Lenguas de Gato",
          imgTipo:
            "https://www.divinacocina.es/wp-content/uploads/lenguas-de-gato-caseras-detalle.jpg",
          descripcion:
            "Deliciosas galletas en forma de lengua de gato con un sabor delicado y una textura crujiente. Ideales para acompañar tu café o té favorito. Viene en un formato de 6 unidades. Su costo es de ",
          precio: "$2.000",
        },
        {
          tituloTipo: "Lenguas de Gato",
          imgTipo:
            "https://www.divinacocina.es/wp-content/uploads/lenguas-de-gato-caseras-detalle.jpg",
          descripcion:
            "Deliciosas galletas en forma de lengua de gato con un sabor delicado y una textura crujiente. Ideales para acompañar tu café o té favorito. Viene en un formato de 12 unidades. Su costo es de ",
          precio: "$3.690",
        },
        {
          tituloTipo: "Lenguas de Gato",
          imgTipo:
            "https://comidaschilenas.com/wp-content/uploads/2020/05/Receta-de-galletas-lengua-de-gato-chilenas.jpg",
          descripcion:
            "Irresistibles galletas en forma de lengua de gato con un sabor exquisito y una textura delicada. Perfectas para compartir en reuniones o disfrutar como snack. Viene en un formato de 21 unidades. Su costo es de ",
          precio: "$7.000",
        },
      ],
    },
    {
      titulo: "Alfajores de Maicena",
      img: alfajorMaicenaImg,
      tiposProducto: [
        {
          tituloTipo: "Alfajores de Maicena",
          imgTipo:
            "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
          descripcion:
            "Deliciosos y coloridos alfajores de maicena con un toque delicado y un suave y dulce sabor a vainilla. Perfectos para satisfacer tus antojitos por algo dulce en cualquier momento del día. Su costo es de ",
          precio: "$550 c/u",
        },
      ],
    },
    {
      titulo: "Mini Donas",
      img: donasImg,
      tiposProducto: [
        {
          tituloTipo: "Donas con Diseño",
          imgTipo:
            "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/4QOXURZZLJB4HEKAQGJNAPRRTQ.jpg",
          descripcion:
            "Deliciosas Mini donas con diseños creativos y coloridos que agregan diversión y color a tus antojos. Su costo es de ",
          precio: "$200 c/u",
        },
      ],
    },
    {
      titulo: "Macarons",
      img: mararonsImg,
      tiposProducto: [
        {
          tituloTipo: "Pie de Limón",
          imgTipo:
            "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
          descripcion:
            "Suaves, ricos e innovadores macarons para que disfrutes de estas maravillas gourmet y puedas repetir sin inconvenientes. Su costo es de ",
          precio: "$800 c/u",
        },
      ],
    },
  ];

  const mostrarDetalles = (titulo, dataProduct) => {
    //alert(dataProduct)
    setModalShow(true);
    setTituloModal(titulo);
    setDataProductos(dataProduct);
  };

  return (
    <div id="contenedorProductos">
      <Container fluid id="contenedorSecundarioProductos">
        <Row id="filasProductos">
          {products.map((producto) =>
          <Col id="columnasProductos" xs={12} sm={6} md={4} lg={3}>
            <Card id="contenedorCardProducto">
              <Card.Img
                variant="top"
                src={producto.img}
                className="imagenProductoCard"
              />
              <Card.Body className="contenedorBodyProducto">
                <Card.Title className="tituloCardProducto">
                  {producto.titulo}
                </Card.Title>
                <Button
                  className="botonCardProducto"
                  onClick={() =>
                    mostrarDetalles(producto.titulo, producto.tiposProducto)
                  }
                >
                  Ver Detalles!
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          )}
        </Row>
      </Container>

      <ModalProductos
        show={modalShow}
        onHide={() => setModalShow(false)}
        titulo={tituloModal}
        dataProductos={dataProductos}
      />
    </div>
  );
};

export default Productos;
