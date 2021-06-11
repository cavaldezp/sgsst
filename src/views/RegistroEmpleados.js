import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, Col , Label, Container} from "react-bootstrap";
import trabajadores from '../assets/trabajadores.jpg'

function RegistroEmpleados() {
    return (
        <Container>
        <div className="row">
            <h3 style={{background:"#E43776",height: "50px",color:"white",marginTop:"20px",marginBottom:"50px"}} className="w-100 text-center">
            Registro de Empleados
            </h3>
            <div className="col md-0 mb-5">
                <Form>
                    <div className="row">
                        <div className="col w-50">
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} style={{width: "200px", height: "80%"}}>
                                Nombres
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" placeholder="nombres" />
                                </Col>
                            </Form.Group>
                            <br/>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3} style={{width: "200px", height: "80%"}}>
                                Apellidos
                                </Form.Label>
                                <Col sm={7}>
                                <Form.Control type="text" placeholder="apellidos" />
                                </Col>
                            </Form.Group>
                            <br/>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} style={{width: "200px", height: "80%"}}>
                                DNI
                                </Form.Label>
                                <Col sm={7}>
                                <Form.Control type="number" placeholder="00000000" />
                                </Col>
                            </Form.Group>
                            <br/>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2} style={{width: "200px", height: "80%"}}>
                                Area
                                </Form.Label>
                                <Col sm={7}>
                                <Form.Control type="text" placeholder="area" />
                                </Col>
                            </Form.Group>
                            <br/>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} style={{width: "200px", height: "80%"}}>
                                Puesto
                                </Form.Label>
                                <Col sm={7}>
                                <Form.Control type="text" placeholder="puesto" />
                                </Col>
                            </Form.Group>
                            <br/>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2} style={{width: "200px", height: "80%"}}>
                                SCTR
                                </Form.Label>
                                <Col sm={7}>
                                <Form.Control type="text" placeholder="sctr" />
                                </Col>
                            </Form.Group>
                            <br/>
                            
                        </div>
                        <div className="col w-20">
                            <img src={trabajadores} fluid style={{width: "620px", height: "350px"}}/>
                        </div>
                        <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                <Button className="btn btn-success button-responsive font-weight-bold text-center" type="submit">Guardar</Button>
                                </Col>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div>
        </Container>
    )
}

export default RegistroEmpleados