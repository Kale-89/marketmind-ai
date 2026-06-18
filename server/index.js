import express from "express";
import cors from "cors";

import campaignRoutes from "./routes/campaignRoutes.js";

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
