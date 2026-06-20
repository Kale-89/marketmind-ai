import { useState } from "react";

function CampaignCard({ campaign, onDelete }) {
  const [loading, setLoading] = useState(false);

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
        <button disabled={loading}>
          {loading ? "Generating..." : "Generate AI"}
        </button>

        <button
          // onClick={handleGenerate}
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
      </div>
    </div>
  );
}

export default CampaignCard;
