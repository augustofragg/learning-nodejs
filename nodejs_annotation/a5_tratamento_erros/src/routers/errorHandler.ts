import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest:RequestHandler = (req,res) => {
    res.status(404).json({erro:"Route not found"});
}

export const errorHandler: ErrorRequestHandler = (err, req, res,next) => {
    console.error(err);
    res.status(500).json({error:"Erro interno"});
    next();
}