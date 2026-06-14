import { useState } from "react";
import { supabase } from "../services/supabase";
import toast from "react-hot-toast";

function CampaignGenerator() {
  const [businessName, setBusinessName] = useState("");
  const [productName, setProductName] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("Professional");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase

      .from("campaigns")

      .insert({
        business_name: businessName,
        product_name: productName,
        target_audience: targetAudience,
        platform,
        tone,
      });

    if (error) {
      toast.error(error.message);

      return;
    }

    toast.success("Campaign saved successfully!");
    setBusinessName("");
    setProductName("");
    setTargetAudience("");
    setPlatform("Instagram");
    setTone("Professional");
  };

  return (
    <div className="container">
      <h1>Create Campaign</h1>

      <form onSubmit={handleSubmit}>
        <label>Business Name</label>

        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />

        <label>Product Name</label>

        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label>Target Audience</label>

        <input
          type="text"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
        />

        <label>Platform</label>

        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>X</option>
        </select>

        <label>Tone</label>

        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option>Professional</option>
          <option>Friendly</option>
          <option>Casual</option>
          <option>Luxury</option>
        </select>

        <button type="submit">Save Campaign</button>
      </form>
    </div>
  );
}

export default CampaignGenerator;
