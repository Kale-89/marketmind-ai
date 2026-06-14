function CampaignCard({ campaign, onDelete }) {
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
        <button>Generate AI</button>

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
