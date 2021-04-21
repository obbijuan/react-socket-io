const { validationResult } = require('express-validator');


// Express envia automaticamente el req, res y next y se reciben en la funcion
const fieldValidator = (req, res, next) => {

    const errores = validationResult(req);
    
    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }

    // Si todo sale bien y no hay errores ejecuta next()
    next();

}


module.exports = {
    fieldValidator
}