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
import Gerente1 from "containers/pages/VistaUsuarios/Gerente/Gerente";
import JefeTaller from "containers/pages/VistaUsuarios/JefeTaller/JefeTaller";
import Vendedores from "containers/pages/VistaUsuarios/Vendedores/Vendedor";
import Clientes from "containers/pages/VistaUsuarios/Clientes/Clientes";
import Gerente from "containers/pages/VistaUsuarios/Gerente/Gerente";
import Cookies from "components/Home/Cookies";

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
          <Route path="/gerente" element={< Gerente />} />
          <Route path="/jefeTaller" element={< JefeTaller />} />
          <Route path="/vendedores" element={< Vendedores />} />
          <Route path="/clientes" element={< Clientes />} />
          <Route path="/cookies" element={< Cookies />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
