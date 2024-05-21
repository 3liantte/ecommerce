const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/coupondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const couponRoutes = require("./routes/coupons");
app.use("/api/coupons", couponRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
