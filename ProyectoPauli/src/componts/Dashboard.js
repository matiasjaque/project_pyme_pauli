import React from "react";
import "../styles/Dashboard.css";
import Carousel from "react-bootstrap/Carousel";

//manera de importar las imagenes
import promoInvierno from "../assets/dashboard/promoInvierno.png";
import promoInvierno2 from "../assets/dashboard/promoInvierno.jpeg";
import promoFamiliar from "../assets/dashboard/promoFamiliar.png";
import promoEnamorados from "../assets/dashboard/promoEnamorados.png";
import formaEntrega from "../assets/dashboard/formasEntrega.png";
import lineaRoja from "../assets/dashboard/formasEntregaLineaRoja.png";

const Dashboard = () => {
  // arreglo de productos estaticos

  const imagenesCarusel = [
    {
      imagenDashBoard: promoInvierno,
      nombre: "Promociones Invierno!",
    },
    {
      imagenDashBoard: promoInvierno2,
      nombre: "Promociones Invierno!",
    },
    {
      imagenDashBoard: promoFamiliar,
      nombre: "Promociones Familiares!",
    },
    {
      imagenDashBoard: promoEnamorados,
      nombre: "Promociones Enamorados!",
    },
    {
      imagenDashBoard: formaEntrega,
      nombre: "Formas de Entrega!",
    },
    {
      imagenDashBoard: lineaRoja,
      nombre: "Formas de Entrega Disponibles!",
    },
  ];

  return (
    <div id="dashboard">
      <Carousel id="contenedorCarousel">
        {imagenesCarusel.map((imagenCarusel) => (
          <Carousel.Item id="contenedorSecundarioCarousel">
            <div id="contenedorImagenDashboard">
              <img
                id="imagenDashboard"
                src={imagenCarusel.imagenDashBoard}
                alt={imagenCarusel.nombre}
              />
            </div>
            
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Dashboard;
