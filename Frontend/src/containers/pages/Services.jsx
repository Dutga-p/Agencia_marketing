import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Services() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <h1 className="text-4xl text-center font-bold mb-8">Nuestros Servicios</h1>
        <br/>
        <div className="serviciosT">
          <h2 className="text-3xl  text-black font-bold mb-8"> <span className=" border-b-4 p-1 border-orange-button"> Reparación de Motor </span></h2>
          <p>
            Nuestro equipo altamente capacitado y experimentado se especializa en la reparación
            integral de motores. Desde diagnósticos precisos hasta soluciones efectivas, estamos
            comprometidos a devolverle la potencia y eficiencia óptimas a su vehículo.
          </p>
          <br />
          <p>
            Tiempo estimado: 1 día
          </p>
          <p className="border-teal-50">
            Precio: 1.100.000
          </p>
        </div>
        <br/>
        <div className="serviciosT">
          <h2 className="text-3xl   text-black  font-bold mb-8"> <span className=" border-b-4 p-1 border-orange-button"> Reparación del Sistema Eléctrico </span></h2>
          <p>
            Contamos con expertos en sistemas eléctricos automotrices que pueden diagnosticar y
            solucionar problemas eléctricos de manera eficiente. Desde la iluminación hasta los
            componentes electrónicos, brindamos servicios de calidad para garantizar un rendimiento
            eléctrico óptimo.
          </p>
          <br />
          <p>
            Tiempo estimado: 5 horas
          </p>
          <p className="border-teal-50">
            Precio: 300.000
          </p>
        </div>
        <br/>
        <div className="serviciosT">
          <h2 className="text-3xl  text-black font-bold mb-8"> <span className=" border-b-4 p-1 border-orange-button"> Reparación de Aire Acondicionado </span></h2>
          <p>
            Disfrute de viajes cómodos en cualquier clima con nuestro servicio de reparación de
            aire acondicionado. Nuestros técnicos especializados pueden diagnosticar y solucionar
            problemas, asegurándose de que su sistema de aire acondicionado funcione de manera
            eficiente y brinde un confort constante.
          </p>
          <br />
          <p>
            Tiempo estimado: 3 horas
          </p>
          <p className="border-teal-50">
            Precio: 250.000
          </p>
        </div>
        <br/>
        <div className="serviciosT">
          <h2 className="text-3xl  text-black font-bold mb-8"> <span className=" border-b-4 p-1 border-orange-button"> Cambio de Aceite </span></h2>
          <p>
            Mantenga su motor en óptimas condiciones con nuestro servicio de cambio de aceite.
            Utilizamos productos de alta calidad y realizamos cambios de aceite de manera eficiente,
            ayudando a prolongar la vida útil de su motor y a mantener un rendimiento óptimo.
          </p>
          <br />
          <p>
            Tiempo estimado: 1 hora
          </p>
          <p className="border-teal-50">
            Precio: 100.000
          </p>
        </div>
        <br/>
        <div className="serviciosT" >
          <h2 className="text-3xl  text-black font-bold mb-8"> <span className=" border-b-4 p-1 border-orange-button"> Mantenimiento General </span></h2>
          <p>
            Ofrecemos un servicio completo de mantenimiento para garantizar el rendimiento y la
            confiabilidad de su vehículo. Desde inspecciones regulares hasta ajustes y reemplazos
            de piezas, nuestro equipo se compromete a mantener su vehículo en las mejores condiciones
            posibles.
          </p>
          <br />
          <p>
            Tiempo estimado: 4 horas
          </p>
          <p className="border-teal-50">
            Precio: 200.000
          </p>
        </div>
        <br/>
      </div>

      <Footer />
    </Layout>
  );
}

export default Services;
