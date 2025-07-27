require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  const newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode,
  });

  await newOrder.save();

  if (mode === "BUY") {
    let holding = await HoldingsModel.findOne({ name });

    if (holding) {
      // Update existing holding
      const totalQty = holding.qty + qty;
      const totalCost = holding.qty * holding.price + qty * price;
      const avgPrice = totalCost / totalQty;

      holding.qty = totalQty;
      holding.price = avgPrice;

      await holding.save();
    } else {
      // Create new holding
      const newHolding = new HoldingsModel({
        name,
        qty,
        price,
      });

      await newHolding.save();
    }
  }

  res.send("Order placed and holding updated.");
});


app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
