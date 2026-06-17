const campaignService = require("../services/campaignService");

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

module.exports = {
  getAllCampaigns,
};
