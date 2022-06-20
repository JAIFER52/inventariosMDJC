const { Router } = require('express');
const router = Router ();
const EstadoEquipo = require ('../models/EstadoEquipo')
const {validarEstadoEquipo} = require('../helpers/validad-estadoEquipo');

router.post('/',async function(req,res){
    
try {
    const validaciones =validarEstadoEquipo(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones)
        }
    let estadoEquipo = new EstadoEquipo();
    estadoEquipo.nombre = req.body.nombre;
    estadoEquipo.estado = req.body.estado;
    estadoEquipo.fechaCreacion = new Date();
    estadoEquipo.fechaActualizacion = new Date ();
    estadoEquipo = await estadoEquipo.save ();
    res.send(estadoEquipo);
} catch (error) {
    console.log(error);
    res.status(500).send('Error en el tipo de equipo');
}
});

router.get('/',async function(req,res){
    try {
        const estadoEquipos = await EstadoEquipo.find();
        res.send(estadoEquipos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('ocurrio un error');       
    }
});

router.put('/:estadoEquipoId',async function(req,res){
   
    try {
        const validaciones =validarEstadoEquipo(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones)
        }

      let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);

        if (!estadoEquipo) {
            return res.status(400).send('El estado de equipo es incorrecto')
        };           
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date ();
            
        estadoEquipo = await estadoEquipo.save(); 
        res.send(estadoEquipo);    
        } catch (error) {
            console.log(error);
            res.status(500).send('El estado de equipo no existe');
        }    
    });


module.exports= router;

