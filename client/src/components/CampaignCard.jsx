import { useState } from "react";

function CampaignCard({ campaign, onDelete }) {
  const [loading, setLoading] = useState(false);

  async function handleGenerate(id) {
    setLoading(true);

    try {
      await fetch(`http://localhost:5000/api/generate/${id}`, {
        method: "POST",
      });

      await fetchCampaigns(); // reload campaigns
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="campaign-card">
      <h2>{campaign.business_name}</h2>

      <p>
        <strong>Product:</strong> {campaign.product_name}
      </p>

      <p>
        <strong>Audience:</strong> {campaign.target_audience}
      </p>

      <p>
        <strong>Platform:</strong> {campaign.platform}
      </p>

      <p>
        <strong>Tone:</strong> {campaign.tone}
      </p>

      <p>
        <strong>Created:</strong>{" "}
        {new Date(campaign.created_at).toLocaleDateString()}
      </p>

      <div className="buttons">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="generate-btn"
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Generating...
            </>
          ) : (
            "Generate AI"
          )}
        </button>

        <button
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this campaign?")
            ) {
              onDelete(campaign.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CampaignCard;
