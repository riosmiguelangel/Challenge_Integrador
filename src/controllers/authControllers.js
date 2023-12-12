const userModel = require('../models/userModel.js')
const crypt = require('bcryptjs')

module.exports = {

authLogin: (req, res) => {
  res.render('./auth/login', {
    view: {
      title: "Login | Funkoshop",
    },
  })
},

authLoginPost: async (req, res) => {
  //const {email, password} = req.body
  const userLogin = {
    email : req.body.email,
    password : req.body.password,
  }
  console.log(userLogin)
  console.log(userLogin.email)
  const [valido] = await userModel.verificarUser(userLogin.email, userLogin.password)
  console.log("Login")
  console.log("valido: ",valido)
  if(valido === undefined){
    res.redirect('/auth/login')
  } else if(await (userLogin.email != valido.email) && (userLogin.password != valido.password)){
    //else if(!(await crypt.compare(userLogin.email, valido.email) && crypt.compare(password, valido.password))){
    console.log(userLogin.email, valido.email, userLogin.password, valido.password)
    res.redirect('../../login/?error=1')
  } else {
    console.log(valido.user_id)
    req.session.user_id = valido.user_id
    return logueado= req.session.user_id,
    console.log("logueado: ",logueado),
    res.redirect(`../../home?user_id=${valido.user_id}`)
  }
},

authRegister : (req, res) => res.render("./auth/register" ,{
  view:{
      //title :" Register | Funkoshop"
  },
}),

authRegisterPost:  async (req, res) => {
  const user = req.body;
  console.log(user)
  const userSchema = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  }
await userModel.crearUsuario(userSchema)
res.redirect('/home');
},

authLogout : (req, res) =>{
  req.session.user_id = null,
  res.redirect('../../home');
},

}