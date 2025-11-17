import express from "express";
import produtosRouter from "./produtos.js";
import voosRouter from "./voos.js";


export const route = express.Router();

route.get('/ping', (req,res) => {
    res.json({pong:true});
});

route.use('/produtos',produtosRouter);
route.use('/voos',voosRouter)


export default route;