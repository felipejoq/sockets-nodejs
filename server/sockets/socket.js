// Recibo la variable desde module.exports que viene desde server.
const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Cliente conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenidos a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Cliente conectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        
        // if(mensaje.usuario ){
        //     callback({
        //         respuesta: 'TODO SALIÓ BIEN'
        //     });
        // }else{
        //     callback({
        //         respuesta: 'TODO SALIO MALLLLLLL!'
        //     })
        // }


    });

});