import express from "express";

const router = express.Router();

import { getAllCampaigns } from "../controllers/campaignController.js";

router.get("/test", getAllCampaigns);

export default router;
