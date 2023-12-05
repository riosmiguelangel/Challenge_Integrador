const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static('public'));

app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'));

/* Rutas de la aplicacion */

app.use('/home', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use((req, res, next) =>{
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => console.log("Servidor corriendo en http://localhost:3000") ); 

// ----------------- Linea de prueba para ver que todo esta bien (by Axel) ---------------------- //