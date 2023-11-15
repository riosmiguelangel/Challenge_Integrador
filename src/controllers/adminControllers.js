module.exports = {
    adminView :(req, res) => res.send("Pagina de Admin"),
    createView : (req, res) => res.send("Pagina de Create"),
    createItem : (req, res) => res.send("Pagina para crear un nuevo item a la base de datos"),
    editView : (req, res) => res.send("Pagina edit"),
    editItem : (req, res) => res.send("Pagina para editar y cambiar producto seleccionado"),
    deleteItem : (req, res) => res.send("Pagina para eliminar producto seleccionado"),
};