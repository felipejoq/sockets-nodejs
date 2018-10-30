var socket = io();
// Escuchar eventos
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Escuchar eventos
socket.on('disconnect', function () {
    console.log('Se perdió conexión con el servidor');
});

// Enviar información al servidor.
socket.emit('enviarMensaje', {
    usuario: 'Felipe',
    mensaje: 'Hola mundo!'
}, function (respuesta) {
    console.log(respuesta);
});

// escuchamos el mensaje que nos envía el servidor.
socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
})