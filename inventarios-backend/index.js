// llamamos al archivo get connection
// express nos sirve para crear el servidor web, acepta el http
const express = require('express');
const { getConnection } = require('./db/db-connection-mongo');
require ('dotenv').config();
const cors = require('cors');

const app = express();
const port= process.env.PORT; // process.env.PORT variable de entorno. flexibilidad

app.use(cors())

 getConnection();
// parseo json

app.use(express.json());
 app.use('/usuario', require('./router/usuario'));

 app.use('/estadoEquipo', require ('./router/estadoEquipo'));

 app.use('/marca', require ('./router/marca'));

 app.use('/tipoEquipo', require('./router/tipoEquipo'));

 app.use ('/inventario', require ('./router/inventario'))

 app.use(cors());


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

