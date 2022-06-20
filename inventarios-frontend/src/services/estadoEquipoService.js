import {axiosInstance} from '../helpers/axios-config';

//http://localhost:4000/estadoEquipo
const getestadoEquipos = () => {
    return axiosInstance.get('estadoEquipo',{
        headers: {
            'Content-type' : 'application/json'
        }
    } )
}

const crearestadoEquipos = (data) =>{
    return axiosInstance.post('estadoEquipo', data, {
        
        headers: {
            'Content-type' : 'application/json'
        }
    });
}

const editestadoEquipos = (estadoEquipoId , data) =>{
    return axiosInstance.put(`estadoEquipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}
export {
    getestadoEquipos,crearestadoEquipos,editestadoEquipos
}
