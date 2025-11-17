import express from "express"

const produtosRouter = express.Router();

produtosRouter.get('/', (req,res) => {
    res.json({produtos:[]});
})

produtosRouter.get('/:id',(req,res) => {
    // const { id="não informado" } = req.params;
    const { id } = req.params;
    if(!Number(id)) {
        res.status(404).json({errorMessage:"Invalid Id"});
    }
    
    res.json({id,name:"X,Y,Z",price:1234});
})


export default produtosRouter;