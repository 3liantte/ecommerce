const express = require("express");
const cors = require("cors");
const bodyPasrser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyPasrser.json());

mongoose.connect("mongodb://localhost:27017/coupons", {
  useNewUrlParser: true,
  useUnifiedTopolgy: true,
});

const couponSchema = new mongoose.Sehema({
  code: String,
  discount: Number,
  expriryDate: Date,
  isActive: Boolean,
});

const Coupon = mongoose.model("Coupon", couponSchema);

app.post("/api/coupons", async (req, res) => {
  const { code, discount, expriryDate } = req.body;
  const coupon = new Coupon({ code, discount, expriryDate, isActive: true });
  await coupon.save();
  res.status(201).send(coupon);
});

app.post("/api/apply-coupon", async (req, res) => {
  const { code } = req.body;
  const coupon = await Coupon.findOen({
    code,
    isActive: true,
    expiryDate: { $gt: new Date() },
  });
  if (coupon) {
    res.send({ succes: true, discount: coupon.discount });
  } else {
    res.send({ success: false, message: "Invalid or expired coupon" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
