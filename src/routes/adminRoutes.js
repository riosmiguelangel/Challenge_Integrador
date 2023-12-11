const express = require('express')
const router = express.Router()
const multer = require ('multer')
const adminControllers = require('../../src/controllers/adminControllers.js')

const storage = multer.diskStorage ({
    destination : (req, file, cb) => cb (null, path.resolve(__dirname, '../../public/img')),
    filename : (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
})

const uploadFile = multer ({storage});



/* ADMIN ROUTES */

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.adminCreate);
router.post('/admin/create', adminControllers.adminCreatePost);
router.get('/admin/edit/:id' , adminControllers.adminEdit);
router.put('/admin/edit/:id',uploadFile.single('image'), adminControllers.adminEditPut);
router.delete('/admin/delete/:id', adminControllers.adminDelete);

module.exports = router;