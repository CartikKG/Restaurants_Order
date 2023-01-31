const User = require("../model/userModel");
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
  const { name, phoneNumber, password } = req.body;
  try {
    const exitisUser = await User.findOne({ phoneNumber });
    if (exitisUser) {
      return " Users Alrady exists with the given email";
    }
    password = bscryptjs.hashSync(password);
    let user = await User.create({
      name,
      password,
      phoneNumber,
    });
    user = user.toJSON();
    delete user.password;
    let res = generateToken(user);
    res.send({ res: res });
  } catch (error) {
    res.send({ error: "Someting went Wrong" });
  }
});
route.post("/login-user", async (req, res) => {
  try {
    const exist = await User.findOne({
      phoneNumber,
    });
    if (!exist) {
      return " User Not Found with this email";
    }
    const match = bscryptjs.compareSync(password, exist.password);

    if (match) {
      const token = generateToken(exist.toJSON());
      res.send({ token });
    } else {
      res.send({ error: "password is incorrect" });
    }
  } catch (error) {
    res.send({ error: "Someting went Wrong" });
  }
});
route.post("/add-order", authorization, async (req, res) => {
  const user = req.user;
  let { itemName, quantity, date, sub_total, userId } = req.body;
  try {
    const order = await Order.findOne({ owner: userId });
    if (order) {
      order.allOrder.push({ itemName, quantity, date, sub_total });
      order.save();
      return res.send({ cart: cart });
    } else {
      const order = await Order.create({
        owner: userId,
        allOrder: [{ itemName, quantity, date, sub_total }],
      });
      return res.send({ order });
    }
  } catch (error) {
    res.send({ error: "Someting went Wrong" });
  }
});
route.get("/get-order", authorization, async (req, res) => {
  const user = req.user;

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
