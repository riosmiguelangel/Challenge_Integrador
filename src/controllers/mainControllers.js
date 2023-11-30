const licenceModel = require('../models/licenceModel');
const itemsModel = require('../models/itemModel');

module.exports = {
    homeView:  async (req, res) => {
        const licences = await licenceModel.getAllItemLicence();
        const listaItems = await itemsModel.getAllItems();
        console.log(licences);
        res.render( 'index',{
          view: {
            title: "Home | Funkoshop",
          },
          collections: licences,
          items: listaItems,
        });
        console.log(licences);
      },


    contactView : (req, res) => res.send("Pagina de Contact"),
    abautView : (req, res) => res.send("Pagina de Abaut"),
    faqsView : (req, res) => res.send("Pagina de Faqs"),
};