import React from "react";
import "../styles/Dashboard.css";
import Carousel from "react-bootstrap/Carousel";

//manera de importar las imagenes
import promoInvierno600 from "../assets/dashboard/promoInvierno1-1.svg";
import promoInvierno900 from "../assets/dashboard/promoInvierno1-2.svg";

const Dashboard = () => {
  // arreglo de productos estaticos

  const imagenesCarusel = [
    {
      imagenDashBoard: promoInvierno600,
      nombre: "Promociones Invierno!",
      tamaño: 600,
    },
    {
      imagenDashBoard: promoInvierno900,
      nombre: "Promociones Invierno!",
      tamaño: 900,
    },
    /* {
      imagenDashBoard: promoInvierno3,
      nombre: "Promociones Invierno!",
    },
    {
      imagenDashBoard: promoInvierno4,
      nombre: "Promociones Invierno!",
    },
    {
      imagenDashBoard: promoInvierno5,
      nombre: "Promociones Invierno!",
    },
    {
      imagenDashBoard: promoInvierno6,
      nombre: "Promociones Invierno!",
    }, */
    /* {
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
    }, */
  ];

  return (
    <div id="dashboard">
      <Carousel id="contenedorCarousel">
        {imagenesCarusel
          .filter((imagenCarusel) => (
            window.innerWidth < 600 ? imagenCarusel.tamaño === 600 : imagenCarusel.tamaño === 900
          ))
          .map((imagenCarusel) => (
            <Carousel.Item id="contenedorSecundarioCarousel">
              <div id="contenedorImagenDashboard">
                <img
                  id="imagenDashboard"
                  src={imagenCarusel.imagenDashBoard}
                  alt={imagenCarusel.nombre}
                  style={{ maxWidth: "100%"  }}
                />
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
    /* <div id="dashboard">
      <Carousel id="contenedorCarousel">
        {imagenesCarusel.map((imagenCarusel) => (
          <Carousel.Item id="contenedorSecundarioCarousel">
            <div id="contenedorImagenDashboard">
              // aqui 
              <img
                id="imagenDashboard"
                src={imagenCarusel.imagenDashBoard}
                alt={imagenCarusel.nombre}
                style={{ maxWidth: "100%" }}
              />
              
            </div>
            
          </Carousel.Item>
        ))}
      </Carousel>
    </div> */
  );
};
export default Dashboard;
