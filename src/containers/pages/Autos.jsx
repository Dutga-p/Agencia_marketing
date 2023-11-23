import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

function Autos() {
  return (
    <div className="pt-28">
      <h1 className="text-4xl font-bold mb-8">Venta de Vehículos</h1>
      <p>
        Descubre nuestra amplia selección de vehículos de alta calidad. En nuestro concesionario, nos
        esforzamos por brindar una experiencia de compra excepcional con vehículos que cumplen con los
        más altos estándares de calidad.
      </p>
      <p>
        Ofrecemos garantías sólidas para garantizar tu tranquilidad y satisfacción. Nos enorgullece la
        transparencia en todas nuestras transacciones y estamos aquí para ayudarte a encontrar el vehículo
        perfecto que se adapte a tus necesidades y estilo de vida.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Marcas Destacadas</h2>
        <div className="flex space-x-6">
          {/* Enlaces a las páginas de marcas */}
          <Link to="/marcas/toyota">
            <img src="ruta_logo_toyota" alt="Toyota" className="cursor-pointer" />
          </Link>
          <Link to="/marcas/ford">
            <img src="ruta_logo_ford" alt="Ford" className="cursor-pointer" />
          </Link>
          <Link to="/marcas/honda">
            <img src="ruta_logo_honda" alt="Honda" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Autos;
