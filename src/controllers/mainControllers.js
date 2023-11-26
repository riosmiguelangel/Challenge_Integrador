module.exports = {
    homeView :(req, res) => res.render("index", {
        view:{
            title :" Home | Funkoshop"
        },
    }),
    contactView : (req, res) => res.send("Pagina de Contact"),
    abautView : (req, res) => res.send("Pagina de Abaut"),
    faqsView : (req, res) => res.send("Pagina de Faqs"),
};