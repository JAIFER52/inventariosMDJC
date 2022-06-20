import {axiosInstance} from '../helpers/axios-config';

// http://localhost:4000/usuario

const getusuarios = () => {
    return axiosInstance.get('usuario',{
        headers: {
            'Content-type' : 'application/json'
        }
    } )
}

const crearusuarios = (data) =>{
    return axiosInstance.post('usuario', data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}

const editusuarios = (usuarioId , data) =>{
    return axiosInstance.put(`usuario/${usuarioId}`, data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}
export {
    getusuarios,crearusuarios,editusuarios
}
