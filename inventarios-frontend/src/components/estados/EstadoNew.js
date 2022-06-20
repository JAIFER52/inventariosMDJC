import React, {useState,useEffect} from 'react';
import {gettipoEquipos} from '../../services/tipoEquipoService';
import {getestadoEquipos} from '../../services/estadoEquipoService'
import swal from 'sweetalert2';

export const EstadoNew = ({handleOpenModal,listarEstadosEquipos}) => {
  const [tipoEquipo,setTipoEquipos] = useState ([]);
  const [estadoEquipo, setEstadoEquipo] = useState ([]);
  const [valoresform, setValoresForm] = useState ([]);
  const {nombre = '',estado, fechaCreacion='', fechaActualizacion ='', } = valoresform;
  useEffect ( () =>{
    const listartipoEquipos = async () => {
     try {
       const {data} = await gettipoEquipos();
       setTipoEquipos(data);
       console.log(data);
     } catch (error) {
       console.log(error);
     }
    }
    listartipoEquipos();
   },[]);
   
   useEffect ( () =>{
    const listarEstados = async () => {
     try {
       const {data} = await getestadoEquipos();
       setEstadoEquipo(data);
     } catch (error) {
       console.log(error);
     }
    }
    listarEstados();
   },[]);
   
   const handleOpenChange = ({target}) =>{
     const {name,value} = target;
     setValoresForm({...valoresform, [name]: value})
   }
   const handleOnSumit = (e) => {
     e.preventDefault();
     const tipoEquipo = {
       nombre,
       estado:{
         _id: estado
       },fechaCreacion,fechaActualizacion,
     }
     console.log(tipoEquipo);
     
   }
   
  return (
    <div className='sidebar'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>            
        <div className='sidebar-header'>
        <h3>Nuevo Estado</h3>
        <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
    </div>
 </div>
  </div>
  <div className='row'>
        <div className='col'>
          <hr />
          </div>
      </div>
      <form onSubmit={(e) => handleOnSumit(e)}>
      <div className='row'>
      <div className='col'>
      <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input type="text" name="nombre"
    required
     value={nombre}
    onChange = {(e)=>handleOpenChange(e)}
     className="form-control"/>  
  </div>
 </div>
        <div className='row'>
        <div className="mb-3">
    <label className="form-label">Estado</label>
    <input type="text" name="estado"
    required
     value={estado}
    onChange = {(e)=>handleOpenChange(e)}
     className="form-control"/>        
  </div>
  </div>
        <div className='row'>
        <div className="mb-3">
    <label className="form-label">Fecha de creación </label>
    <input type="date" name="fechaCreacion" 
    required
    value = {fechaCreacion}
    onChange = {(e)=>handleOpenChange (e)}
    className="form-control"/> 
  </div>
  </div>
        <div className='row'>
        <div className="mb-3">
    <label className="form-label">Fecha de actualización</label>
    <input type="date" name="fechaActualizacion" 
    required
    value = {fechaActualizacion}
    onChange = {(e)=>handleOpenChange (e)}
    className="form-control"/>
   </div>
        </div>
      </div> 
      <button className="btn btn-info">Guardar</button>
      </form>
      </div>    
  </div>
  )
}

