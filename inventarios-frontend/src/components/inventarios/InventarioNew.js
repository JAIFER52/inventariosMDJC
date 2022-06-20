import React, {useState,useEffect} from 'react';
import {getusuarios} from '../../services/usuarioService';
import {getmarcas} from '../../services/marcaService'; 
import {gettipoEquipos} from '../../services/tipoEquipoService'; 
import {getestadoEquipos} from '../../services/estadoEquipoService';
import {crearInventarios} from '../../services/inventarioService';
import swal from 'sweetalert2';

export const InventarioNew = ({handleOpenModal,listarInventarios}) => {

  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [estados, setEstados] = useState([]);
  const [valoresForm, setValoresForm] = useState([]);
  const {serial ='' , modelo ='' ,descripcion ='' ,color ='' ,foto ='',fechaCompra='' ,precio='', usuario ='', marca='',tipoEquipo ='',estadoEquipo='' } = valoresForm;
  
    const listarUsuarios = async () => {
      try {
        const {data} =await getusuarios();
        setUsuarios (data);
        console.log(data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=> {
listarUsuarios();
},[]);
      

      const listarMarcas = async () => {
    try {
          const {data} =await getmarcas();
          setMarcas (data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()  =>{
  listarMarcas();
  },[]); 
  

    const listarTipos = async () =>{
    try {
          const {data} =await gettipoEquipos();
          setTipos (data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()  =>{
  listarTipos();
  },[]);

    const listarEstados = async () =>{

    try {
          const {data} =await getestadoEquipos();
          setEstados (data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()  =>{
  listarEstados();
  },[]);


  const handleOpenChange = ({target}) => {
        const {name,value} = target;
        setValoresForm({...valoresForm, [name]:value}); // operador spread
  }

  const handleOnSumit = async (e) =>{
        e.preventDefault();
        const inventario = {
          serial, modelo,descripcion,color,foto,fechaCompra,precio,
          usuario:{
            _id:usuario
          },
          marca:{
            _id:marca
          },
          tipoEquipo:{
            _id:tipoEquipo
          },
          estadoEquipo:{
            _id:estadoEquipo
          }
        }
        try {
          swal.fire({
            allowOutsideClick: false,
            text: 'Cargando...'
          });
          swal.showLoading();
          const {data} = await crearInventarios(inventario);
          console.log(data);
          swal.close();
          handleOpenModal();  // handleOpenModal me cierra la ventanita
          listarInventarios();
        } catch (error) {
          console.log(error);
          swal.close();
          let mensaje;
      if (error && error.response && error.response.data){
        mensaje = error.response.data;
      } else {
        mensaje ='Ocurrio un error, por favor intente nuevamente';
      }
      swal.fire('Error',mensaje,'error'); // ventana que me indica error
        }
      }  

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>            
            <div className='sidebar-header'>
              <h3>Nuevo Inventario</h3>
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
                <label className="form-label">Serial</label>
                <input type="text" name="serial"
                    required
                     value={serial}
                     onChange = {(e) => handleOpenChange(e) }
                 className="form-control" />
             </div>          
          </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Modelo</label>
                <input type="text" name="modelo"
                      required
                      value= {modelo}
                      onChange = {(e) => handleOpenChange(e) }
                 className="form-control" />
             </div>          
           </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input type="text" name= "descripcion"
                    required
                    value = {descripcion}
                    onChange = {(e) => handleOpenChange(e) }
                 className="form-control" />
             </div>  

          </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Color</label>
                <input type="text" name="color" 
                  required
                   value ={color}
                  onChange = {(e) => handleOpenChange(e) }  
                 className="form-control" />
             </div>
          </div>
            </div>
            
           <div className='row'>
             <div className='col'>
                 <div className="mb-3">
                <label className="form-label">Foto</label>
                <input type="url" name="foto"
                      required
                      value ={foto}
                      onChange = {(e) => handleOpenChange(e) } 
                 className="form-control" />
             </div>          
          </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Fecha Compra</label>
                <input type="date" name="fechaCompra"
                      required
                      value= {fechaCompra}
                      onChange = {(e) => handleOpenChange(e) } 
                 className="form-control" />
             </div>          
           </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input type="number" name= "precio"
                    required
                    value = {precio}
                    onChange = {(e) => handleOpenChange(e) } 
                 className="form-control" />
             </div>          
          </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <select className="form-select"
                required
                onChange = {(e) => handleOpenChange(e) } 
                name='usuario'
                value={usuario} >
                  <option value='' >---SELECCIONE---</option>
                  {
                    usuarios.map (({_id,nombre}) => {
                      return <option key={_id} value={_id} >{nombre} </option>
                    } )
                  }
             </select>
             </div>
          </div>
            </div>
            <div className='row'>
             <div className='col'>
                 <div className="mb-3">
                <label className="form-label">Marca</label>
                <select className="form-select" 
                required
                onChange = {(e) => handleOpenChange(e) } 
                name='marca'
                value= {marca} >
                  <option value='' >---SELECCIONE---</option>
                  {
                    marcas.map (({_id,nombre}) => {
                      return <option key={_id} value={_id} >{nombre} </option>
                    } )
                  }
             </select>
             </div>          
          </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Tipo Equipo</label>
                <select className="form-select" 
                required
                onChange = {(e) => handleOpenChange(e) } 
                name='tipoEquipo'
                value={tipoEquipo}>
                  <option value='' >---SELECCIONE---</option>
                  {
                    tipos.map (({_id,nombre}) => {
                      return <option key={_id} value={_id} >{nombre} </option>
                    } )
                  }
             </select>
             </div>          
           </div>
              <div className='col'>
              <div className="mb-3">
                <label className="form-label">Estado Equipo</label>
                <select className="form-select" 
                required
                onChange = {(e) => handleOpenChange(e) } 
                name='estadoEquipo'
                value={estadoEquipo}>
                  <option value='' >---SELECCIONE---</option>
                  {
                    estados.map (({_id,nombre}) => {
                      return <option key={_id} value={_id} >{nombre} </option>
                    } )
                  }
             </select>
             </div>          
          </div>
       </div>
      <div className='row'>
        <div className='col'>
          <button className="btn btn-info">Guardar</button>
        </div>
      </div>
       </form>
     </div>
     </div>
  )
}

