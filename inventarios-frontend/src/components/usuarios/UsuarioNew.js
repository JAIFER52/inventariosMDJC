import React from 'react'

export const UsuarioNew = ({handleOpenModal,listarUsuarios}) => {
  return (
    <div className='sidebar'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>            
        <div className='sidebar-header'>
        <h3>Nuevo Usuario</h3>
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
            <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> 
  </div>
 </div>
      <div className='row'>
              <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name='email'  className="form-control"/>    
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
    <input type="date" name='fechaCreacion' className="form-control"/>  
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


