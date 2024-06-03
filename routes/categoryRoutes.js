const express = require('express');
const { AuthenticatorJWT, isAdmin } = require('../middlewares/authenticator');
const { getAllCategories, getCategoryById, updateCategory, deleteCategory, addCategories } = require('../controllers/categoryController');

const router = express.Router();

router.get('/get', getAllCategories);
router.post('/add', AuthenticatorJWT, isAdmin, addCategories);
router.get('/get/:id', getCategoryById);
router.put('/update/:id', AuthenticatorJWT, isAdmin, updateCategory);
router.delete('/delete/:id', AuthenticatorJWT, isAdmin, deleteCategory);


module.exports = router;