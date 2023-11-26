const express = require('express')
const router = express.Router()
const adminControllers = require('../../src/controllers/adminControllers.js')

/* ADMIN ROUTES */

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.adminCreate);
router.post('/admin/create', adminControllers.adminCreatePost);
router.get('/admin/edit/:id', adminControllers.adminEdit);
router.put('/admin/edit/:id', adminControllers.adminEditPut);
router.delete('/admin/delete/:id', adminControllers.adminDelete);

module.exports = router;