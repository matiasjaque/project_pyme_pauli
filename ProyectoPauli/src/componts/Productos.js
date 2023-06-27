import React from "react";
import "../styles/Productos.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import alfajoresNegrosImg from "../assets/productos/alfajores_negros.png";
import alfajoresBlancosImg from "../assets/productos/alfajores_blancos.png";
import quequeImg from "../assets/productos/queque.png";
import pieLimonImg from "../assets/productos/pie_limon.png";
import tartaYogurtImg from "../assets/productos/tarta_yoguth.png";
import galletasDiseñoImg from "../assets/productos/galletas_diseño.png";
import lenguaGatoImg from "../assets/productos/lengua_gato.png";
import alfajorMaicenaImg from "../assets/productos/alfajor_maicena.png";
import donasImg from "../assets/productos/donas.png";

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
      img: alfajoresNegrosImg,
      tiposProducto: [
        {
          tituloTipo: "Caja de 4 Alfajores Negros",
          imgTipo:
            "https://i0.wp.com/www.distribuidoracasacosta.cl/wp-content/uploads/2021/04/caja-4-alfajores-1-scaled.jpg?fit=2361%2C2560&ssl=1",
          descripcion:
            "Deliciosos alfajores de manjar con cobertura de chocolate negro, presentados en un formato de 4 unidades. Su costo es de ",
          precio: "$3.990",
        },
        {
          tituloTipo: "Caja de 6 Alfajores Negros",
          imgTipo:
            "https://falabella.scene7.com/is/image/Falabella/gsc_113607183_695528_3?wid=800&hei=800&qlt=70",
          descripcion:
            "Deliciosos alfajores de manjar con cobertura de chocolate negro, presentados en un formato de 6 unidades. Su costo es de ",
          precio: "$5.990",
        },
      ],
    },
    {
      titulo: "Alfajores Blancos",
      img: alfajoresBlancosImg,
      tiposProducto: [
        {
          tituloTipo: "Caja de 4 Alfajores Blancos",
          imgTipo:
            "https://www.fundacionincluir.cl/wp-content/uploads/2019/07/Alfajor-caja-4-unid-2.500.jpg",
          descripcion:
            "Deliciosos alfajores de manjar con cobertura de chocolate blanco, presentados en un formato de 4 unidades. Su costo es de ",
          precio: "$3.990",
        },
        {
          tituloTipo: "Caja de 6 Alfajores Blancos",
          imgTipo:
            "https://tofuu.getjusto.com/orioneat-local/resized2/WJnrC2W9vQsARmJWh-1200-1200.webp",
          descripcion:
            "Deliciosos alfajores de manjar con cobertura de chocolate blanco, presentados en un formato de 6 unidades. Su costo es de ",
          precio: "$5.990",
        },
        {
          tituloTipo: "Caja de 12 Alfajores Blancos",
          imgTipo:
            "https://tofuu.getjusto.com/orioneat-prod/7ftMWWL4EtPgCEp4q-mix%20nuez.jpg",
          descripcion:
            "Deliciosos alfajores de manjar con cobertura de chocolate blanco, presentados en un formato de 12 unidades. Su costo es de ",
          precio: "$9.990",
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
            "Un delicioso queque tradicional con un sabor suave y esponjoso que te transportará a tus mejores recuerdos. Su costo es de ",
          precio: "$3.990",
        },
        {
          tituloTipo: "Queque Marmoleado",
          imgTipo:
            "https://cdn0.recetasgratis.net/es/posts/9/0/1/queque_marmoleado_35109_600.jpg",
          descripcion:
            "Un fascinante queque marmoleado con una combinación perfecta de sabores a chocolate y vainilla. Su costo es de ",
          precio: "$5.990",
        },
        {
          tituloTipo: "Queque de Chocolate",
          imgTipo:
            "https://www.recetas-chilenas.com/base/stock/Recipe/152-image-15-queque-de-chocolate/152-image-15-queque-de-chocolate_web.jpg",
          descripcion:
            "Un exquisito queque de chocolate que te deleitará con cada bocado. Su textura esponjosa y su intenso sabor a chocolate lo convierten en una irresistible tentación. Su costo es de ",
          precio: "$9.990",
        },
        {
          tituloTipo: "Queque de Zanahoria",
          imgTipo:
            "https://mividaenundulce.files.wordpress.com/2016/05/dsc_4932.jpg?w=584",
          descripcion:
            "Un queque de zanahoria jugoso y lleno de sabor, con un toque de especias que lo hacen irresistible. Perfecto para los amantes de los postres con un toque saludable. Su costo es de ",
          precio: "$9.990",
        },
      ],
    },
    {
      titulo: "Pie Limón",
      img: pieLimonImg,
      tiposProducto: [
        {
          tituloTipo: "Pie de Limón",
          imgTipo:
            "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
          descripcion:
            "Un delicioso pie de limón con una mezcla perfecta de sabores cítricos y dulzura. Su costo es de ",
          precio: "$5.990",
        },
        {
          tituloTipo: "Mini Pie de Limón",
          imgTipo: "https://i.ytimg.com/vi/gh1Ax3LQoL4/hqdefault.jpg",
          descripcion:
            "Un encantador mini pie de limón, ideal para disfrutar en porciones individuales. Viene en un formato de 6 unidades. Su costo es de ",
          precio: "$5.990",
        },
      ],
    },
    {
      titulo: "Tarta Yoguth",
      img: tartaYogurtImg,
      tiposProducto: [
        {
          tituloTipo: "Tartaleta de Yogurth Clásica",
          imgTipo: "https://i.ytimg.com/vi/729v8zmunMQ/maxresdefault.jpg",
          descripcion:
            "Una deliciosa tartaleta de yogurth con un sabor clásico y refrescante. El equilibrio perfecto entre cremosidad y dulzura. Su costo es de ",
          precio: "$6.990",
        },
        {
          tituloTipo: "Tartaleta de Yogurth con Frutas",
          imgTipo:
            "https://canalcocina.es/medias/_cache/zoom-34fcdb62dd6af2d6324037db8c141ad4-920-518.jpg",
          descripcion:
            "Una exquisita tartaleta de yogurth decorada con una variedad de frutas frescas. Una explosión de sabores y colores en cada bocado. Su costo es de ",
          precio: "$7.990",
        },
      ],
    },
    {
      titulo: "Galletas con Diseño",
      img: galletasDiseñoImg,
      tiposProducto: [
        {
          tituloTipo: "Galletas con Diseños Navideños",
          imgTipo:
            "https://www.gourmet.cl/wp-content/uploads/2016/09/galletas-de-navidad.jpg",
          descripcion:
            "Un surtido de 15 galletas con diseños navideños que te harán entrar en el espíritu festivo. Perfectas para compartir y decorar tu mesa en esta temporada. Su costo es de ",
          precio: "$8.990",
        },
        {
          tituloTipo: "Galletas con Diseños Flork",
          imgTipo:
            "https://i.pinimg.com/originals/a9/5a/d6/a95ad6a54795b0d91a092bc366135934.jpg",
          descripcion:
            "Unas encantadoras 15 galletas con diseños del divertido personaje animado Flork. Cada galleta está decorada con detalle y creatividad, brindando alegría a tus eventos y celebraciones. Su costo es de ",
          precio: "$9.990",
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
            "Deliciosas galletas en forma de lengua de gato con un sabor delicado y una textura crujiente. Ideales para acompañar tu café o té favorito. Viene en un formato de 10 unidades. Su costo es de ",
          precio: "$3.990",
        },
        {
          tituloTipo: "Lenguas de Gato",
          imgTipo:
            "https://comidaschilenas.com/wp-content/uploads/2020/05/Receta-de-galletas-lengua-de-gato-chilenas.jpg",
          descripcion:
            "Irresistibles galletas en forma de lengua de gato con un sabor exquisito y una textura delicada. Perfectas para compartir en reuniones o disfrutar como snack. Viene en un formato de 25 unidades. Su costo es de ",
          precio: "$9.990",
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
            "Deliciosos alfajores de maicena con un suave sabor a vainilla y una textura delicada que se deshace en tu boca. Perfectos para disfrutar en cualquier momento del día. Viene en un formato de 10 unidades. Su costo es de ",
          precio: "$5.990",
        },
        {
          tituloTipo: "Alfajores de Maicena",
          imgTipo: "https://i.ytimg.com/vi/gh1Ax3LQoL4/hqdefault.jpg",
          descripcion:
            "Irresistibles alfajores de maicena con un exquisito relleno de dulce de leche y una textura crujiente por fuera. Ideales para compartir con familia y amigos o como regalo especial. Viene en un formato de 25 unidades. Su costo es de ",
          precio: "$12.990",
        },
      ],
    },
    {
      titulo: "Donas",
      img: donasImg,
      tiposProducto: [
        {
          tituloTipo: "Donas con Diseño",
          imgTipo:
            "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/4QOXURZZLJB4HEKAQGJNAPRRTQ.jpg",
          descripcion:
            "Deliciosas donas con diseños creativos y coloridos que agregan diversión a tu experiencia de degustación. Cada dona está decorada a mano con detalles encantadores y viene en un formato de 6 unidades. Disfruta de la combinación perfecta entre su esponjosa textura y sabores irresistibles. Su costo es de ",
          precio: "$4.990",
        },
      ],
    },
    {
      titulo: "Donas",
      img: donasImg,
      tiposProducto: [
        {
          tituloTipo: "Pie de Limón",
          imgTipo:
            "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
          descripcion:
            "Un delicioso pie de limón con una mezcla perfecta de sabores cítricos y dulzura. Su costo es de ",
          precio: "$5.990",
        },
        {
          tituloTipo: "Mini Pie de Limón",
          imgTipo: "https://i.ytimg.com/vi/gh1Ax3LQoL4/hqdefault.jpg",
          descripcion:
            "Un encantador mini pie de limón, ideal para disfrutar en porciones individuales. Viene en un formato de 6 unidades. Su costo es de ",
          precio: "$5.990",
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
            <Card>
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
