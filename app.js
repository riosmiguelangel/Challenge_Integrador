const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
/*const authRoutes = require('./src/routes/authRoutes');*/

app.use(express.static('public'));

app.use(express.urlencoded());
app.use(express.json());

/* Rutas de la aplicacion */

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use((req, res, next) =>{
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => console.log("Servidor corriendo en http://localhost:3000") ); 