/*
    path: api/login
*/
const { Router } = require('express');
const { check } = require('express-validator');

// Controladores
const { createUser, login, renewToken } = require('../controllers/auth');

const router = Router();


// Crear nuevos usuarios
router.post('/new', createUser);

// Login
router.post('/', [
    check('email', 'El email es obligatorio!').isEmail(),
    check('password', 'El password es obligatorio!').not().isEmpty()
], login);

// Revalidar Token
router.post('/renew', renewToken);




module.exports = router;