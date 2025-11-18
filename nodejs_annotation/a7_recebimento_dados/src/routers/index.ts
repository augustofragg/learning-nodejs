import express, { type RequestHandler } from "express";
import produtosRouter from "./produtos.js";
import voosRouter from "./voos.js";
import { interferir } from "../middleware/interferir.js";

const route = express.Router();

//Chamando o Middleware
route.use(interferir)

route.use('/produtos',produtosRouter);
route.use('/voos',voosRouter)

route.get('/ping', (req,res) => {
    res.json({pong:true});
});

route.get('/',(req, res) => {
    let name = "Augusto";
    let age = 90;
    res.json({name:name, age:age})
})


export default route;