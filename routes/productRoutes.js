const express = require('express');
const { isAdmin, AuthenticatorJWT } = require('../middlewares/authenticator');
const { getProductById, updateProduct, deleteProduct, getRelatedProducts, uploadProduct, getAllAdminProducts, getLimitedProducts, getProductByOneParameter, getFeaturedProducts, getSellerLimitedProducts, getFilteredProductsCount, getSellerProductByOneParameter, searchProducts, filterProducts, uploadBulkProducts } = require('../controllers/productController');

const router = express.Router();

router.get('/get/related/:id', getRelatedProducts);
router.get('/get/featured', getFeaturedProducts);
router.get('/admin/get/:id', getAllAdminProducts);
router.get('/product/:id', getProductById);
router.get('/get/related/:id', getRelatedProducts);
router.post('/get', getLimitedProducts);
router.post('/search', searchProducts);
router.post('/filter', filterProducts);
router.post('/create', AuthenticatorJWT, isAdmin, uploadProduct);
router.post('/bulk-upload', AuthenticatorJWT, isAdmin, uploadBulkProducts);
router.put('/update/:id', AuthenticatorJWT, isAdmin, updateProduct);
router.delete('/delete/:id', AuthenticatorJWT, isAdmin, deleteProduct);

module.exports = router;