import "../styles/knowledgeBase.css";

function KnowledgeBase() {
  return (
    <div className="knowledge-container">
      <h1>Marketing Knowledge Base</h1>
      <p className="knowledge-subtitle">
        Learn marketing best practices, prompt templates, and AI content
        strategies.
      </p>

      {/* Marketing Tips */}
      <section className="knowledge-section">
        <h2>Marketing Best Practices</h2>

        <div className="knowledge-grid">
          <div className="knowledge-card">
            <h3>Instagram Marketing</h3>
            <ul>
              <li>Use engaging captions.</li>
              <li>Ask questions to boost comments.</li>
              <li>Include relevant hashtags.</li>
              <li>Always add a call-to-action.</li>
            </ul>
          </div>

          <div className="knowledge-card">
            <h3>Facebook Marketing</h3>
            <ul>
              <li>Tell stories instead of selling.</li>
              <li>Use images and videos.</li>
              <li>Encourage sharing.</li>
              <li>Focus on community engagement.</li>
            </ul>
          </div>

          <div className="knowledge-card">
            <h3>LinkedIn Marketing</h3>
            <ul>
              <li>Share professional insights.</li>
              <li>Use industry-specific language.</li>
              <li>Focus on value and expertise.</li>
              <li>Keep content educational.</li>
            </ul>
          </div>

          <div className="knowledge-card">
            <h3>Email Marketing</h3>
            <ul>
              <li>Write short subject lines.</li>
              <li>Personalize content.</li>
              <li>Use one clear CTA.</li>
              <li>Focus on customer benefits.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="knowledge-section">
        <h2>Prompt Templates</h2>

        <div className="knowledge-grid">
          <div className="knowledge-card">
            <h3>Product Launch</h3>
            <p>
              Generate marketing content for a new product launch including
              captions, hashtags, and email campaigns.
            </p>
          </div>

          <div className="knowledge-card">
            <h3>Brand Awareness</h3>
            <p>
              Create content focused on increasing visibility and audience
              engagement.
            </p>
          </div>

          <div className="knowledge-card">
            <h3>Seasonal Promotion</h3>
            <p>
              Build marketing campaigns around holidays, events, and seasonal
              offers.
            </p>
          </div>

          <div className="knowledge-card">
            <h3>Email Campaign</h3>
            <p>
              Generate persuasive subject lines and email content for marketing
              campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* AI Guide */}
      <section className="knowledge-section">
        <h2>AI Marketing Guide</h2>

        <div className="knowledge-grid">
          <div className="knowledge-card">
            <h3>Writing Better Prompts</h3>
            <p>Be specific about your audience, platform, product, and tone.</p>
          </div>

          <div className="knowledge-card">
            <h3>Choosing a Tone</h3>
            <p>
              Friendly, Professional, Casual, and Luxury tones produce different
              marketing outcomes.
            </p>
          </div>

          <div className="knowledge-card">
            <h3>Defining Target Audiences</h3>
            <p>
              The more specific your audience, the better the AI-generated
              content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowledgeBase;
