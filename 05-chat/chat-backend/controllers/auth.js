const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/user');
const { generateJWT } = require('../helpers/jwt');


const createUser = async(req, res = response) => {

    try {

        const { email, password } = req.body;

        const existEmail = await Usuario.findOne({ email });
        if ( existEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe!'
            });
        }

        const usuario = new Usuario( req.body );

        //Encriptar password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        // Guardar usuario en DB
        await usuario.save();

        // Generar el JWT
        const token = await generateJWT( usuario.id )


        res.json({
            usuario,
            token
        })

        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador!'
        })
    }

}


const login = async(req, res) => {

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