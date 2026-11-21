
import { createClient } from "@supabase/supabase-js";

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function getCategory(message) {
  const text = message.toLowerCase();

  if (/hire|hiring|job|employment|recruit|resume|cv|experience/.test(text)) {
    return "hiring";
  }

  if (/freelance|client|project cost|quotation|budget|website for/.test(text)) {
    return "freelance";
  }

  if (/react|javascript|typescript|node|api|database|code|bug|error|programming/.test(text)) {
    return "technical";
  }

  if (/project|portfolio|built|developed|application|website/.test(text)) {
    return "project";
  }

  return "general";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing.");

      return res.status(500).json({
        error: "Conversation storage is not configured.",
      });
    }

    const {
      conversationId,
      visitorId,
      userMessage,
      assistantMessage,
    } = req.body || {};

    if (
      !UUID_REGEX.test(conversationId || "") ||
      !UUID_REGEX.test(visitorId || "")
    ) {
      return res.status(400).json({ error: "Invalid conversation IDs." });
    }

    if (
      typeof userMessage !== "string" ||
      typeof assistantMessage !== "string" ||
      !userMessage.trim() ||
      !assistantMessage.trim() ||
      userMessage.length > 2000 ||
      assistantMessage.length > 10000
    ) {
      return res.status(400).json({ error: "Invalid message content." });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: conversationError } = await supabase
      .from("ai_conversations")
      .upsert(
        {
          id: conversationId,
          visitor_id: visitorId,
          category: getCategory(userMessage),
          last_message_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );

    if (conversationError) throw conversationError;

    const { error: messagesError } = await supabase
      .from("ai_messages")
      .insert([
        {
          conversation_id: conversationId,
          role: "user",
          content: userMessage.trim(),
        },
        {
          conversation_id: conversationId,
          role: "assistant",
          content: assistantMessage.trim(),
        },
      ]);

    if (messagesError) throw messagesError;

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Chat logging error:", error);

    return res.status(500).json({
      error: "Unable to save conversation.",
    });
  }
}
