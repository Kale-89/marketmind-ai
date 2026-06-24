import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../services/supabase";
import toast from "react-hot-toast";
import "../styles/generatedContent.css";

const GeneratedContent = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState();
  const [loading, setLoading] = useState(true);

  async function getCampaigns() {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setCampaign(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);

    toast.success("Copied to clipboard!");
  }

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div className="generated-container">
      <div className="back-btn-container">
        <Link className="back-btn" to="/history">
          <i className="bi bi-arrow-left-short"></i>Back
        </Link>
      </div>
      {!campaign && !loading && (
        <div className="empty-campaign">Campaign Not Found!!!</div>
      )}
      <div className="generated-info">
        <div className="generated-header">
          <h1>{campaign?.business_name}</h1>

          <p>
            {campaign?.product_name} • {campaign?.platform}
          </p>
        </div>
        {loading && <div className="spinner-gen"></div>}

        {campaign?.instagram_caption && (
          <div
            className="generated-content"
            style={
              campaign?.instagram_caption
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <div className="copy-and-title">
              <h4>Instagram Caption</h4>
              <button
                onClick={() => copyToClipboard(campaign.instagram_caption)}
                className="copy-btn"
              >
                <i className="bi bi-copy"></i>
              </button>
            </div>
            <p>{campaign?.instagram_caption}</p>
          </div>
        )}
        {campaign?.hashtags && (
          <div
            className="generated-content hashtags"
            style={
              campaign?.hashtags ? { display: "block" } : { display: "none" }
            }
          >
            <div className="copy-and-title">
              <h4>Hashtags</h4>
              <button
                onClick={() => copyToClipboard(campaign.hashtags)}
                className="copy-btn"
              >
                <i className="bi bi-copy"></i>
              </button>
            </div>
            <p>{campaign?.hashtags}</p>
          </div>
        )}
        {campaign?.facebook_post && (
          <div
            className="generated-content"
            style={
              campaign?.facebook_post
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <div className="copy-and-title">
              <h4>Facebook Post</h4>
              <button
                onClick={() => copyToClipboard(campaign.facebook_post)}
                className="copy-btn"
              >
                <i className="bi bi-copy"></i>
              </button>
            </div>
            <p>{campaign?.facebook_post}</p>
          </div>
        )}
        {campaign?.linkedin_post && (
          <div
            className="generated-content"
            style={
              campaign?.linkedin_post
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <div className="copy-and-title">
              <h4>Linkedin Post</h4>
              <button
                onClick={() => copyToClipboard(campaign.linkedin_post)}
                className="copy-btn"
              >
                <i className="bi bi-copy"></i>
              </button>
            </div>
            <p>{campaign?.linkedin_post}</p>
          </div>
        )}
        {campaign?.email_subject && (
          <div
            className="generated-content"
            style={
              campaign?.email_subject
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <div className="copy-and-title">
              <h4>Email Subject</h4>
              <button
                onClick={() => copyToClipboard(campaign.email_subject)}
                className="copy-btn"
              >
                <i className="bi bi-copy"></i>
              </button>
            </div>
            <p>{campaign?.email_subject}</p>
          </div>
        )}

        {campaign?.email_body && (
          <>
            <div className="copy-and-title">
              <button
                onClick={() => copyToClipboard(campaign.email_body)}
                className="copy-btn"
              >
                <i className="bi bi-copy"></i>
              </button>
            </div>
            <h4>Email</h4>
            <div
              className="generated-content"
              style={
                campaign?.email_body
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <p>{campaign?.email_body}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GeneratedContent;
