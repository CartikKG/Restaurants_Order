const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: "users",
    },
    allOrder: [
      {
        itemName: { type: String },
        price: { type: String },
        quantity: { type: Number },
        date: { type: Date },
        sub_total: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
