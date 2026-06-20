import express from "express";

const router = express.Router();

import {
  getAllCampaigns,
  generateCampaign,
} from "../controllers/campaignController.js";

import { generateMarketingContent } from "../services/aiService.js";

router.get("/ai-test", async (req, res) => {
  try {
    const result = await generateMarketingContent(
      "Write a short Instagram caption promoting a coffee shop.",
    );

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/", getAllCampaigns);

router.post("/generate/:id", generateCampaign);

export default router;
