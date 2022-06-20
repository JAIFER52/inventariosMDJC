import React, {useState, useEffect} from 'react';
import {getmarcas} from '../../services/marcaService';
import {MarcaNew} from './MarcaNew';
import swal from 'sweetalert2';

export const MarcaView = () => {
  const [marcas, setMarcas] = useState([]);
  const [openModal, setOpenModal] = useState (false);

  const listarMarcas = async () => {
    try { 
      swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading();
      const {data} = await getmarcas(); 
      setMarcas(data);
      swal.close();
    } catch (error) {
      console.log(error);
      swal.close();
    }

  }  
  useEffect(()=>{
    listarMarcas();
  },[]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }


  return (
    <nav className="navbar bg-light">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Marcas</span>
    </div>     
    <div className="mt-2 bm-2 row row-cols-3 row-col-md-4 g-4"> {
        marcas.map((marca) =>  {
          return (
            <div className="col" key={marca._id}>
            <div className="card border-primary mb-3">
                <div className="card-body">
                <h5 className="card-title">{marca.nombre} </h5>
                <p className="card-text">{marca.estado} </p>
                <p className="card-text">{marca.fechaCreacion} </p>
                <p className="card-text">{marca.fechaActualizacion}</p>
                <button className="btn btn-info" >ver mas...</button>
              </div>
            </div>
          </div>
          )          
    })
    }
   </div> 
   {
      openModal ? <MarcaNew   
      handleOpenModal ={handleOpenModal}  
      listarMarcas ={listarMarcas}  /> :
       (<button className='btn btn-primary fab' onClick={handleOpenModal} >
        <i className="fa-solid fa-plus"></i>
        </button>)
      }

      </nav>   
  )
}