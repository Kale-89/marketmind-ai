export function buildMarketingPrompt(campaign) {
  switch (campaign.platform.toLowerCase()) {
    case "instagram":
      return `
You are an expert Instagram marketing copywriter.

Generate ONLY valid JSON.

Do not include markdown.
Do not include explanations.

Return exactly:

{
  "instagram_caption":"",
  "hashtags":""
}

Business Name: ${campaign.business_name}

Product: ${campaign.product_name}

Target Audience: ${campaign.target_audience}

Tone: ${campaign.tone}

Create an engaging Instagram caption with relevant hashtags.
`;

    case "facebook":
      return `
You are an expert Facebook marketing copywriter.

Generate ONLY valid JSON.

Return exactly:

{
  "facebook_post":""
}

Business Name: ${campaign.business_name}

Product: ${campaign.product_name}

Target Audience: ${campaign.target_audience}

Tone: ${campaign.tone}
`;

    case "linkedin":
      return `
You are an expert LinkedIn marketing copywriter.

Generate ONLY valid JSON.

Return exactly:

{
  "linkedin_post":""
}

Business Name: ${campaign.business_name}

Product: ${campaign.product_name}

Target Audience: ${campaign.target_audience}

Tone: ${campaign.tone}
`;

    case "email":
      return `
You are an expert email marketing copywriter.

Generate ONLY valid JSON.

Return exactly:

{
  "email_subject":"",
  "email_body":""
}

Business Name: ${campaign.business_name}

Product: ${campaign.product_name}

Target Audience: ${campaign.target_audience}

Tone: ${campaign.tone}
`;

    default:
      throw new Error("Unsupported platform");
  }
}
