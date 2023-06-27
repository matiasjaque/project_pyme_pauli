import React from "react";
import "../styles/Dashboard.css";
import Carousel from "react-bootstrap/Carousel";

//manera de importar las imagenes
import logo from "../assets/logos/logo.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";

const Dashboard = () => {
  // arreglo de productos estaticos

  const imagenesCarusel = [
    {
      imgLogo: logo,
      nombre: "logo1",
    },
    {
      imgLogo: logo2,
      nombre: "logo 2",
    },
    {
      imgLogo: logo3,
      nombre: "logo 3",
    },
    {
      imgLogo: logo4,
      nombre: "logo 4",
    },
  ];

  return (
    <div id="dashboard">
      <Carousel id="contenedorCarousel">
        {imagenesCarusel.map((imagenCarusel) => (
          <Carousel.Item className="contenedorSecundarioCarousel">
            <img
              id="imagenDashboard"
              src={imagenCarusel.imgLogo}
              alt={imagenCarusel.nombre}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Dashboard;
