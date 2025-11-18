// Aula Rotas organização das pastas
import express from 'express'
import helmet from "helmet"
import path from "path";
import route from './routers/index.js'
import { errorHandler, notFoundRequest } from './routers/errorHandler.js';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));

const __dirname = path.resolve();
server.use('/',route);
server.use(express.static(path.join(__dirname,'public')));
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(3000,() => {
    console.log(`servidor ligado, link http://127.0.0.1:3000`);
})