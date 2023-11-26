module.exports = {
authLogin : (req, res) => res.render('login'), 
authLoginPost : (req, res) => res.render('auth login post'),
authRegister : (req, res) => res.render('register'),
authRegisterPost : (req, res) => res.render('auth register post'),
authLogout : (req, res) => res.render('auth logout'),

}