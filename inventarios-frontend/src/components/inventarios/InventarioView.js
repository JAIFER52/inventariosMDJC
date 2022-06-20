import React, {useState, useEffect} from 'react';
import { getInventarios } from '../../services/inventarioService';
import {InventarioCard} from './InventarioCard';
import {InventarioNew} from './InventarioNew';
import swal from 'sweetalert2';
// InventarioView se encarga de renderisar toda la informacion del inventario en pantalla

export const InventarioView = () => {

  const [inventarios, setInventarios] = useState ([]);
  const [openModal, setOpenModal] = useState (false);

  const listarInventarios = async () => {
    try {
      swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading();
      const { data } = await getInventarios();           
      setInventarios(data);
      swal.close();

    } catch (error) {
      console.log(error);
      swal.close();
      
    }
  }
  useEffect(()=>{
    listarInventarios();
  },[]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="container-fluid">
    <div className="mt-2 bm-2 row row-cols-1 row-cols-md-4 g-4">
      {
        inventarios.map((inventario) =>  {
            return <InventarioCard key={inventario._id} inventario = {inventario} />
      })
      }
       </div>
      {
      openModal ? <InventarioNew      
      handleOpenModal ={handleOpenModal}  
      listarInventarios ={listarInventarios}  /> :
       (<button className='btn btn-primary fab' onClick={handleOpenModal} >
        <i className="fa-solid fa-plus"></i>
        </button>)
      }

      </div>   
  )
}