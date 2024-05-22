const mongoose = require("mongoose");
const { type } = require("os");

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true, unique: true },
  limit: { type: Number, required: true, unique: true },
  startDate: { type: Date, required: true, unique: true },
  endDate: { type: Date, required: true, unique: true },
  dealType: { type: String, required: true, unique: true },
  couponType: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Coupon", couponSchema);
