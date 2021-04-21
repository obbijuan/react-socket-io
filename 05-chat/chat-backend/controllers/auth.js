const { response } = require('express');
const { validationResult } = require('express-validator');


const createUser = async(req, res = response) => {

    res.json({
        ok: true,
        usuario: 'obbijuan'
    });

}

const login = async(req, res) => {

    const errores = validationResult(req);
    
    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }

    const { email, password } = req.body;

    res.json({
        ok: true,
        usuario: 'login',
        email,
        password
    });

}
    
    
const renewToken = async(req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}



module.exports = {
    createUser,
    login,
    renewToken
}