const {Router} = require ('express');
const req = require('express/lib/request');
const router = Router ();
const TipoEquipo = require ('../models/TipoEquipo');
const {validartipoEquipo} = require('../helpers/validar-tipoEquipo');


router.post('/', async function(req,res){
    try {
        const validaciones =validartipoEquipo(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones)
        }

        let tipoEquipo = new TipoEquipo ();

        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date ();
        tipoEquipo = await tipoEquipo.save ();

        res.send(tipoEquipo);
  
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el tipo de equipo');
    }
});

router.get('/', async function(req,res) {
    try {
        const tipoEquipos = await TipoEquipo.find();
        res.send(tipoEquipos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('ocurrio un error');       
    }
});

router.put('/:tipoEquipoId',async function(req,res){
    try {
        const validaciones =validartipoEquipo(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones)
        }

        let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);

        if (!tipoEquipo) {
            return res.status(400).send('El tipo de equipo no existe')
        };           
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaActualizacion = new Date ();
            
        tipoEquipo = await tipoEquipo.save(); 
        res.send(tipoEquipo);    
        } catch (error) {
            console.log(error);
            res.status(500).send('El tipo de equipo no existe');
        }    
    });

   router.get ('/:tipoEquipoId', async function(rep, res){
    try {
        const tipoEquipo = await TipoEquipo.findById(req.param.tipoEquipoId);
        if (!tipoEquipo) {
            return res.status(400).send('El estado de equipo es incorrecto')
        }; 
    } catch (error) {
        console.log(error);
        res.status(500).send('El tipo de equipo no existe');
    }
     
   }) 
module.exports = router;
