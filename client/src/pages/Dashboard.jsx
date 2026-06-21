import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import "../styles/dashboard.css";

function Dashboard() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns();
  }, []);

  const totalCampaigns = campaigns.length;

  const generatedCampaigns = campaigns.filter(
    (campaign) => campaign.status === "generated",
  ).length;

  const draftCampaigns = campaigns.filter(
    (campaign) => campaign.status === "draft",
  ).length;

  async function getCampaigns() {
    const { data, error } = await supabase.from("campaigns").select("*");

    if (!error) {
      setCampaigns(data);
    }
  }

  const platformCounts = {};

  campaigns.forEach((campaign) => {
    platformCounts[campaign.platform] =
      (platformCounts[campaign.platform] || 0) + 1;
  });

  const mostUsedPlatform =
    Object.keys(platformCounts).length > 0
      ? Object.keys(platformCounts).reduce((a, b) =>
          platformCounts[a] > platformCounts[b] ? a : b,
        )
      : "N/A";

  const toneCounts = {};

  campaigns.forEach((campaign) => {
    toneCounts[campaign.tone] = (toneCounts[campaign.tone] || 0) + 1;
  });

  const mostCommonTone =
    Object.keys(toneCounts).length > 0
      ? Object.keys(toneCounts).reduce((a, b) =>
          toneCounts[a] > toneCounts[b] ? a : b,
        )
      : "N/A";
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Welcome to MarketMind AI.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Campaigns</h3>
          <p>{totalCampaigns}</p>
        </div>

        <div className="stat-card">
          <h3>Generated</h3>
          <p>{generatedCampaigns}</p>
        </div>

        <div className="stat-card">
          <h3>Drafts</h3>
          <p>{draftCampaigns}</p>
        </div>
      </div>
      <div className="insights-card">
        <h2>Insights</h2>

        <p>
          <strong>Most Used Platform:</strong> {mostUsedPlatform}
        </p>

        <p>
          <strong>Most Common Tone:</strong> {mostCommonTone}
        </p>
      </div>
      <div className="recent-campaigns">
        <h2>Recent Campaigns</h2>

        {campaigns.slice(0, 5).map((campaign) => (
          <div key={campaign.id} className="recent-item">
            <h4>{campaign.business_name}</h4>
            <p>{campaign.product_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
