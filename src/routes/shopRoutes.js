const express = require('express');
const router = express.Router();
const session = require('express-session');
const app = express();

const shopControllers = require('../controllers/shopControllers');

app.use(session({
	secret: "S3cr3t01H@sh",
	resave: false,
	saveUninitialized: false,
}))

const isLogged = (req, res, next) =>{
	if(!req.session.user_id){
		return res.redirect('/auth/login')
	}
	next()
} 



router.get('/', isLogged, shopControllers.shopView);
router.get('/item/:id', isLogged, shopControllers.itemView);
router.post('/item/:id/add', isLogged, shopControllers.addItemToCart);
router.get('/cart', isLogged, shopControllers.cartView);
router.post('/cart', isLogged, shopControllers.checkout);

module.exports = router;