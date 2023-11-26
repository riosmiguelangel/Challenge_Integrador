

module.exports = {
    shop: (req,res) => {
        res.render('shoop', {
            products: [
                    "Card 1",
                    "Card 2",
                    "Card 3",
                    "Card 4",
                    "Card 5",
                    "Card 6",
                    "Card 7",
                    "Card 8",
                    "Card 9",
            ]   
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