import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/history.css";
import "../styles/campaignCard.css";
import { Link, useNavigate } from "react-router-dom";

function CampaignCard({ campaign, onDelete, getCampaigns }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleGenerate(id) {
    setLoading(true);

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/generate/${id}`, {
        method: "POST",
      });

      await getCampaigns();
    } catch (error) {
      toast.error("Content Generation Failed because of: " + error);
    } finally {
      toast.success("Content Generation Successful!!!");
      setLoading(false);
      navigate(`/generated/${id}`);
    }
  }

  return (
    <div className="campaign-card">
      <h2>{campaign.business_name}</h2>

      <div className="campaign-info">
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
      </div>

      <div className="generation-status">
        <span
          className={
            campaign.status === "generated"
              ? "status-generated"
              : "status-draft"
          }
        >
          {campaign.status}
        </span>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            handleGenerate(campaign.id);
          }}
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

        {campaign.status === "generated" && (
          <button
            className="view-content"
            onClick={() => navigate(`/generated/${campaign.id}`)}
          >
            View Content
          </button>
        )}

        <button
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this campaign?")
            ) {
              onDelete(campaign.id);
            }
          }}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CampaignCard;
