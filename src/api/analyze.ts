import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

// 감정 분석 API
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Analyze the following text and return one of these emotions: joy, sadness, anger, surprise, fear, neutral. Text: "${text}"`,
        },
      ],
    });

    const emotion = completion.choices?.[0]?.message?.content?.trim();
    if (!emotion) {
      return res.status(500).json({ error: "Emotion analysis failed" });
    }

    res.status(200).json({ emotion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
