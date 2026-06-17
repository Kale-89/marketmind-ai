const express = require("express");
const cors = require("cors");
require("dotenv").config();

const campaignRoutes = require("./routes/campaignRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", campaignRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "MarketMind AI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
