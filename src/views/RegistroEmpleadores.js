import React from 'react'
import empleador from '../assets/empleador3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function RegistroEmpleadores() {
    return (
        <div>
            {/* titulo */}
            <div >
                <h2 style={{backgroundColor:"#D80073", color:"white", textAlign:"center"}} >Registro de empleadores</h2>
            </div >
            {/* formulario */}
            <div className="d-flex mt-5 rounded shadow justify-content-around">
                <form className="col-md-6 col-lg-6 col-xl-5 ">
                    <div style={{margin: "10px"}}>
                        <label className="form-label col-12" style={{textAlign:'center'}}>Razón Social</label>
                        <input  className="form-text col-12" type="text"  placeholder="Indique la razón social del empleador" ></input>
                    </div>
                    <div style={{margin: "10px"}}>
                        <label className="form-label col-12" style={{textAlign:'center'}}>RUC del empleador</label>
                        <input  className="form-text col-12" type="number"  placeholder="00000000000" ></input>
                    </div>
                    <div style={{margin: "10px"}}>
                        <label className="form-label col-12" style={{textAlign:'center'}}>Dirección</label>
                        <input  className="form-text col-12" type="text"  placeholder="indique la dirección del empleador" ></input>
                    </div>
                    <div style={{margin: "10px"}}>
                        <label className="form-label col-12" style={{textAlign:'center'}}>Actividad económica</label>
                        <input  className="form-text col-12" type="number"  placeholder="Principal - 7020 - ACTIVIDADES DE CONSULTORÍA DE GESTIÓN" ></input>
                    </div>
                    <div style={{margin: "10px"}}>
                        <label className="form-label col-12" style={{textAlign:'center'}}>Aseguradora de SCTR</label>
                        <input  className="form-text col-12" type="number"  placeholder="Nombre de la aseguradora" ></input>
                    </div>

                    <div className="row justify-content-around">
                    <button className="btn btn-success col-4" >Guardar</button>
                    </div>

                </form>
                 {/* imagen */}
                <div className="d-none d-md-block " style={{backgroundImage:`url(${empleador})`, width:"100%", backgroundPosition:"Center Center"}}>
                  
                </div>
            </div>
           
        </div>
    )
}

export default RegistroEmpleadores
