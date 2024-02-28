var app = require("http");

let host = "localhost";
let porta = 4550;

let servidor = app.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello world");
})

servidor.listen(porta, host, ()=>{
    console.log(`Rodando no endereço: http://${host}:${porta}`);
})