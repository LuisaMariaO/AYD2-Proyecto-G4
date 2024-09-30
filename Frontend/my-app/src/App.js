import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Index from "./Pages";
import LoginConductor from "./Pages/conductor/conductor-login";
import LoginAdmin from "./Pages/admin/admin-login";
import Asistente from "./Pages/asistente/Asistente";
import SolicitudesEmpleos from "./Pages/asistente/SolicitudesEmpleos";
import GestionUsuarios from "./Pages/asistente/GestionUsuarios";
import GestionConductores from "./Pages/asistente/GestionConductores";
import Usuario from "./Pages/usuario/usuario";
import Conductor from "./Pages/conductor/conductor";
import RegistroUsuario from "./Pages/usuario/registro";
import RegistroConductor from "./Pages/conductor/registro";
import Administrador from "./Pages/admin/admin";
import GestionarViajes from './Pages/conductor/GestionarViajes';
import ReportarProblema from './Pages/conductor/ReportarProblema';
import Auth from "./Pages/admin/auth";
import LoginUsuario from "./Pages/usuario/login";
import VerificarUsuario from "./Pages/usuario/verificacion";
import CambiarContrasena from "./Pages/usuario/cambiarContrasena";
import ReportarProblemaUsuario from "./Pages/usuario/reportarProblema";
import PedirViaje from "./Pages/usuario/pedirViaje";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/loginConductor" element={<LoginConductor/>}></Route>
      <Route path="/login-admin" element={<LoginAdmin/>}></Route>
      <Route path="/asistente" element={<Asistente/>}></Route>
      <Route path="/solicitudes-empleos" element={<SolicitudesEmpleos/>}/>
      <Route path="/gestion-usuarios" element={<GestionUsuarios/>}/>
      <Route path="/gestion-conductores" element={<GestionConductores/>}/>
      <Route path="/usuario" element={<Usuario/>}></Route>
      <Route path="/conductor" element={<Conductor/>}></Route>
      <Route path="/admin" element={<Administrador/>}></Route>
      <Route path="/register-user" element={<RegistroUsuario/>}></Route>
      <Route path="/register-driver" element={<RegistroConductor/>}></Route>
      <Route path="/gestionar-viajes" element={<GestionarViajes/>}></Route>
      <Route path="/reportar-problema" element={<ReportarProblema/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/login-user" element={<LoginUsuario/>}></Route>
      <Route path="/verificar-user/:username" element={<VerificarUsuario/>}></Route>
      <Route path="/cambiar-password/:username" element={<CambiarContrasena/>}></Route>
      <Route path="/usuario/problemas" element={<ReportarProblemaUsuario/>}></Route>
      <Route path="/usuario/solicitarViaje" element={<PedirViaje/>}></Route>
      <Route path="*" element={<Navigate to="/" replace={true}></Navigate>} exact={true}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
