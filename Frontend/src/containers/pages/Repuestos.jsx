import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import 'containers/styles/EstiloRepuestos.css'

function Repuestos() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28 text-center mx-10">
        <h1 className="text-6xl font-bold mb-8">Repuestos de Calidad</h1>
        <br/>
        <p className="pRepuestos">
          En nuestra empresa, nos especializamos en ofrecer una amplia gama de repuestos de alta calidad para las marcas más confiables del mercado, como Ford, Toyota y Honda. Ya sea que necesites repuestos originales o de calidad equivalente, tenemos lo que necesitas para mantener tu vehículo en excelente estado.
        </p>
        <br/>
        <p className="pRepuestos">
          Trabajamos arduamente para garantizar la disponibilidad de repuestos esenciales para tu automóvil, camioneta o SUV. Nuestro catálogo incluye componentes para el motor, sistema eléctrico, frenos, suspensión, transmisión y más. Estamos comprometidos a proporcionar soluciones confiables y duraderas para satisfacer las necesidades de nuestros clientes.
        </p>
        <br/>
        <p className="pRepuestos">
          Nos enorgullece ofrecer repuestos que cumplen con los estándares más altos de calidad, brindando a nuestros clientes la tranquilidad de saber que están invirtiendo en productos confiables y duraderos. Ya sea que seas un entusiasta del bricolaje o prefieras dejar la instalación en manos de profesionales, nuestros repuestos son la elección perfecta para mantener tu vehículo en óptimas condiciones.
        </p>
        <br/>
        <p className="pRepuestos">
          Explora nuestro catálogo en línea o visita nuestro establecimiento para descubrir la variedad de repuestos disponibles. Siempre estamos listos para ayudarte a encontrar las piezas exactas que necesitas y brindarte el asesoramiento experto que mereces.
        </p>
        <br/>
      </div>
      <Footer />
    </Layout>
  );
}

export default Repuestos;
