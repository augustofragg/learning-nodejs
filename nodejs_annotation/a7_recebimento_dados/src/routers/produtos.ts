import express from "express"

const produtosRouter = express.Router();

produtosRouter.get('/', (req, res) => {
    res.json({ produtos: [] });
})

produtosRouter.get('/:id', (req, res) => {
    // const { id="não informado" } = req.params;
    const { id } = req.params;
    if (!Number(id)) {
        res.status(404).json({ errorMessage: "Invalid Id" });
    }
    res.json({ id, name: "X,Y,Z", price: 1234 });
})

// Rota com parametros na url e query
produtosRouter.get('/carros/:marca/:modelo', (req, res) => {
    const { marca, modelo } = req.params;
    const { order, price } = req.query;

    console.log('PARAMS ', JSON.stringify(req.params));
    console.log('QUERY', JSON.stringify(req.query));
    res.json(
        {
            carro: {
                marca,
                modelo
            },
            options: { 
                order, 
                price 
            }
        })
})

// Rota do tipo post
produtosRouter.post('/admin/produtos',(req,res) => {
    const {marca, modelo} = req.body;

    console.log('BODY ',JSON.stringify(req.body));

    res.json({
        carro: {
            marca,
            modelo
        }
    })
})



export default produtosRouter;