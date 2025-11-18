import type { RequestHandler } from "express";

export const interferir:RequestHandler = (req,res,next) => {
    const dataLog = {
        date: new Date().toLocaleDateString('pt-BR',{day:"2-digit",month:'2-digit',year:'numeric'}),
        ip: req.ip
    }
    console.log(JSON.stringify(dataLog));

    let logged = true;
    if(!logged) {
        return res.status(403).json({erro:'not logged'});
    }

    next();
}