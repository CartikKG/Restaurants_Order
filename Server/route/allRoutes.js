const User = require("../model/userModel");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const Order = require("../model/orderModel");
const bscryptjs = require("bcryptjs");
const express = require("express");
const authorization = require("../middleware/authorization");
const route = express.Router();
function generateToken(user) {
  if (user.password) {
    delete user.password;
  }
  return jwt.sign(user, config.JWT_SECRET_KEY);
}

route.post("/add-user", async (req, res) => {
  let { name, phoneNumber, password } = req.body;
  try {
    let exitisUser = await User.findOne({ phoneNumber });
    if (exitisUser) {
      return res.send({ error: " Users Alrady exists with the given email" });
    }
    password = bscryptjs.hashSync(password);
    let user = await User.create({
      name,
      password,
      phoneNumber,
    });
    user = user.toJSON();
    delete user.password;
    let ress = generateToken(user);
    res.send({ res: ress });
  } catch (error) {
    res.send({ error });
  }
});
route.post("/login-user", async (req, res) => {
  let { phoneNumber, password } = req.body;
  try {
    const exist = await User.findOne({
      phoneNumber,
    });
    if (!exist) {
      return res.send({ error: " User Not Found with this email" });
    }
    const match = bscryptjs.compareSync(password, exist.password);

    if (match) {
      const token = generateToken(exist.toJSON());
      return res.send({ token });
    } else {
      return res.send({ error: "Password is incorrect" });
    }
  } catch (error) {
    return res.send({ error: "Someting went Wrong" });
  }
});
route.post("/add-order", authorization, async (req, res) => {
  console.log(req.user);
  const user = req.user;
  let { itemName, quantity, sub_total } = req.body;
  try {
    const order = await Order.findOne({ owner: user._id }).populate("owner");
    if (order) {
      order.allOrder.push({ itemName, quantity, sub_total });
      await order.save();
      return res.send({ order });
    } else {
      const order = await Order.create({
        owner: user._id,
        allOrder: [{ itemName, quantity, sub_total }],
      });
      return res.send({ order });
    }
  } catch (error) {
    res.send({ error: "Someting went Wrong" });
  }
});
route.get("/get-order", authorization, async (req, res) => {
  try {
    let order = Order.findOne({ owner: user._id }).populate("owner");
    if (order) {
      res.send({ order });
    } else {
      res.send({ error: "Order Not Found" });
    }
  } catch (error) {
    res.send({ error: "Someting went Wrong" });
  }
});
module.exports = route;
