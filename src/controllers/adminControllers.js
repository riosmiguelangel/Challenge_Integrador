const itemsModel = require('../models/itemModel');
const licenceModel = require('../models/licenceModel');
const categoryModel = require('../models/categoryModel');


module.exports = {
    adminView:  async (req, res) => {
        const listaItems = await itemsModel.getAllItems();
        console.log("lodeado en admin: ",req.session.user_id),
        res.render( './admin/admin',{
          view: {
            title: "Admin | Funkoshop",
          },
          items: listaItems,
          logged: req.session.user_id,
          admin : true,
        });
      },

    createView : async(req, res) => {
      const categories = await categoryModel.getAllItemCategory();
      const licences = await licenceModel.getAllItemLicence();

        res.render( './admin/create',{
            view: {
              title: "Create | Funkoshop",
            },
            categories : categories,
            licences: licences,
            logged: req.session.user_id,
            admin : true,
          }); 
    },
    createItem:  async (req, res) => {
        const item = req.body;
        console.log(item)
        const itemSchema = {
          product_name: item.name,
          product_description: item.description,
          price: item.price,
          stock: item.stock,
          discount: item.discount,
          sku: item.sku,
          dues: item.dues,
          image_front: '/'+req.files[0].filename,
          image_back: '/'+req.files[1].filename,
          licence_id: item.collection,
          category_id: item.category
        }
        
      await itemsModel.crearItem(itemSchema)
      res.redirect('/admin');
    },

    editView : async(req, res) =>{
      const id =req.params.id;
      const categories = await categoryModel.getAllItemCategory();
      const licences = await licenceModel.getAllItemLicence();
      const [item] = await itemsModel.getItem(id);
      res.render( './admin/edit',{
        view: {
          title: `Edit Product #${id} | Funkoshop`,
        },
        item: item,
        categories : categories,
        licences: licences,
        logged: req.session.user_id,
        admin : true,
      });

    }, 

    editItem: async (req, res) => {
      const id = req.params.id;
      const item = req.body;
      const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        stock: item.stock,
        discount: item.discount,
        dues: item.dues,
        //image_front: '/'+req.files[0].filename,
        //image_back: '/'+req.files[1].filename,
        licence_id: item.collection,
        category_id: item.category
      }
      const resultado = await itemsModel.edit(itemSchema,id);
      console.log("Resultado: ", resultado);
      res.redirect('/admin');
    },

   
    deleteItem:  async (req, res) => {
      const id = req.params.id;
      await itemsModel.delete(id);
      res.redirect('/admin');
    },
};