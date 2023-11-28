import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import Footer from 'components/navigation/Footer';
import Navbar from 'components/navigation/Navbar';
import 'containers/styles/EstiloAutos.css'
import Toyota from 'assets/img/Toyota.jpg';
import Ford from 'assets/img/Ford.png';
import Honda from 'assets/img/Honda.jpg';

function Autos() {
  return (
    <div>
      <Navbar/>
        <div className="pt-28 text-center ml-10 mr-10">
          <div className='InfoVentas' >
            <h1 className="text-6xl font-bold mb-16">Venta de Vehículos</h1>
            <div className='InfoVentas'>
            <p className='text-2xl font-sans'>
              Descubre nuestra amplia selección de vehículos de alta calidad. En nuestro concesionario, nos
              esforzamos por brindar una experiencia de compra excepcional con vehículos que cumplen con los
              más altos estándares de calidad.
            </p>
            </div>
            <br />
              <br />
            <div className='InfoVentas'>
            <p className='text-2xl font-sans' >
              Ofrecemos garantías sólidas para garantizar tu tranquilidad y satisfacción. Nos enorgullece la
              transparencia en todas nuestras transacciones y estamos aquí para ayudarte a encontrar el vehículo
              perfecto que se adapte a tus necesidades y estilo de vida.
            </p>
            </div>
            <br />
              <br />
            <div className='InfoVentas'>
            <p className='text-2xl font-sans'>
              Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, transferencias bancarias y financiamiento.
              Consulta con nuestro equipo de ventas para obtener más detalles sobre las opciones de pago disponibles.
            </p>
          </div>
          <br />
          </div>
          <br />
          <br />
          <div className="InfoVentas">
            <h2 className="text-6xl text-black font-bold mb-4"> Marcas </h2>
            <br />
            <div className="flex flex-col space-y-4">
              {/* Toyota */}
              <div className='InfoVentas' >
                <div className="icon">
                  <h2 className="text-4xl text-black font-bold ml-4">Toyota</h2>
                  <Link to="/toyota">
                    <img src={Toyota} alt="Toyota" className="cursor-pointer ml-6 w-36 h-28" />
                  </Link>
                </div>
                <br />
                <p className="text-2xl mb-4">
                  Descubre la durabilidad y eficiencia en nuestros modelos Toyota. Conocidos por su calidad y rendimiento confiable.
                </p>
                <br />
                <p className="text-2xl mb-4">
                  Toyota es una marca de automóviles japonesa conocida por su reputación de calidad, durabilidad y confiabilidad. Fundada en 1937, Toyota es uno de los fabricantes de automóviles más grandes del mundo. La marca es reconocida por una amplia gama de vehículos, desde autos compactos hasta camiones y SUVs.
                </p>
                <br />
                <p className="text-2xl mb-4" >
                Los modelos de Toyota suelen destacar por su diseño funcional, rendimiento sólido y características avanzadas de seguridad.
                </p>
                <br />
                <p className="text-2xl mb-4" >
                Toyota ha sido pionera en tecnologías innovadoras, destacando por sus avances en eficiencia de combustible y desarrollo de vehículos híbridos, como el icónico Toyota Prius.
                </p>
                <br />
                <p className="text-2xl mb-4" >
                  Para mirar los modelos disponibles haz click en el logo de la marca
                </p>
              </div>
              <br/>
              {/* Ford */}
              <div className='InfoVentas' >
                <div className="icon" >
                  <h2 className="text-4xl text-black font-bold ml-4" > Ford </h2>
                  <Link to="/marcas/ford">
                    <img src={Ford} alt="Ford" className="cursor-pointer ml-6 w-44 h-28" />
                  </Link>
                  </div>  
                  <br/>
                  <p className="text-2xl mb-4">
                    Explora la innovación y el rendimiento en nuestra selección de vehículos Ford. Diseñados para emocionar y superar expectativas.
                  </p>
                  <br/>
                  <p className="text-2xl mb-4">
                    Ford es una marca de automóviles estadounidense con una rica historia en la industria automotriz. Fundada por Henry Ford en 1903, la compañía ha desempeñado un papel fundamental en la evolución del transporte motorizado. Ford es conocida por sus innovaciones, entre las que se destaca la introducción de la producción en cadena, que revolucionó la fabricación de automóviles.
                  </p>
                  <br/>
                  <p className="text-2xl mb-4">
                    Ford ha producido una amplia variedad de vehículos, desde automóviles compactos hasta camiones y SUVs robustos. La marca se ha asociado con modelos emblemáticos como el Ford Mustang y la línea de camiones Ford F-Series.
                  </p>
                  <br/>
                  <p className="text-2xl mb-4">
                   También ha incorporando características avanzadas en sus vehículos y explorando el desarrollo de vehículos eléctricos. Con un enfoque en el rendimiento, la durabilidad y la versatilidad.
                  </p>
                  <br/>
                  <p className="text-2xl mb-4" >
                    Para mirar los modelos disponibles haz click en el logo de la marca
                  </p>
              </div>
              <br/>
              {/* Honda */}
              <div className='InfoVentas' >
                <div className='icon'>
                  <h2 className="text-4xl text-black font-bold ml-4">Honda</h2>
                  <Link to="/marcas/honda">
                    <img src={Honda} alt="Honda" className="cursor-pointer ml-6 w-44 h-28" />
                  </Link>
                </div>
                <br/>
                <p className="text-2xl mb-4">
                  Descubre la confiabilidad y la tecnología avanzada en nuestros autos Honda. Diseñados para ofrecer comodidad y eficiencia.
                </p>
                <p className="text-2xl mb-4">
                  Honda es una marca japonesa reconocida por su excelencia en la fabricación de automóviles, motocicletas y equipos de energía. Fundada en 1948 por Soichiro Honda, la compañía ha sido un líder innovador en la industria automotriz.
                </p>
                <p className="text-2xl mb-4">
                  Con una reputación de confiabilidad y eficiencia, los vehículos Honda son conocidos por su calidad de construcción y rendimiento duradero. La marca ofrece una amplia gama de automóviles, desde compactos y sedanes hasta SUVs y vehículos híbridos.
                </p>
                <p className="text-2xl mb-4">
                  Para mirar los modelos disponibles haz click en el logo de la marca
                </p>
              </div>
              <br/>
            </div>
          </div>
        </div>
        <br/>
      <Footer/>
    </div>
  );
}

export default Autos;
