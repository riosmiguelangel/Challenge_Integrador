const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT;


const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');





app.set('view engine', 'ejs');
app.set('views' , [
         path.join(__dirname,'./src/views'),
         path.join(__dirname,'./src/views/pages/shopp'),
         path.join(__dirname,'./src/views/pages/admin'),
         path.join(__dirname,'./src/views/pages/auth')
                ]);

        

app.use(express.static('public'));

app.use(express.urlencoded());
app.use(express.json());

app.use('/', mainRoutes);
app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);   
app.use('/', authRoutes);





app.listen( PORT, () => console.log ("Servidor escuchando en http://localhost:3000"))

