import React, { useState } from "react";
import { BiUserCircle, BiEnvelope, BiLockAlt } from 'react-icons/bi';
import 'containers/styles/EstiloInicio.css';

function RegistroSection() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información a tu servidor o hacer lo que sea necesario con los datos del formulario
    console.log("Datos del formulario:", { nombre, correo, contrasena });
  };

    return (
      <section className="form-information" id="registro">
        <div className="form-information-childs">
          <h2>Iniciar Sesión</h2>
          <form className="form">
            <label>
              <BiUserCircle />
              <input type="text" placeholder="Nombres Completos" />
            </label>
            <label>
              <BiEnvelope />
              <input type="email" placeholder="Correo Electrónico" />
            </label>
            <label>
              <BiLockAlt />
              <input type="password" placeholder="Contraseña" />
            </label>
            <input type="submit" value="Iniciar" />
          </form>
        </div>
      </section>
    );
  }
  
  export default RegistroSection;  