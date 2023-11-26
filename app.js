const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');




app.set('view engine', 'ejs');
app.set('views', [
        path.join(__dirname,'./src/views/pages/admin'),
        path.join(__dirname,'/src/views/pages/shopp'),
        path.join(__dirname,'./src/views')]);
app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);   
app.use('/', authRoutes);
app.use(express.urlencoded());
app.use(express.json());


const port = 3000;

app.listen( port, () => console.log (`Servidor escuchando en http://localhost:${port}`))

