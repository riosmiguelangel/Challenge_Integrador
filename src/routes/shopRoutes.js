const express = require('express')
const router = express.Router()
const shopController = require('../../src/controllers/shopController.js')

/* SHOP ROUTES */

router.get('/shop', shopController.shop);
router.get('/item/:id', shopController.shopItemGet);
router.post('/item/:id/add', shopController.shopItemPost);
router.get('/cart', shopController.shopCart);
router.post('/cart', shopController.shopCartPost); 

module.exports = router;