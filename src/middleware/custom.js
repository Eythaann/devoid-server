'use strict'
import error_types from '../lib/error_types.js';
    /* Este middleware va al final de todos los middleware y rutas.
    middleware de manejo de errores. */
   export const errorHandler = (error, req, res, next) => {
        //console.log("ejecutando middleware de control de errores");
        if(error instanceof error_types.InfoError)
            res.json({error: error.message}).status(200);
        else if(error instanceof error_types.Error404)
            res.json({error: error.message}).status(404);
        else if(error instanceof error_types.Error403)
            res.json({error: error.message}).status(403);
        else if(error instanceof error_types.Error401)
            res.json({error: error.message}).status(401);
        else if(error.message)
            res.json({error: error.message}).status(500);
        else
            next();
    }