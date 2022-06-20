// importamos dos funciones de mongoose
// primero es esquema y el modelo que se crea a partir del esquema

const {Schema,model} = require('mongoose');

const UsuariosSchema = Schema({
    nombre:{
        type: String,
        require:true,
    },

    email:{
        type:String,
        require:true,
        unique: true, // unique mail unico 
    },

    estado:{
        type: String,
        require:true,
        enum: [
            'Activo',
            'Inactivo'
        ]
    },
    fechaCreacion:{
        type: Date,
        require:true,
    },

    fechaActualizacion:{
        type: Date,
        require:true,
    },

});

module.exports =model('Usuario',UsuariosSchema);