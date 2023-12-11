const models = require('../models/items.js')

module.exports = {
    shop: async (req,res) => {
        const productshop = await models.getItems()
        res.render('shop', {
            products: productshop  
        });},


    shopItemGet: (req,res) => res.render ('item'),
    shopItemPost: (req,res) => res.render('shopItemPost'),
    shopCart: (req,res) => {
        res.render ('carrito', {
            product : [
                "cart 1",
                "cart 2",
            ]
        })},
    shopCartPost: (req,res) => res.render('shopCartPost')
}