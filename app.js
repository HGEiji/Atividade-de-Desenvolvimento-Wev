var http = require('http');

http.createServer(function(req,res){
    res.end("Olá")
}).listen(8083)

console.log("Servidor ativo")