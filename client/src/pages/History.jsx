import { useEffect, useState } from "react";

import { supabase } from "../services/supabase";

import CampaignCard from "../components/CampaignCard";

function History() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns();
  }, []);

  async function getCampaigns() {
    const { data, error } = await supabase

      .from("campaigns")

      .select("*")

      .order("created_at", { ascending: false });

    if (!error) {
      setCampaigns(data);
    }
  }

  return (
    <div className="container">
      <h1>Campaign History</h1>

      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
}

export default History;
