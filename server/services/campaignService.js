const supabase = require("../config/supabase");

async function getAllCampaigns() {
  const { data, error } = await supabase.from("campaigns").select("*");

  if (error) {
    throw error;
  }

  return data;
}

async function getCampaignById(id) {
  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

module.exports = {
  getAllCampaigns,
  getCampaignById,
};
