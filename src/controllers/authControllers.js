const userModel = require('../models/userModel.js')
const crypt = require('bcryptjs')

module.exports = {

authLogin: (req, res) => {
  res.render('./auth/login', {
    view: {
      title: "Login | Funkoshop",
    },
    logged: req.session.user_id,
    admin : false,
  })
},

authLoginPost: async (req, res) => {
  //const {email, password} = req.body
  const userLogin = {
    email : req.body.email,
    password : req.body.password,
  }
  const [valido] = await userModel.verificarUser(userLogin.email, userLogin.password)
  if(valido === undefined){
    res.redirect('/auth/login')
  } else if(await (userLogin.email != valido.email) && (userLogin.password != valido.password)){
    //else if(!(await crypt.compare(userLogin.email, valido.email) && crypt.compare(password, valido.password))){
    console.log(userLogin.email, valido.email, userLogin.password, valido.password)
    res.redirect('../../login/?error=1')
  } else {
    req.session.user_id = valido.user_id
    console.log(req.session.user_id)
    if(req.session.user_id ==2){
      console.log("usuario dos") 
      const logueado = true
      console.log(logueado)
    } else {
      console.log(req.session.user_id)}
    //return logueado= req.session.user_id,
    //console.log("logueado: ",logueado),
    res.redirect(`../../admin?user_id=${valido.user_id}`)
  }
},

authRegister : (req, res) => res.render("./auth/register" ,{
  view:{
      title :" Register | Funkoshop"
  },
  logged: req.session.user_id,
  admin : false,
}),

/*authRegisterPost:  async (req, res) => {
  const user = req.body;
  console.log(user)
  const userSchema = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  }
await userModel.crearUsuario(userSchema)
res.redirect('./login');
},*/
authRegisterPost:  async (req, res) => {
  const user = req.body;
  console.log(user)
  const { name, lastname, email, password, password2 } = user;
  const userSchema = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  };
  const [existingUser] = await userModel.verificarUser(userSchema.email, userSchema.password);
  if (existingUser) {
    res.redirect('/auth/register?error=existing');
  } else {
await userModel.crearUsuario(userSchema)
res.redirect('./login');
}
},

authLogout : (req, res) =>{
  req.session.user_id = null,
  res.redirect('../../home');
},

}