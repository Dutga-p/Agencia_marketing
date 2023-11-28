import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import 'containers/styles/EstiloSucursales.css';

function Sucursales() {
  const sucursales = [
    {
      nombre: "Cali",
      direccion: "Carrera 5 #12-34, Cali",
      descripcion:
        "Venta de autos, repuestos y servicios de reparación en Cali.",
      ubicacion: "Cali, Colombia", // Ubicación de Cali 
    },
    {
      nombre: "Candelaria",
      direccion: "Calle 10 #45-67, Candelaria",
      descripcion:
        "Sucursal en Candelaria con venta de autos, repuestos y servicios de reparación.",
      ubicacion: "Candelaria, Colombia", // Ubicación de Candelaria 
    },
    {
      nombre: "Jamundí",
      direccion: "Avenida 20 #30-45, Jamundí",
      descripcion:
        "Visítenos en Jamundí para encontrar autos, repuestos y servicios de reparación.",
      ubicacion: "Jamundí, Colombia", // Ubicación de Jamundí 
    },
  ];

  return (
    <Layout>
      <Navbar />
      <div className="bg-white shadow-navbar text-center pt-28">
        <h1 className="text-6xl font-bold mb-8">Nuestras Sucursales</h1>
        <div className="grid grid-cols-1 gap-8">
          {sucursales.map((sucursal, index) => (
            <div key={index} className="Tarjeta">
              <h2 className="text-4xl text-black font-semibold mb-4">{sucursal.nombre}</h2>
              <p className="text-2xl text-gray-600 mb-4">{sucursal.direccion}</p>
              <p className="text-xl text-gray-700">{sucursal.descripcion}</p>
              <br />
              <p className="text-xl map-wrap font-bold text-orange-button">
                <a
                  href={`https://www.google.com/maps/place/${encodeURIComponent(
                    sucursal.ubicacion
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en el mapa
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Sucursales;