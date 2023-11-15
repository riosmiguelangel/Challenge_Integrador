const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers.js');


router.get('/home', mainControllers.homeView);
router.get('/contact', mainControllers.contactView);
router.get('/abaut', mainControllers.abautView);
router.get('/faqs', mainControllers.faqsView);

module.exports = router;