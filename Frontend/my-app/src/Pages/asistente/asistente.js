import React from "react";

import Navbar from "../../Components/Navbar";
import Funcionalidad from "../../Components/asistente/Funcionalidad";
import PerfilUsuario from "../../Components/asistente/PerfilUsuario";

function Asistente() {

    const usuario = {
        username: "Asistente",
        email: "asistente@correo.com",
        url_foto: "https://img.freepik.com/vector-premium/logotipo-chat-bot-asistente-virtual-logotipo-icono-bot-cabeza-robot-auriculares_843540-99.jpg",
    };

    return (
        <>
            <Navbar rol="Asistente" />
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div className="col-md-8 container">
                        <PerfilUsuario usuario={usuario} />
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <Funcionalidad icon="settings" texto="Configuración de la cuenta" link="" />
                            </div>
                            <div className="col-md-6">
                                <Funcionalidad icon="edit" texto="Solicitudes de empleo" link="" />
                            </div>
                            <div className="col-md-6">
                                <Funcionalidad icon="SquareUser" texto="Conductores" link="" />
                            </div>
                            <div className="col-md-6">
                                <Funcionalidad icon="Users" texto="Usuarios" link="" />
                            </div>
                            {/* <div className="col-md-6">
                                <Funcionalidad icon="SquareArrowDown" texto="Baja de conductores" link="" />
                            </div>
                            <div className="col-md-6">
                                <Funcionalidad icon="SquareArrowDown" texto="Baja de usuarios" link="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Asistente;