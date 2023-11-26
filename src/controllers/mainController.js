const fs = require('fs')

module.exports = {
    inicio: (req, res) => res.render('index'),
    home: (req, res) => res.render('index'), 
    contact: (req, res) => res.send('contacto.html'),
    about: (req, res) => res.send('about.html'),
    faqs: (req, res) => res.send('faqs.html'),
}