/*
    path: api/login
*/
const { Router } = require('express');

// Controladores
const { createUser, login, renewToken } = require('../controllers/auth');

const router = Router();


// Crear nuevos usuarios
router.post('/new', createUser);

// Login
router.post('/', login);

// Revalidar Token
router.post('/renew', renewToken);




module.exports = router;