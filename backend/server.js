const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Main route handler for summarization
app.post("/summarize", async (req, res) => {
  const { text, summary_length } = req.body;

  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  try {
    const summary = await getSummary(text, summary_length);
    const keyPoints = extractKeyPoints(summary);

    res.json({ summary, key_points: keyPoints });
  } catch (error) {
    console.error("Error during text summarization:", error);
    res.status(500).json({ error: error.message || "Failed to summarize text" });
  }
});

// Fetch the summary from Hugging Face API
async function getSummary(text, summaryLength) {
  const maxLength = getMaxSummaryLength(summaryLength);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
        parameters: { max_length: maxLength },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  const summary = data[0]?.summary_text;

  if (!summary) {
    throw new Error("Summary text not found in response");
  }

  return summary;
}

// Determine the max length based on user input
function getMaxSummaryLength(summaryLength) {
  switch (summaryLength) {
    case "short":
      return 150;
    case "medium":
      return 300;
    case "long":
      return 500;
    default:
      return 300; // Default to medium if the length is not provided
  }
}

// Extract key points from the summary text
function extractKeyPoints(summary) {
  const sentences = summary
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);

  return sentences.slice(0, 3); // Return the first 3 sentences as key points
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
