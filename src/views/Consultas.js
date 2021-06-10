import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col , Label, Container, Table} from "react-bootstrap";

function Consultas() {
    return (
        <Container>
        <div className="row">
            <h3 style={{background:"#6C37E4",height: "50px",color:"white",marginTop:"20px",marginBottom:"50px"}} className="w-100 text-center">
            Consulta de Incidentes y Accidentes
            </h3>
            <div className="row d-flex w-100" style={{justifyContent:'space-between',textAlign:"center"}}>
                <div className= "col">
                    <div>
                        <label style={{width:"150px"}}>N° Expediente</label>
                    </div>
                    <div>
                        <input style={{width:"150px"}} type="text" placeholder="" />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <label style={{width:"150px"}}>DNI Trabajador</label>
                    </div>
                    <div>
                        <input style={{width:"150px"}} type="number" placeholder="" />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <label style={{width:"150px"}}>RUC Empleador</label>
                    </div>
                    <div>
                        <input style={{width:"150px"}} type="number" placeholder="" />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <label style={{width:"150px"}}>Fecha Ocurrencia</label>
                    </div>
                    <div>
                        <input style={{width:"150px"}} type="date" placeholder="" />
                    </div>
                </div>
            </div>
            <div style={{justifyContent:'space-between',textAlign:"center"}}>
                <Button className="btn btn-success button-responsive font-weight-bold text-center center" type="submit">Buscar</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Columna 1</th>
                    <th>Columna 2</th>
                    <th>Columna 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </Container>
    )
}

export default Consultas