// Aula introdução ao express

import express, { type Request }  from "express";
import helmet from 'helmet';
import path from "path";
const server = express();

// use()
// Adiciona configuração e bibliotecas ao expressJs
server.use(helmet());

// Adiciona o tipo json no header de resposta do servidor
server.use(express.json());

// Ele ativa um middleware que permite ao Express ler os dados 
// enviados através de formulários HTML via POST, PUT, etc., no formato:
server.use(express.urlencoded({extended:true}));

// Configura o path da pasta publlic
const __dirname = path.resolve();
server.use(express.static(path.join(__dirname,'public')));

server.get('/ping/', (req,res) => {
    res.json({pong:true});
});

server.get('/produtos/:id',(req,res) => {
    // const { id="não informado" } = req.params;
    const { id } = req.params;
    if(!Number(id)) {
        res.status(404).json({errorMessage:"Invalid Id"});
    }
    
    res.json({id,name:"X,Y,Z",price:1234});
})

server.get('/voos/:to/:from',(req,res) => {
    const {to, from} = req.params;
    res.json({
        flight:{
            to:to.toUpperCase(),
            from:from.toUpperCase(),
            price:2000
        }
    })
})




server.listen(3000,() => {
    console.log("Servidor funcionando no link http://localhost:3000");
})