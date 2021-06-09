import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import digitando from '../assets/digitando2.jpg'
import empleador from '../assets/empleador2.jpg'
import personal from '../assets/personal.png'
import consulta from '../assets/consulta2.jpg'

function Opciones() {
    return (
        <div>
            <div className="row">

                <div className="col-6 ">
                     <img src={digitando} fluid style={{width: "600px", height: "80%"}}/>
                     <div>Registro de Incidentes</div>
                </div>

                <div className="col-6">
                    <img src={empleador} fluid style={{width: "600px", height: "80%"}}/>
                    <div>Registro de Empleadores</div>
                </div>

            </div>

              <div className="row">

                <div className="col-6">
                     <img src={personal} fluid style={{width: "600px", height: "80%"}}/>
                     <div>Registro de Empleados</div>
                </div>

                <div className="col-6">
                    <img src={consulta} fluid style={{width: "600px", height: "80%"}}/>
                    <div>Consulta de Incidentes y accidentes</div>
                </div>

            </div>



        </div>
    )
}

export default Opciones
