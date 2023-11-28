import { useState } from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import imagen1 from "assets/img/repuestos.jpg";
import imagen2 from "assets/img/reparacion.jpg";
import imagen3 from "assets/img/img3.jpg";
import 'containers/styles/EstiloInicio.css';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function AboutMe() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [imagen3, imagen1, imagen2].map(src => ({ src }));

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-10">Sobre Nosotros</h1>
          <br />
          <p className="pa">
            Bienvenido a nuestro concesionario, donde la excelencia y la
            dedicación se encuentran con la pasión por los vehículos. Con más
            de 3 años en el mercado, hemos sido su destino confiable para la
            compra de vehículos, piezas de calidad y servicios de reparación
            excepcionales.
          </p>
          <br />
          <p className="pa">
            En nuestro compromiso con la satisfacción del cliente, hemos
            cultivado relaciones sólidas y duraderas. Nos enorgullece ofrecer una
            amplia gama de vehículos de alta calidad, genuinas partes y
            accesorios, así como servicios de reparación profesionales y
            eficientes.
          </p>
          <br />
          <p className="pa">
            En este viaje de 3 años, hemos crecido y evolucionado gracias a la
            confianza de nuestros clientes. Estamos entusiasmados de ser
            su socio confiable en todo lo relacionado con vehículos.
          </p>
        </div>
        <br />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Imagen ${index + 1}`}
              className="img-galeria"
              onClick={() => openLightbox(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={images}
            currentIndex={photoIndex}
          />
        </div>
      <Footer />
    </Layout>
  );
}

export default AboutMe;
