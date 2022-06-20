import React, {useState, useEffect} from 'react';
import {getestadoEquipos} from '../../services/estadoEquipoService';
import {EstadoNew} from './EstadoNew';
import swal from 'sweetalert2';


export const EstadoView = () => {
    const [estado, setEstados] = useState([]);
    const [openModal, setOpenModal] = useState (false);

  const listarEstados = async () => {
    try { 
      swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading();
      const {data} = await getestadoEquipos(); 
      setEstados(data);
      swal.close();
    } catch (error) {
      console.log(error);
      swal.close();
    }
  }  
  useEffect(()=>{
    listarEstados();
  },[]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }


  return (
    <nav className="navbar bg-light">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Estado de Equipo</span>
    </div>     
    <div className="mt-2 bm-2 row row-cols-3 row-col-md-4 g-4">{
        estado.map((estadoEquipo) =>  {
          return (
            <div className="col" key={estadoEquipo._id}>
            <div className="card border-primary mb-3">
                <div className="card-body">
                <h5 className="card-title">{estadoEquipo.nombre} </h5>
                <p className="card-text">{estadoEquipo.estado} </p>
                <p className="card-text">{estadoEquipo.fechaCreacion} </p>
                <p className="card-text">{estadoEquipo.fechaActualizacion}</p>
                <button className="btn btn-info" >ver mas...</button>
              </div>
            </div>
          </div>
          )          
    })
    }
   </div> 
   {
      openModal ? <EstadoNew  
      handleOpenModal ={handleOpenModal}  
      listarEstados ={listarEstados}  /> :
       (<button className='btn btn-primary fab' onClick={handleOpenModal} >
        <i className="fa-solid fa-plus"></i>
        </button>)
      }

      </nav>   
  )
}