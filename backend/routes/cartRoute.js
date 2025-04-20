const express = require('express');
const cartRouter = express.Router();
const {addToCart, getCart,  removeFromCart} = require('../controllers/cartController')
const authMiddleware = require('../middleware/auth');

cartRouter.post('/add',authMiddleware, addToCart);
cartRouter.get('/get',authMiddleware, getCart);
cartRouter.delete('/remove',authMiddleware, removeFromCart);

module.exports = cartRouter;