const express = require('express');
const socketIO = require('socket.io'); // Importamos la librería de socket.io
const http = require('http'); // Socket.io trabaja con http de node, no diresctamente con express.

const path = require('path');

const app = express(); //Instancia de express.
// Instancia de servidor con http, con las configuraciones de express.
let server = http.createServer(app);
// Constantes de entorno.
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// Crea el servidor con Express, creantdo un directorio público.
app.use(express.static(publicPath));
// IO = esta es la comunicación del back-end
// Exporto la variable io para ser usada en el otro script de socket
module.exports.io = socketIO(server);
// llamo al socket para ser usado en server.
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});