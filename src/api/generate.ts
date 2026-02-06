import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

// 이미지 생성 API
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { emotion } = req.body;
    if (!emotion) return res.status(400).json({ error: "No emotion provided" });

    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: `A colorful, artistic illustration representing the emotion: ${emotion}`,
      size: "1024x1024",
    });

    const url = image.data?.[0]?.url;
    if (!url) return res.status(500).json({ error: "Image generation failed" });

    res.status(200).json({ url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
