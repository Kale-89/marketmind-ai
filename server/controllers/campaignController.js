import campaignService from "../services/campaignService.js";

async function getAllCampaigns(req, res) {
  try {
    const campaigns = await campaignService.getAllCampaigns();

    res.json(campaigns);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export { getAllCampaigns };
