import React from 'react';
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Services() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <h1 className="text-4xl font-bold mb-8">Nuestros Servicios</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Reparación de Motor</h2>
          <p>
            Nuestro equipo altamente capacitado y experimentado se especializa en la reparación
            integral de motores. Desde diagnósticos precisos hasta soluciones efectivas, estamos
            comprometidos a devolverle la potencia y eficiencia óptimas a su vehículo.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Reparación del Sistema Eléctrico</h2>
          <p>
            Contamos con expertos en sistemas eléctricos automotrices que pueden diagnosticar y
            solucionar problemas eléctricos de manera eficiente. Desde la iluminación hasta los
            componentes electrónicos, brindamos servicios de calidad para garantizar un rendimiento
            eléctrico óptimo.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Reparación de Aire Acondicionado</h2>
          <p>
            Disfrute de viajes cómodos en cualquier clima con nuestro servicio de reparación de
            aire acondicionado. Nuestros técnicos especializados pueden diagnosticar y solucionar
            problemas, asegurándose de que su sistema de aire acondicionado funcione de manera
            eficiente y brinde un confort constante.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cambio de Aceite</h2>
          <p>
            Mantenga su motor en óptimas condiciones con nuestro servicio de cambio de aceite.
            Utilizamos productos de alta calidad y realizamos cambios de aceite de manera eficiente,
            ayudando a prolongar la vida útil de su motor y a mantener un rendimiento óptimo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Mantenimiento General</h2>
          <p>
            Ofrecemos un servicio completo de mantenimiento para garantizar el rendimiento y la
            confiabilidad de su vehículo. Desde inspecciones regulares hasta ajustes y reemplazos
            de piezas, nuestro equipo se compromete a mantener su vehículo en las mejores condiciones
            posibles.
          </p>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default Services;
