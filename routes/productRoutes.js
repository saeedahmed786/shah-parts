const express = require('express');
const { isAdmin, AuthenticatorJWT } = require('../middlewares/authenticator');
const { getProductById, updateProduct, deleteProduct, getRelatedProducts, uploadProduct, getAllAdminProducts, getLimitedProducts, getFeaturedProducts, searchProducts, filterProducts, uploadBulkProducts, getAllProductsMakes, getAllProductsParts, getAllProductsModelsByMake, getAllProductsPartsByModel, getAllProductsPartaccessoriesByPart } = require('../controllers/productController');

const router = express.Router();

router.get('/get/related/:id', getRelatedProducts);
router.get('/get/featured', getFeaturedProducts);
router.get('/admin/get/:id', getAllAdminProducts);
router.get('/product/:id', getProductById);
router.get('/get/related/:id', getRelatedProducts);
router.get('/parts', getAllProductsParts);
router.get('/makes', getAllProductsMakes);
router.post('/models/make', getAllProductsModelsByMake);
router.post('/parts/model', getAllProductsPartsByModel);
router.post('/partaccessories/part', getAllProductsPartaccessoriesByPart);
router.post('/get', getLimitedProducts);
router.post('/search', searchProducts);
router.post('/filter', filterProducts);
router.post('/create', AuthenticatorJWT, isAdmin, uploadProduct);
router.post('/bulk-upload', AuthenticatorJWT, isAdmin, uploadBulkProducts);
router.put('/update/:id', AuthenticatorJWT, isAdmin, updateProduct);
router.delete('/delete/:id', AuthenticatorJWT, isAdmin, deleteProduct);

module.exports = router;