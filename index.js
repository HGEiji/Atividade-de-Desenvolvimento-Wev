const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/sobre",function(req,res){
    res.sendFile(__dirname + "/sobre.html");
})

app.get('/ola/:cargo/:nome',function(req,res){
    //res.send(req.params)
    res.send("Olá " + req.params.nome +"<br> se cargo: " + req.params.cargo)

})

app.listen(8083, function(){
    console.log("Servidor ativo 2 | localhost:8083")
})