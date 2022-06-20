import React, {useState, useEffect} from 'react';
import {getusuarios} from '../../services/usuarioService';
import {UsuarioNew} from './UsuarioNew';
import swal from 'sweetalert2';


export const UsuarioView = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [openModal, setOpenModal] = useState (false);

  const listarUsuarios = async () => {
    try { 
      swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading();
      const {data} = await getusuarios(); 
      setUsuarios(data);
      swal.close();
    } catch (error) {
      console.log(error);
      swal.close();
    }

  }  
  useEffect(()=>{
    listarUsuarios();
  },[]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }


  return (
    <nav className="navbar bg-light">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Usuarios</span>
    </div>     
    <div className="mt-2 bm-2 row row-cols-3 row-col-md-4 g-4">{
        usuarios.map((usuario) =>  {
          return (
            <div className="col" key={usuario._id}>
            <div className="card border-primary mb-3">
                <div className="card-body">
                <h5 className="card-title">{usuario.nombre} </h5>
                <p className="card-text">{usuario.email} </p>
                <p className="card-text">{usuario.estado} </p>
                <p className="card-text">{usuario.fechaCreacion} </p>
                <p className="card-text">{usuario.fechaActualizacion}</p>
                <button className="btn btn-info" >ver mas...</button>
              </div>
            </div>
          </div>
          )          
    })
    }
   </div> 
   {
      openModal ? <UsuarioNew    
      handleOpenModal ={handleOpenModal}  
      listarUsuarios ={listarUsuarios}  /> :
       (<button className='btn btn-primary fab' onClick={handleOpenModal} >
        <i className="fa-solid fa-plus"></i>
        </button>)
      }

      </nav>   
  )
}