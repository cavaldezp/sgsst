import React from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import digitando from '../assets/digitando2.jpg'
import empleador from '../assets/empleador2.jpg'
import personal from '../assets/personal.png'
import consulta from '../assets/consulta2.jpg'

function Opciones() {
    return (
        <div>
             <div className="row">

                <div className="col-11 navOpciones">
                    <h2><b> Sistema de Gestión de Seguridad y Salud en el Trabajo </b></h2>
                </div> 

                <Link className="navbar col-1" to="/" style={{background: "purple", color: "white", width:"70px", marginBottom: "0.1in", textDecoration: 'none'}}>
                    <h4><b> Salir </b></h4>
                </Link> 

             </div>
            
            
            <div className="row">

                <div className="col-6">
                     <img src={digitando} fluid style={{width: "600px", height: "80%"}}/>
                     <div className="divOpciones"><Link to="/registroincidentes" style={{ color: "white", textDecoration: 'none' }}>Registro de Incidentes</Link></div>
                </div>

                <div className="col-6">
                    <img src={empleador} fluid style={{width: "600px", height: "80%"}}/>
                    <div className="divOpciones"><Link to="/registroempleadores" style={{ color: "white", textDecoration: 'none' }}>Registro de Empleadores</Link></div>
                </div>

            </div>

              <div className="row">

                <div className="col-6">
                     <img src={personal} fluid style={{width: "600px", height: "80%"}}/>
                     <div className="divOpciones"><Link to="/registroempleados" style={{ color: "white", textDecoration: 'none' }}>Registro de Empleados</Link></div>
                </div>

                <div className="col-6">
                    <img src={consulta} fluid style={{width: "600px", height: "80%"}}/>
                    <div className="divOpciones" style={{background: "purple"}}><Link to="/registroincidentes" style={{ color: "white", textDecoration: 'none' }}>Consulta de Incidentes y Accidentes</Link></div>
                </div>

            </div>



        </div>
    )
}

export default Opciones
