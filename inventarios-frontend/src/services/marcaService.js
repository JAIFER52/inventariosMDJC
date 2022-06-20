import {axiosInstance} from '../helpers/axios-config';


// http://localhost:4000/tipoEquipo
const getmarcas = () => {
    return axiosInstance.get('marca',{
        headers: {
            'Content-type' : 'application/json'
        }
    } )
}

const crearmarcas = (data) =>{
    return axiosInstance.post('marca', data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}

const editmarcas = (marcaId ,data) =>{
    return axiosInstance.put(`marca/${marcaId}`, data, {
        headers: {
            'Content-type' : 'application/json'
        }
    });
}


export {
    getmarcas,crearmarcas,editmarcas
}