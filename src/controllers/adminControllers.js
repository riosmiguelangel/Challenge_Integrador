module.exports = {
admin: (req,res) => res.render('admin'),
adminCreate: (req,res) => res.render('create'),
adminCreatePost: (req,res) => res.render('Administrador create post'),
adminEdit: (req,res) => res.render('edit'),
adminEditPut: (req,res) => res.send('archivo recibido'),
adminDelete: (req,res) => res.render('Administrador delete'),
}