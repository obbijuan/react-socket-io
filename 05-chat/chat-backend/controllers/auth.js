const { response } = require('express');


const createUser = async(req, res = response) => {

    res.json({
        ok: true,
        usuario: 'obbijuan'
    });

}

const login = async(req, res) => {
    res.json({
        ok: true,
        usuario: 'login'
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