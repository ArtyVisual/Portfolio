
import AI_KNOWLEDGE from "../src/data/AIKnowledge.js";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }


  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

    if (!apiKey) {
      return res.status(500).json({
        error: "Gemini API key is not configured.",
      });
    }

    const { message, history = [] } = req.body || {};

    // Validate incoming message
    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.length > 2000
    ) {
      return res.status(400).json({
        error: "Please provide a valid message (maximum 2000 characters).",
      });
    }

    if (!Array.isArray(history) || history.length > 10) {
      return res.status(400).json({
        error: "Invalid conversation history.",
      });
    }

    // Validate and sanitize conversation history
    const contents = history.map((item) => {
      if (
        !item ||
        !["user", "model"].includes(item.role) ||
        typeof item.text !== "string" ||
        !item.text.trim() ||
        item.text.length > 2000
      ) {
        throw new Error("Invalid conversation history.");
      }

      return {
        role: item.role,
        parts: [{ text: item.text }],
      };
    });

    // Add the latest visitor message
    contents.push({
      role: "user",
      parts: [{ text: message.trim() }],
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `${AI_KNOWLEDGE}

                RESPONSE FORMATTING RULES:

                - Always use proper Markdown formatting.
                - Use **bold** for important names and labels.
                - Use bullet lists for skills and project features.
                - Use numbered lists for step-by-step explanations.
                - Use short paragraphs with appropriate spacing.
                - Use headings only when necessary.
                - Never output Markdown symbols as escaped plain text.
                - Avoid excessive formatting.
                - Keep answers concise and easy to read.
                `
              },
            ],
          },
          contents,
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 600,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);

      return res.status(502).json({
        error: "AI service is temporarily unavailable. Please try again.",
      });
    }

    const reply =
      data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("")
        .trim();

    if (!reply) {
      return res.status(502).json({
        error: "The AI could not generate a response. Please try again.",
      });
    }

    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
