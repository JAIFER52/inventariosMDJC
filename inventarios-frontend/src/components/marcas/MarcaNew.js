import React from 'react';
import swal from 'sweetalert2';

export const MarcaNew = ({handleOpenModal,listarMarcas}) => {
  return (
    <div className='sidebar'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>            
        <div className='sidebar-header'>
        <h3>Nueva Marca</h3>
        <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i> 
    </div>
 </div>
  </div>
  <div className='row'>
        <div className='col'>
          <hr />
          </div>
      </div>
      <form>
      <div className='row'>
      <div className='col'>
      <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input type="text" name='nombre' className="form-control"/>  
  </div>
 </div>
        <div className='row'>
        <div className="mb-3">
    <label className="form-label">Estado</label>
    <input type="text" name='estado' className="form-control"/>    
  </div>
  </div>
        <div className='row'>
        <div className="mb-3">
    <label className="form-label">Fecha de creación </label>
    <input type="date" name= 'fechaCreacion' className="form-control"/>  
  </div>
        </div>
        <div className='row'>
        <div className="mb-3">
    <label className="form-label">Fecha de actualización</label>
    <input type="date" name='fechaActualizacion' className="form-control"/>
  </div>
        </div>
      </div> 
      <button>Guardar</button>
      </form>
      </div>    
  </div>
  )
}

  
  