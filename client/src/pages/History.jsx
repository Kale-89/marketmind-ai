import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import CampaignCard from "../components/CampaignCard";
import toast from "react-hot-toast";

function History() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCampaigns();
  }, []);

  async function getCampaigns() {
    setLoading(true);
    const { data, error } = await supabase
      .from("campaigns")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setCampaigns(data);
      setLoading(false);
    }
  }

  async function deleteCampaign(id) {
    const { error } = await supabase.from("campaigns").delete().eq("id", id);

    if (error) {
      toast.error(error.message);
      return;
    }

    getCampaigns();
    toast.success("Campaign Deleted Successfully!!");
  }
  return (
    <div className="container">
      <h1>Campaign History</h1>
      {loading ? (
        <div className="spinner"></div>
      ) : campaigns.length === 0 ? (
        <div className="empty-campaign">
          <p>No Campaign Yet!!!</p>
        </div>
      ) : (
        <div className="campaign-list">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onDelete={deleteCampaign}
              getCampaigns={getCampaigns}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
