console.log("prueba0");
const http = require("http");
const server = http.createServer((req,res)=> {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hola,Mundo");
});
console.log("prueba1");
server.listen(3000,"localhost",()=> {
    console.log("Se levanto el server");
    
});
console.log("prueba2");

setTimeout(() => {
    server.close();
}, 5000);

