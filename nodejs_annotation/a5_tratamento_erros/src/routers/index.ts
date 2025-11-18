import express from "express";
import produtosRouter from "./produtos.js";
import voosRouter from "./voos.js";

const route = express.Router();

route.get('/ping', (req,res) => {
    res.json({pong:true});
});

route.use('/produtos',produtosRouter);
route.use('/voos',voosRouter)

route.get('/',(req, res) => {
    let name = "Augusto";
    let age = 90;
    res.json({name:name, age:age})
})


export default route;