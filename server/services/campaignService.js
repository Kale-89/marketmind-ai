import supabase from "../config/supabase.js";

export async function getAllCampaigns() {
  const { data, error } = await supabase.from("campaigns").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCampaignById(id) {
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

export async function updateCampaignContent(id, content) {
  const updateData = {
    ...content,
    status: "generated",
  };

  const { data, error } = await supabase
    .from("campaigns")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
