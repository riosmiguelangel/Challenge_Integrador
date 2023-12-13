const licenceModel = require('../models/licenceModel');
const itemsModel = require('../models/itemModel');

module.exports = {
    homeView:  async (req, res) => {
        const licences = await licenceModel.getAllItemLicence();
        const listaItems = await itemsModel.getAllItems();
        const lastItems = await itemsModel.getLastItems();

          res.render( 'index',{
          view: {
            title: "Home | Funkoshop",
            logged : req.session.user_id
          },
          collections: licences,
          items: listaItems,
          sliderItems : lastItems,
          
        });
        //console.log(licences);
      },
      

    contactView : (req, res) => res.send("Pagina de Contact"),
    abautView : (req, res) => res.send("Pagina de Abaut"),
    faqsView : (req, res) => res.send("Pagina de Faqs"),
};