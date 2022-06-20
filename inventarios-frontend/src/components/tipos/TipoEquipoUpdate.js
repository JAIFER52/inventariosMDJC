import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {gettipoEquiposporId} from '../../services/tipoEquipoService';
import swal from 'sweetalert2';

export const TipoEquipoUpdate = () => {


        const {tipoEquipoId =''} = useParams ();
        console.log( tipoEquipoId );
        const [tipoEquipo,setTipoEquipo] = useState ([]);
        const [estadoEquipo, setEstadoEquipo] = useState ([]);
        const [valoresform, setValoresForm] = useState ([]);
        const {nombre = '',estado='', fechaCreacion='', fechaActualizacion ='', } = valoresform;

const gettipoEquipos = async () => {
try {
    const {data} = await gettipoEquiposporId (tipoEquipoId);
    console.log(data);
    setTipoEquipo(data);
} catch (error) {
    console.log(error);
}
}
useEffect (() =>{
    gettipoEquipos();
},[tipoEquipoId]);

useEffect (()=>{
if (tipoEquipo){
    setValoresForm({
       nombre: tipoEquipo.nombre,
       estado: tipoEquipo.estado,
       fechaCreacion: tipoEquipo.fechaCreacion,
       fechaActualizacion: tipoEquipo.fechaActualizacion, 
    });
}
},[tipoEquipo]);

const handleOpenChange = async ({target}) =>{
    const {name,value} = target;
    setValoresForm({...valoresform, [name]: value})
}
const handleOnSumit = (e) => {
    e.preventDefault();
    
    
    }
   

return (
    <div className='sidebar'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>            
        <div className='sidebar-header'>
        <h3>Nuevo Tipo de equipo</h3>
        <i className="fa-solid fa-xmark"></i>
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
    <label className="form-label">Fecha de creacion </label>
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
