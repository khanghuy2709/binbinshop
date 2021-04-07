import express from 'express';
import Order from '../models/orderModel.js';
import { isAuth } from '../util.js'
const xrouter = express.Router();


xrouter.get("/mine",isAuth,  async (req, res) => {
  
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});


xrouter.post("/",isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    phone: req.body.phone,
    address: req.body.address,

    itemsPrice: req.body.itemsPrice,
  
   
    
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});


xrouter.get("/:id", isAuth, async (req, res) => {
  
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});




  export default xrouter;