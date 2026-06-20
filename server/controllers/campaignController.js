import {
  getAllCampaigns as getAllCampaignsService,
  getCampaignById,
  updateCampaignContent,
} from "../services/campaignService.js";

import { buildMarketingPrompt } from "../prompts/marketingPrompt.js";

import { generateMarketingContent } from "../services/aiService.js";

export async function generateCampaign(req, res) {
  try {
    const id = req.params.id;

    // 1 fetch campaign
    const campaign = await getCampaignById(id);

    // 2 build prompt
    const prompt = buildMarketingPrompt(campaign);

    // 3 ask Gemini
    const aiContent = await generateMarketingContent(prompt);

    // 4 save to database
    const updatedCampaign = await updateCampaignContent(id, aiContent);

    res.json({
      success: true,
      campaign: updatedCampaign,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getAllCampaigns(req, res) {
  try {
    const campaigns = await getAllCampaignsService();

    res.status(200).json(campaigns);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
