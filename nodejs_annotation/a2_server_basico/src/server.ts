// Aula Criando um servidor HTTP básico

import { createServer } from 'node:http';

const server = createServer((req,res) => {
    let nome:string = "Augusto";
    let idade:number = 90;
    res.end(`Ola mundo, eu sou ${nome} e tenho ${idade} anos.`);
});


server.listen(3000,() => {
    console.log("Servidor funcionando em http://localhost:3000");
});