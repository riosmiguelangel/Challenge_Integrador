module.exports = {
    loginView :(req, res) => res.render("./auth/login" ,{
        view:{
            title :" Login | Funkoshop"
        },
    }),
    loginUser : (req, res) => res.send("Pagina de Login usuario"),
    registerView : (req, res) => res.send("Pagina Register"),
    registerUser : (req, res) => res.send("Pagina registrar nuevo usuario"),
    logout : (req, res) => res.send("Pagina para desloguearse"),
};