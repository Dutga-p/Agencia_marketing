import axios from "axios";
import { useState } from "react";
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "components/navigation/Footer";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  

  const getSession = () => {
    fetch("/api/session/", {
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.isAuthenticated) {
          this.setState({
            isAuthenticated: true,
          });
        } else {
          this.setState({
            isAuthenticated: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = (event) => {
    event.preventDefault();
    // Verifica si el usuario ya está autenticado
    if (this.state.isAuthenticated) {
      return;
    }
  
    // Valida los datos del formulario
    if (!correo || !contrasena) {
      setError("¡Por favor, complete todos los campos!");
      return;
    }
  
    // Realiza la solicitud HTTP
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({
        correo,
        contrasena,
      }),
    })
      .then(this.isResponseOk)
      .then((data) => {
        console.log(data);
        if (data.success) {
          this.setState({
            isAuthenticated: true,
          });
        } else {
          setError(data.message || "Error en el inicio de sesión. Verifica tus datos.");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error en la conexión. Intenta de nuevo más tarde.");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!correo || !contrasena || !recaptchaValue) {
      setError("¡Por favor, complete todos los campos y haga el reCAPTCHA!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setError("¡Por favor, ingrese un correo electrónico válido!");
      return;
    }

    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/iniciar_sesion/", {
        correo,
        contrasena,
        recaptcha_response: recaptchaValue,
      });

      if (response.data.success) {
        console.log("Inicio de sesión exitoso");
        // Puedes manejar el usuario autenticado de alguna manera (almacenar en el estado, redireccionar, etc.)
      } else {
        setError(response.data.message || "Error en el inicio de sesión. Verifica tus datos.");
      }
    } catch (error) {
      console.error("Error en la solicitud HTTP:", error.message);
      setError("Error en la conexión. Intenta de nuevo más tarde.");
    }
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

            <ReCAPTCHA
              sitekey="6LdOcBopAAAAAP7wvy9zg2XIFd5Wfv3D7cLTf3WA"
              onChange={(value) => setRecaptchaValue(value)}
            />
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input type="submit" value="Iniciar" />
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default InicioSesion;