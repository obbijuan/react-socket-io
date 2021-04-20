/*
    path: api/login
*/
const { Router } = require('express');

const router = Router();


// Crear nuevos usuarios
router.post('/new', (req, res) => {

    res.json({
        ok: true,
        usuario: 'obbijuan'
    });
});


// Login
router.post('/', (req, res) => {
    res.json({
        ok: true,
        usuario: 'login'
    });
})


// Revalidar Token
router.post('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
})




module.exports = router;