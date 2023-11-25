import Footer from "../../components/navigation/Footer"
import { useState } from "react";
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import 'containers/styles/EstiloInicio.css';
import ReCAPTCHA from "react-google-recaptcha";

function RegistroSection() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Moverlo fuera de la función handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setError("¡Por favor, ingrese un correo electrónico válido.!");
      return;
    }

    // Limpiar mensajes de error si todo es válido
    setError("");
    // Ahora puedes enviar la información al servidor o realizar otras acciones
    console.log("Datos del formulario:", { nombre, correo, contrasena });
  };

  return (
    <div>
    <section className="form-information" id="registro">
      <div className="form-information-childs">
        <h2>Iniciar Sesión</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <BiEnvelope />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </label>
          <label>
            <BiLockAlt />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </label>
          
          {/* componente reCAPTCHA */}
          <ReCAPTCHA sitekey="6LdOcBopAAAAAP7wvy9zg2XIFd5Wfv3D7cLTf3WA" onChange={(value) => setRecaptchaValue(value)} />
          <br />
          {error && <p style={{ color: "red" }}>{"¡" + error +"!"}</p>}
          <input type="submit" value="Iniciar" />
        </form>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default RegistroSection;