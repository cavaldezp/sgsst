import React from 'react'
import {Route} from "react-router-dom"
import Inicio from "./views/Inicio"
import Opciones from "./views/Opciones"
import RegistroIncidentes from "./views/RegistroIncidentes"
import RegistroEmpleadores from "./views/RegistroEmpleadores"
import RegistroEmpleados from "./views/RegistroEmpleados"
import Consultas from "./views/Consultas"
import Reportes from "./views/Reportes"

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/opciones" component={Opciones} />
      <Route exact path="/registroincidentes" component={RegistroIncidentes} />
      <Route exact path="/registroempleadores" component={RegistroEmpleadores} />
      <Route exact path="/registroempleadoss" component={RegistroEmpleados} />
      <Route exact path="/consultas" component={Consultas} />
      <Route exact path="/reportes" component={Reportes} />
    </div>
  )
}

export default Routes
