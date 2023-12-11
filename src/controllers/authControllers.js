module.exports = {
authLogin : (req, res) => res.render('login'), 
authLoginPost : (req, res) => res.redirect('home'),
authRegister : (req, res) => res.render('register'),
authRegisterPost : (req, res) => { res.redirect('home')},
authLogout : (req, res) => res.render('auth logout'),

}