const itemsModel = require('../models/itemModel');

module.exports = {
    //adminView :(req, res) => res.render("Pagina de Admin"),

    adminView:  async (req, res) => {
        const listaItems = await itemsModel.getAllItems();
        res.render( './admin/admin',{
          view: {
            title: "Admin | Funkoshop",
          },
          items: listaItems,
        });
      },

    createView : (req, res) => {
        res.render( './admin/create',{
            view: {
              title: "Create | Funkoshop",
            },
            //items: listaItems,
          }); 
    },



    createItem : (req, res) => res.send("Pagina para crear un nuevo item a la base de datos"),
    editView : (req, res) => res.send("Pagina edit"),
    editItem : (req, res) => res.send("Pagina para editar y cambiar producto seleccionado"),
    deleteItem : (req, res) => res.send("Pagina para eliminar producto seleccionado"),
};