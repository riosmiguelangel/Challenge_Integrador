const express = require('express');
const router = express.Router()
const {body, validationResult, sanitizeBody} = require('express-validator');
const authControllers = require('../controllers/authControllers');
const validacion = require('./../middlewares/validacion.js')


/* AUTH ROUTES */

const validacionRegister = [
    body('name')
    .notEmpty()
    .withMessage('El campo de nombre no puede estar vacio'),
    body('lastname')
    .notEmpty()
    .withMessage('El campo de apellido no puede estar vacio'),
    body('email')
    .isEmail()
    .withMessage('Ingrese una direccion de correo electronico valida'),
    body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

]

router.get('/login', authControllers.authLogin);
router.post('/login', authControllers.authLoginPost);
router.get('/register', authControllers.authRegister);
router.post('/register', validacionRegister, validacion, authControllers.authRegisterPost);
router.get('/logout', authControllers.authLogout);

module.exports = router;