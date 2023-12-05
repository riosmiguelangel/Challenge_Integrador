const itemsModel = require('../models/itemModel');
const licenceModel = require('../models/licenceModel');
const categoryModel = require('../models/categoryModel');

module.exports = {
    adminView:  async (req, res) => {
        const listaItems = await itemsModel.getAllItems();
        res.render( './admin/admin',{
          view: {
            title: "Admin | Funkoshop",
          },
          items: listaItems,
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
          }); 
    },
    createItem:  async (req, res) => {
        const item = req.body;
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
      console.log(item)
      res.render( './admin/edit',{
        view: {
          title: `Edit Product #${id} | Funkoshop`,
        },
        item: item,
        categories : categories,
        licences: licences,
      });
      
    }, 

    editItem : async(req, res) => {
      const item = req.body;
      console.log(item, req.files);
      /*const itemSchema = {
        product_id : req.params.id,
        product_name: req.body.name,
        product_description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        discount: req.body.discount,
        sku: req.body.sku,
        dues: req.body.dues,
        //image_front: '/imagen_front',
        //image_back: '/imagen_front',
        licence_id: req.body.collection,
        category_id: req.body.category
      }
      const mm= await ItemModel.edit(itemSchema, {product_id: id});
      //await ItemsService.edit(item, id);*/
      res.redirect('/admin');

    } ,
    
    //res.send("Pagina para editar y cambiar producto seleccionado"),
   deleteItem : (req, res) => res.send("Pagina para eliminar producto seleccionado"),
};