/*
    path: api/login
*/
const { Router } = require('express');
const { check } = require('express-validator');

// Controladores
const { createUser, login, renewToken } = require('../controllers/auth');
const { fieldValidator } = require('../middlewares/fields-validator');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();


// Crear nuevos usuarios
router.post('/new', [
    check('nombre', 'El nombre es obligatorio!').not().isEmpty(),
    check('password', 'El password es obligatorio!').not().isEmpty(),
    check('email', 'El email es obligatorio!').isEmail(),
    //Middleware personalizado
    fieldValidator
    
], createUser);


// Login
router.post('/', [
    // express-validator
    check('email', 'El email es obligatorio!').isEmail(),
    check('password', 'El password es obligatorio!').not().isEmpty(),
    // Middleware personalizado
    fieldValidator

], login);


// Revalidar Token
router.get('/renew', [ validateJWT ], renewToken);




module.exports = router;