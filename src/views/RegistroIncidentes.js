import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import banner from '../assets/banner1.png'


function RegistroIncidentes() {
    return (
     <div>
        {/* Imagen de ecabezado */}
        <div style={{height:"300px", backgroundImage:`url(${banner})`, backgroundPosition:"Center Center"}}>
            <h1 className="card-tittle" style={{backgroundColor:"#D80073", color:"white", textAlign:"center"}}>Registro de incidentes</h1>

        </div>
               
        <div className="row d-flex justify-content-around shadow ">
         {/* Primer formulario */}
            <form className="Form col-md-6 col-lg-6 col-xl-6" >
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>DNI del trabajador</label>
                    <input  className="form-text col-12" type="number"  placeholder="00000000" ></input>
                </div>

                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>RUC del empleador</label>
                    <input  className="form-text col-12" type="number"  placeholder="00000000" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Fecha de Ocurrencia</label>
                    <input  className="form-text col-12" type="date"  placeholder="01/01/01" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Cantidad de Afectados</label>
                    <input  className="form-text col-12" type="number"  placeholder="00" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Descripción</label>
                    <textarea  className="form-text col-12" type="number"  placeholder="Describa el evento" ></textarea>
                </div>
                
            </form>
    {/* Segundo formulario */}
        <form className="Form col-md-6 col-lg-6 col-xl-6">
                 <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Gravedad del accidente</label>
                    <input  className="form-text col-12" type="text"  placeholder="Describa la grabedad" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Días de descanso</label>
                    <input  className="form-text col-12" type="number"  placeholder="00" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Fecha de investigación</label>
                    <input  className="form-text col-12" type="date"  placeholder="01/01/01" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Fecha de acuerdos</label>
                    <input  className="form-text col-12" type="number"  placeholder="00" ></input>
                </div>
                <div style={{margin: "10px"}}>
                    <label className="form-label col-12" style={{textAlign:'center'}}>Acuerdos</label>
                    <textarea  className="form-text col-12" type="number"  placeholder="Describa los acuerdos" ></textarea>
                </div>
        </form>
        <button className="btn btn-success col-10 mb-2" >Guardar</button>

</div>
        </div>
    )
}

export default RegistroIncidentes
