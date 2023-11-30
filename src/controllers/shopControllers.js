const itemsModel = require('../models/itemModel');

module.exports = {
   
    shopView:  async (req, res) => {
        const listaItems = await itemsModel.getAllItems();
        res.render( './shop/shop',{
          view: {
            title: "Shop | Funkoshop",
          },
          items: listaItems,
        });
      },

    itemView : async (req, res) => {
        const id = req.params.id;
        const [item] = await itemsModel.getItem(id);
        const listaItems = await itemsModel.getAllItems();
      
        res.render("./shop/item" ,{
            view:{
                title :" Item | Funkoshop"
            },
            item : item,
            enableGlide: true,
            items: listaItems,
        });
    },
    
    

    addItemToCart : (req, res) => res.send("Pagina de agregar item al carrito"),

    cartView : (req, res) => res.render("./shop/carrito" ,{
        view:{
            title :" Cart | Funkoshop"
        },
    }),
    checkout : (req, res) => res.send("Pagina para ver los productos seleccionados"),
};