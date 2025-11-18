import express from "express";

const voosRouter = express.Router();

voosRouter.get('/:to/:from',(req,res) => {
    const {to, from} = req.params;
    res.json({
        flight:{
            to:to.toUpperCase(),
            from:from.toUpperCase(),
            price:2000
        }
    })
})

export default voosRouter;