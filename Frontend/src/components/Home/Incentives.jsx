const incentivos = [
  {
    nombre: 'Envío gratuito de repuestos',
    imagenSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    descripcion: "Te entregamos tu repuesto directamente a tu puerta sin costos de envío adicionales.",
  },
  {
    nombre: 'Garantía de 6 años',
    imagenSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    descripcion: "Ofrecemos una sólida garantía de 6 años para que puedas disfrutar de tu auto con total tranquilidad.",
  },
  {
    nombre: 'Garantía de 1 año en reparaciones',
    imagenSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    descripcion: "Ofrecemos una garantía de 1 año para que puedas disfrutar de tu auto con total tranquilidad, sujeto a terminos y condiciones.",
  },
];

export default function IncentivosConcesionario() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Comprometidos con la Excelencia Automotriz
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Nos enorgullece ser más que un simple concesionario de autos. Somos una plataforma dedicada a brindarte una experiencia automotriz inigualable, respaldada por nuestro compromiso con la calidad y la satisfacción del cliente. Aquí te presentamos algunas de las razones técnicas por las cuales deberías elegirnos:
            </p>
            <br />
            <ul className="list-disc text-lg list-inside mt-4 text-gray-500">
              <li>
                <strong>Selección Excepcional:</strong> Nuestra amplia gama de vehículos abarca desde modelos clásicos hasta las últimas innovaciones tecnológicas. Trabajamos con las principales marcas y ofrecemos opciones que se adaptan a todos los estilos de vida y necesidades.
              </li>
              <li className="mt-2">
                <strong>Centro de Servicio Especializado:</strong> Contamos con un equipo de técnicos altamente capacitados y equipamiento de última generación en nuestro centro de servicio. Desde mantenimientos programados hasta reparaciones complejas, aseguramos que tu vehículo reciba el más alto nivel de atención.
              </li>
              <li className="mt-2">
                <strong>Programa de Garantía Extendida:</strong> Nuestra garantía de fábrica se complementa con un programa de garantía extendida que proporciona una cobertura adicional para proteger tu inversión a lo largo del tiempo. Tu tranquilidad es nuestra prioridad.
              </li>
              <li className="mt-2">
                <strong>Asesoramiento Personalizado:</strong> Nuestros asesores de ventas están comprometidos a comprender tus necesidades específicas y proporcionarte recomendaciones personalizadas. Estamos aquí para guiarte en cada paso del proceso de selección de tu próximo vehículo.
              </li>
            </ul>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentivos.map((incentivo) => (
              <div key={incentivo.nombre} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16 text-orange-button" src={incentivo.imagenSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-medium text-gray-900">{incentivo.nombre}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentivo.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
