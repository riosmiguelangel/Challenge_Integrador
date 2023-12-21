const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');

const adminControllers = require('../controllers/adminControllers');


router.get('/', adminControllers.adminView);
router.get('/create', adminControllers.createView);
router.post('/create', uploadFiles.array('images', 2), adminControllers.createItem);
router.get('/edit/:id', adminControllers.editView);
router.put('/edit/:id', uploadFiles.array('images', 2), adminControllers.editItem);
//router.put('/edit/:id', uploadFiles.fields('images', 2), adminControllers.editItem);
router.delete('/delete/:id', adminControllers.deleteItem);


module.exports = router;