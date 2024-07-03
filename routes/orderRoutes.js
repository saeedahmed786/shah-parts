const express = require('express');
const { isAdmin, AuthenticatorJWT } = require('../middlewares/authenticator');
const { getAllOrders, setOrderStatus, getAllOrderById, getAllCustomerOrdersById, getAllCompletedOrders, placeOrder, createStripePaymentIntent } = require('../controllers/orderController');

const router = express.Router();

router.get('/get/order/:id', AuthenticatorJWT, getAllOrderById);
router.get('/completed-orders', AuthenticatorJWT, getAllCompletedOrders);
router.get('/admin/all-orders', AuthenticatorJWT, isAdmin, getAllOrders);
router.get('/customer/orders/:id', AuthenticatorJWT, getAllCustomerOrdersById);
router.post('/create-payment-intent', AuthenticatorJWT, createStripePaymentIntent);
router.post('/place-order', AuthenticatorJWT, placeOrder);
router.put('/set/status', AuthenticatorJWT, isAdmin, setOrderStatus);

module.exports = router;