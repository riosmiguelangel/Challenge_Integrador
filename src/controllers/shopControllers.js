module.exports = {
    shopView :(req, res) => res.render("./shop/shop" ,{
        view:{
            title :" Shop | Funkoshop"
        },
    }),
    itemView : (req, res) => res.render("./shop/item" ,{
        view:{
            title :" Item | Funkoshop"
        },
    }),
    addItemToCart : (req, res) => res.send("Pagina de agregar item al carrito"),
    cartView : (req, res) => res.render("./shop/carrito" ,{
        view:{
            title :" Cart | Funkoshop"
        },
    }),
    checkout : (req, res) => res.send("Pagina para ver los productos seleccionados"),
};