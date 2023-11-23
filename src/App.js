import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from './store'
import { Provider } from "react-redux";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Services from "containers/pages/Services";
import About from "containers/pages/About_Us";
import Contact from "containers/pages/Contact";
import Sucursales from "containers/pages/Sucursales";
import InicioSesion from "containers/pages/InicioSension";
import Autos from "containers/pages/Autos";
import Repuestos from "containers/pages/Repuestos";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          { /* Error Display*/ }
          <Route path="*" element={< Error404 />} />

          { /* Home Display*/ }
          <Route path="/" element={< Home />} />
          <Route path="/sucursales" element={< Sucursales />} />
          <Route path="/servicios" element={< Services />} />
          <Route path="/contacto" element={< Contact />} />
          <Route path="/nosotros" element={< About />} />
          <Route path="/inicioSecion" element={< InicioSesion />} />
          <Route path="/autos" element={< Autos />} />
          <Route path="/repuestos" element={< Repuestos />} />
        </Routes>
      </Router>
    </Provider>
    // <div>
    //   hola
    // </div>
  );
}

export default App;
