const express = require('express');
const router = express.Router()
const {body, validationResult, sanitizeBody} = require('express-validator');
const authControllers = require('../controllers/authControllers');
const validacion = require('./../middlewares/validacion.js')
const {conn} = require('./../models/conn.js')



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

/*const validacionRegister = [
    body('name')
    .notEmpty()
    .withMessage('El campo de nombre no puede estar vacio'),
    body('lastname')
    .notEmpty()
    .withMessage('El campo de apellido no puede estar vacio'),


    
	body("email")
	.isEmail()
	.withMessage('Ingrese una direccion de correo electronico valida')
	.bail()
	.custom((value ,{req}) => {
			return new Promise(async (resolve, reject) => {
				try {
					const [usuarioExiste] = await conn.query(`SELECT * FROM user WHERE email = '${req.body.email}'`)
					if(!usuarioExiste){
						return reject()
					} else {
						return resolve()
					}
				} catch (error) {
					console.log(error)
				}
			})
		}),
	/*.withMessage("email duplicado, ya exite usuario"),

    body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
	/*body('apellido')
	.isLength({min: 3})
	.withMessage('Ingrese un apellido válido')
	.custom((value, {req}) => value === req.body.apellido2)
	.withMessage('No coindice el apellido')
	]*/


router.get('/login', authControllers.authLogin);
router.post('/login', authControllers.authLoginPost);
router.get('/register', authControllers.authRegister);
router.post('/register', validacionRegister, validacion, authControllers.authRegisterPost);
router.get('/logout', authControllers.authLogout);

module.exports = router;