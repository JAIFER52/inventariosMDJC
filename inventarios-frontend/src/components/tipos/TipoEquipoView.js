import React, {useState, useEffect} from 'react';
import {gettipoEquipos} from '../../services/tipoEquipoService';
import {TipoEquipoNew} from './TipoEquipoNew';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

export const TipoEquipoView = () => {

  const [tipos, setTipos] = useState ([]);
  const [openModal, setOpenModal] = useState (false);

  const listartipoEquipos = async () => {
    try { 
      swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading();
      const {data} = await gettipoEquipos(); 
      setTipos(data);
      swal.close();
    } catch (error) {
      console.log(error);
      swal.close();
    }

  } 
  useEffect(()=>{
    listartipoEquipos();
  },[]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }  
  return (
    <nav className="navbar bg-light">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Tipos de Equipo</span>
    </div>
    <div className="mt-2 bm-2 row row-cols-3 row-col-md-4 g-4">{
        tipos.map((tipoEquipo) =>  {
          return (
            <div className="col" key={tipoEquipo._id}> 
            <div className="card border-primary mb-3">
                <div className="card-body">
                <h5 className="card-title">{tipoEquipo.nombre} </h5>
                <p className="card-text">{tipoEquipo.estado} </p>
                <p className="card-text">{tipoEquipo.fechaCreacion} </p>
                <p className="card-text">{tipoEquipo.fechaActualizacion}</p>
                <Link to={`tipoEquipos/edit/${tipoEquipo._id}`}>Ver Mas ...</Link> 
                
              </div>
            </div>
          </div>
          )         
    })
    }    
    </div> 
    {
      openModal ? <TipoEquipoNew  
      handleOpenModal ={handleOpenModal}  
      listartipoEquipos ={listartipoEquipos}  /> :
       (<button className='btn btn-primary fab' onClick={handleOpenModal} >
        <i className="fa-solid fa-plus"></i>
        </button>)
      }

      </nav>   
  )
}