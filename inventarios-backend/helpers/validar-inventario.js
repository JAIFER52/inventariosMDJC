const validarInventario = (req) =>{
    const validaciones =[];

    if (!req.body.serial){
        validaciones.push('El serial es requerido');
    }

    if (!req.body.modelo){
        validaciones.push('El modelo es requerido');
    }

    if (!req.body.descripcion){
        validaciones.push('La descripcion es requerida');
    }

    if (!req.body.foto){
        validaciones.push('La foto es requerida');
    }

    if (!req.body.fechaCompra){
        validaciones.push('La fecha de compra es requerida');
    }
    
    if (!req.body.precio){
        validaciones.push('El precio es requerido');
    }

    if (!req.body.usuario._id){
        validaciones.push('El usuario requerida');
    }

    if (!req.body.marca._id){
        validaciones.push('La marca es requerida');
    }

    if (!req.body.tipoEquipo._id){
        validaciones.push('EL tipo de equipo es requerido');
    }

    if (!req.body.estadoEquipo._id){
        validaciones.push('El estado de equipo es requerido');
    }
    return validaciones;
}
module.exports ={
    validarInventario,
}