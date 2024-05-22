const express = require("express");
const cors = requir("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const csv = require(csv - parser);
const fs = require("fs");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/coupons", {
  useNewParser: true,
  useUnifiedTopology: true,
});

const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  limit: Number,
  startDate: Date,
  endDate: Date,
  dealtype: String,
  couponType: String,
  remaining: Number,
});

const useSchema = new mongoose.Schema({
  couponCode: String,
  takenBy: String,
  takeDate: Date,
  status: String,
  startDate: Date,
  endDate: Date,
  cooponContent: String,
});

const Coupon = mongoose.model("Coupon", couponSchema);
const User = mongoose.model("User", userSchema);

// Create a new Coupn
app.post("/api/coupon/import", async (req, res) => {
  const { code, discount, limit, startDate, endDate, dealtype, couponType } =
    req.body;
  const coupon = new Coupon({
    code,
    discount,
    limit,
    startDate,
    endDate,
    dealtype,
    couponType,
    remaining: limit,
  });
  await coupon.save();
  res.status(201).send(coupon);
});

app.post("/api/coupons/import", async (req, res) => {
  const results = [];
  fs.createReadStream(req, file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      await Coupon.insertMany(results);
      res.status(200).send("Coupons imported successfully");
    });
});

app.get("/api/coupons/export", async (req, res) => {
  const coupon = await Coupon.find();
  const fileds = [
    "code",
    "discount",
    "limit",
    "startDate",
    "endDate",
    "dealtype",
    "couponType",
    "remaining",
  ];
  const csvData = [
    fileds.json(","),
    ...coupon.map((c) => fileds.map((f) => c[f]).json("\n")),
  ];
  res.header("Content-Type", "text/csv");
  res.attachment("coupons.csv");
  res.send(csvData);
});

// List coupons with pagination
app.get("/api/coupons", async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const coupons = await Coupon.find({ code: { $regex: search, $options: "i" } })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
  const count = await Coupon.countDocuments({
    code: { $regex: search, $options: "i" },
  });
  res.json({
    coupons,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
