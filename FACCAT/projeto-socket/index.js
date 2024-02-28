const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var dinheiro = 100;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  var data = new Date();
  /* var dataHora = data.getHours(); */
  var dataMinuto = data.getMinutes();
  var dataSegundo = data.getSeconds();
  var milisegundosData = dataSegundo * 1000;

  //aviso de conexão
  console.log(`o usuário ${socket.id} conectou`);
  //aviso de desconexão
  socket.on('disconnect', () => {
    console.log(`o usuário ${socket.id} desconectou`);
  });

  socket.on('callSaldo', function(){
    socket.emit('getSaldo',dinheiro);
  });

  socket.on('somar', (valueInput, valueTela) => {

    socket.on('inputHoraSomar', hora => {

      socket.on('inputMinutoSomar', minuto => {

        let milisegundosMinutos = (((minuto - dataMinuto) * 60) * 1000) - milisegundosData;
        /* console.log(`faltam ${milisegundosMinutos} segundos`); */
        setTimeout(() => {

          dinheiro = parseInt(valueInput) + dinheiro;

          io.emit('somar', dinheiro);

        }, milisegundosMinutos);


      });

    });

  });

  socket.on('subtrair', (valueInput, valueTela) => {

    socket.on('inputHoraSubtrair', hora => {

      socket.on('inputMinutoSubtrair', minuto => {
        let milisegundosMinutos = (((minuto - dataMinuto) * 60) * 1000 - milisegundosData);
        /* console.log(`faltam ${milisegundosMinutos} segundos`); */
        setTimeout(() => {

          dinheiro = dinheiro - parseInt(valueInput);

          io.emit('subtrair', dinheiro);

        }, milisegundosMinutos);

      });

    });

  });

});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
