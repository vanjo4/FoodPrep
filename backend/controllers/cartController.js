const userModel = require('../models/userModel');
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId)
        let cartData = userData.cartData
        if(!cartData[req.body.itemId])
            cartData[req.body.itemId] = 1
        else
            cartData[req.body.itemId] += 1
        
        await userModel.findByIdAndUpdate(req.userId, {cartData:cartData})
        res.status(200).json({message:"Item added to cart"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId)
        let cartData = userData.cartData
        console.log(cartData)
        res.status(200).json({cartData})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId)
        let cartData = userData.cartData
        console.log(req.query.itemId)
        if(cartData[req.query.itemId]){
            cartData[req.query.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.userId, {cartData:cartData})
        res.status(200).json({message:"Item removed from cart"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {
    addToCart,
    getCart,
    removeFromCart
}