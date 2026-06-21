import { useState } from "react";
import toast from "react-hot-toast";

function CampaignCard({ campaign, onDelete, getCampaigns }) {
  const [loading, setLoading] = useState(false);

  async function handleGenerate(id) {
    setLoading(true);

    try {
      await fetch(`http://localhost:5000/api/generate/${id}`, {
        method: "POST",
      });

      await getCampaigns(); // reload campaigns
    } catch (error) {
      toast.error("Content Generation Failed because of: " + error);
    } finally {
      toast.success("Content Generation Successful!!!");
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
      <p>
        {campaign.instagram_caption && (
          <div className="generated-content">
            <h4>Instagram Caption</h4>
            <p>{campaign.instagram_caption}</p>
          </div>
        )}
      </p>
      <p>
        {campaign.hashtags && (
          <div className="generated-content">
            <h4>Hashtags</h4>
            <p>{campaign.hashtags}</p>
          </div>
        )}
      </p>
      <p>
        {campaign.facebook_post && (
          <div className="generated-content">
            <h4>Facebook Post</h4>
            <p>{campaign.facebook_post}</p>
          </div>
        )}
      </p>
      <p>
        {campaign.linkedin_post && (
          <div className="generated-content">
            <h4>Linkedin Post</h4>
            <p>{campaign.linkedin_post}</p>
          </div>
        )}
      </p>
      <p>
        {campaign.email_subject && (
          <div className="generated-content">
            <h4>Email Subject</h4>
            <p>{campaign.email_subject}</p>
          </div>
        )}
      </p>
      <p>
        {campaign.email_body && (
          <div className="generated-content">
            <h4>Email</h4>
            <p>{campaign.email_body}</p>
          </div>
        )}
      </p>

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
