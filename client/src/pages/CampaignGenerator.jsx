import { useState } from "react";
import { supabase } from "../services/supabase";
import toast from "react-hot-toast";
import "../styles/campaignGenerator.css";

function CampaignGenerator() {
  const [businessName, setBusinessName] = useState("");
  const [productName, setProductName] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("Professional");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase

        .from("campaigns")

        .insert({
          business_name: businessName,
          product_name: productName,
          target_audience: targetAudience,
          platform,
          tone,
        });
    } catch (error) {
      toast.error(error.message);

      return;
    } finally {
      setLoading(false);

      toast.success("Campaign saved successfully!");
      setBusinessName("");
      setProductName("");
      setTargetAudience("");
      setPlatform("Instagram");
      setTone("Professional");
    }
  };

  return (
    <div className="container">
      <div className="generator-header">
        <h1>AI Campaign Generator</h1>

        <p>
          Create marketing campaigns powered by AI for social media, email
          marketing, and brand promotion.
        </p>
      </div>
      <div className="form-container">
        <form className="generator-form" onSubmit={handleSubmit}>
          <label>Business Name</label>

          <input
            type="text"
            placeholder="Kal Tech."
            value={businessName}
            required
            onChange={(e) => setBusinessName(e.target.value)}
          />

          <label>Product Name</label>

          <input
            type="text"
            placeholder="Dating App"
            value={productName}
            required
            onChange={(e) => setProductName(e.target.value)}
          />

          <label>Target Audience</label>

          <input
            type="text"
            placeholder="Single Adults"
            value={targetAudience}
            required
            onChange={(e) => setTargetAudience(e.target.value)}
          />

          <label>Platform</label>

          <div className="platform-grid">
            {["Instagram", "Facebook", "LinkedIn", "Email"].map((item) => (
              <button
                type="button"
                key={item}
                className={
                  platform === item ? "platform-card active" : "platform-card"
                }
                onClick={() => setPlatform(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label>Tone</label>

          <div className="tone-chips">
            {["Professional", "Friendly", "Casual", "Luxury"].map((item) => (
              <button
                type="button"
                key={item}
                className={tone === item ? "tone-chip active" : "tone-chip"}
                onClick={() => setTone(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="create-btn" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Campaign"}
          </button>
        </form>
        <div className="preview-card">
          <div className="preview-card">
            <h2>Campaign Preview</h2>

            <div className="preview-item">
              <span className="preview-label">Business</span>
              <span className="preview-value">
                {businessName || "Not specified"}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Product</span>
              <span className="preview-value">
                {productName || "Not specified"}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Audience</span>
              <span className="preview-value">
                {targetAudience || "Not specified"}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Platform</span>

              <span className="preview-badge">{platform}</span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Tone</span>

              <span className="preview-badge">{tone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignGenerator;
