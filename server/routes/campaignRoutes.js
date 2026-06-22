import express from "express";

const router = express.Router();

import {
  getAllCampaigns,
  generateCampaign,
} from "../controllers/campaignController.js";

import { generateMarketingContent } from "../services/aiService.js";

router.get("/ai-test", async (req, res) => {
  try {
    const result = await generateMarketingContent(`
Generate ONLY valid JSON.

{
  "instagram_caption":"",
  "hashtags":""
}

Business Name: Coffee House
Product: Latte
Target Audience: Coffee Lovers
Platform: Instagram
Tone: Friendly
`);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/", getAllCampaigns);

router.post("/generate/:id", generateCampaign);

export default router;
