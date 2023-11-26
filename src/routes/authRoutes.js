const express = require('express');
const router = express.Router()
const authControllers = require('../controllers/authControllers');


/* AUTH ROUTES */

router.get('/auth/login', authControllers.authLogin);
router.post('/auth/login', authControllers.authLoginPost);
router.get('/auth/register', authControllers.authRegister);
router.post('/auth/register', authControllers.authRegisterPost);
router.get('/auth/logout', authControllers.authLogout);

module.exports = router;