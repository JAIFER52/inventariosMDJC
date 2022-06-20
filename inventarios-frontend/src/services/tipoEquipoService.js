import {axiosInstance} from '../helpers/axios-config';

// http://localhost:4000/tipoEquipo
const gettipoEquipos = () => {
    return axiosInstance.get('tipoEquipo',{
        headers: {
            'Content-type' : 'application/json'
        }
    } )
}

const creartipoEquipos = (data) =>{
    return axiosInstance.post('tipoEquipo', data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}

const edittipoEquipos = (tipoEquipoId , data) =>{
    return axiosInstance.put(`tipoEquipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}
const gettipoEquiposporId = (tipoEquipoId) => {
    return axiosInstance.get(`tipoEquipo/${tipoEquipoId}`,{
        headers: {
            'Content-type' : 'application/json'
        }
    } )
}
export {
   gettipoEquipos,creartipoEquipos,edittipoEquipos,gettipoEquiposporId
}

