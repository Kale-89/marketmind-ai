import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// A helper function to make the code pause
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function generateMarketingContent(prompt) {
  let attempts = 0;
  const maxAttempts = 3;
  let delayTime = 3000; // Start with a 3-second wait

  while (attempts < maxAttempts) {
    try {
      // Make the actual API call
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text;

      const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      try {
        return JSON.parse(cleaned);
      } catch (error) {
        console.error("Gemini returned invalid JSON:");
        console.error(cleaned);
        throw new Error("Failed to parse AI response.");
      }
    } catch (apiError) {
      attempts++;

      // Check if the error is a 429 Quota Exceeded error
      if (apiError.status === 429 && attempts < maxAttempts) {
        console.warn(
          `Quota hit. Waiting ${delayTime / 1000}s before retry ${attempts}/${maxAttempts}...`,
        );

        // Wait before trying again
        await delay(delayTime);

        // Double the wait time for the next try (exponential backoff)
        delayTime *= 2;
        continue;
      }

      // If it is a different error or we ran out of tries, crash normally
      throw apiError;
    }
  }
}
