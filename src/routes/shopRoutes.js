const express = require('express')
const router = express.Router()
const shopController = require('../../src/controllers/shopController.js')

/* SHOP ROUTES */

router.get('/shop', shopController.shop);
router.get('/shop/item/:id', shopController.shopItemGet);
router.post('/shop/item/:id/add', shopController.shopItemPost);
router.get('/shop/cart', shopController.shopCart);
router.post('/shop/cart', shopController.shopCartPost); 

module.exports = router;