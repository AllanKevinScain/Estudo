var express = require('express');
var http = express();
var metodo = require("./function");

http.get("/", (req, res)=>{
    res.send("<a href='http://localhost:3550/teste'>Link</a>");
})

http.get("/teste", (req, res)=>{
    
    var a = "Valor da variavel";
    metodo();
    metodo.call(
        {propriedade: "Teste com call"}
    );
    metodo.apply(
        {propriedade: "valor do this"},
        ["argumento"]
    );
    res.send("Teste de rota");
})

http.listen(3550, ()=>{
    console.log("Servidor rodando");
});
