module.exports = {
    shopView :(req, res) => res.send("Pagina de Shop"),
    itemView : (req, res) => res.send("Pagina de Item"),
    addItemToCart : (req, res) => res.send("Pagina de agregar item al carrito"),
    cartView : (req, res) => res.send("Pagina de carrito"),
    checkout : (req, res) => res.send("Pagina para ver los productos seleccionados"),
};