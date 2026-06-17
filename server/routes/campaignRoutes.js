const express = require("express");

const router = express.Router();

const { getAllCampaigns } = require("../controllers/campaignController");

router.get("/test", getAllCampaigns);

module.exports = router;
