import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import imagen1 from "assets/img/repuestos.jpg";
import imagen2 from "assets/img/reparacion.jpg";
import imagen3 from "assets/img/img3.jpg";
import 'containers/styles/EstiloInicio.css';

function About_Me() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-10">Sobre Nosotros</h1>
          <p className="text-2xl mb-4">
            Bienvenido a nuestro concesionario, donde la excelencia y la
            dedicación se encuentran con la pasión por los vehículos. Con más
            de 3 años en el mercado, hemos sido su destino confiable para la
            compra de vehículos, piezas de calidad y servicios de reparación
            excepcionales.
          </p>
          <br/>
          <p className="text-2xl mb-4">
            En nuestro compromiso con la satisfacción del cliente, hemos
            cultivado relaciones sólidas y duraderas. Nos enorgullece ofrecer una
            amplia gama de vehículos de alta calidad, genuinas partes y
            accesorios, así como servicios de reparación profesionales y
            eficientes.
          </p>
          <br/>
          <p className="text-2xl mb-4">
            En este viaje de 3 años, hemos crecido y evolucionado gracias a la
            confianza de nuestros clientes. Estamos entusiasmados de ser
             su socio confiable en todo lo relacionado con vehículos.
          </p>
        </div>
        <br/>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={imagen3} alt="Ventas de Vehículos" className="img-galeria" />
            <img src={imagen1} alt="Repuestos" className="img-galeria" />
            <img src={imagen2} alt="Servicios de Reparación" className="img-galeria" />
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default About_Me;
