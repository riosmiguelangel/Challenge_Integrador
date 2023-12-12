const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;
const session = require('express-session');

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(session({
	secret: "S3cr3t01H@sh",
	resave: false,
	saveUninitialized: false,
}))

/* OPCION DE SESIÓN→*/
const isLogged = (req, res, next) =>{
	if(!req.session.user_id){
		return res.redirect('/auth/login')
	}
	next()
} 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }))

app.use(express.static('public'));

//app.use(express.urlencoded());
//app.use(express.json());

app.use(methodOverride('_method'));

/* Rutas de la aplicacion */

app.use('/home', isLogged, mainRoutes);
app.use('/shop', isLogged, shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
//app.use('/admin', →isLogged, adminRoutes) // /admin/detalles o /admin/actualizar /admin/bla
app.use((req, res, next) =>{
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => console.log("Servidor corriendo en http://localhost:3000") ); 