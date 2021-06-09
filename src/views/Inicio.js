import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import portada from '../assets/portada3.png'
import logo from '../assets/logoAnta.png'

function Inicio() {
    return (
        <div>
          <div className="row justify-content-around">
             <div className="col-9">
                <img src={portada}/>
             </div>

             <div className="col-3">
             
                

                 <div className="row" className="divbk">
                     <h1><b>SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO</b></h1>
                 </div>

                 

                 <div className="row">

                     <div className="col-4">
                           <label>Usuario</label>
                     </div>                   
                     <div className="col-8">
                           <input type="text"/>
                     </div>
                     
                     <p></p>

                     <div className="col-4">
                           <label>Contraseña</label>
                     </div>                         
                     <div className="col-8">
                           <input type="password"/>
                     </div>

                     <p></p>
                     

                     <div className="col-4">
                           
                     </div>                         
                     <div className="col-8">
                           <button className="btn btn-success">Ingresar</button>
                     </div>

                
                 </div>

                 
            
                 <div className="row">
                 <img src={logo} className="align-self-center divLogo"/>
                 </div>


             </div>
          </div>
        </div>
    )
}

export default Inicio


/*

import React, { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productoService";
import {Link} from "react-router-dom"

function ListaProductosView() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      //1. ejecutamos la función que me devuelve los productos
      const productosObtenidos = await obtenerProductos();
      //2. Lo pongo en el estado
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //montaje, cambia un estado
    //pero lo filtramos por su 2do parámetro
    getProductos();
  }, []);

  return (
    <div>
      <h1>Productos Listados</h1>
      <Link className="btn btn-primary btn-lg my-2" to="/crearproducto">
        Crear Producto
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod, i) => (
            <tr key={i}>
              <td>{prod.nombre}</td>
              <td>{prod.precio}</td>
              <td>{prod.descripcion}</td>
              <td>{prod.stock}</td>
              <td>
                <Link className="btn btn-warning btn-sm" to={`/editarproducto/${prod.id}`}>
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductosView;

*/