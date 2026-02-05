import { Emotion } from "../types/emotion";

export const emotionConfig: Record<
  Emotion,
  {
    label: string;
    colorClass: string;
    bgClass: string;
    image: string; // 더미 이미지
    imagePrompt: string; // 🔥 AI 이미지 프롬프트
  }
> = {
  joy: {
    label: "기쁨",
    colorClass: "text-yellow-600",
    bgClass: "bg-yellow-50",
    image: "/emotions/joy.jpg",
    imagePrompt:
      "A warm, bright illustration representing joy, sunshine, soft pastel colors, peaceful and happy mood, digital art",
  },

  sad: {
    label: "슬픔",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    image: "/emotions/sad.jpg",
    imagePrompt:
      "A calm, melancholic illustration with rain, blue tones, quiet atmosphere, emotional digital painting",
  },

  angry: {
    label: "분노",
    colorClass: "text-red-600",
    bgClass: "bg-red-50",
    image: "/emotions/angry.jpg",
    imagePrompt:
      "An intense illustration showing anger, strong red and dark colors, expressive brush strokes, dramatic lighting",
  },

  calm: {
    label: "평온",
    colorClass: "text-green-600",
    bgClass: "bg-green-50",
    image: "/emotions/calm.jpg",
    imagePrompt:
      "A peaceful and calming illustration, nature, soft green tones, minimal composition, relaxing digital art",
  },

  anxious: {
    label: "불안",
    colorClass: "text-purple-600",
    bgClass: "bg-purple-50",
    image: "/emotions/anxious.jpg",
    imagePrompt:
      "An abstract illustration expressing anxiety, subtle distortion, muted purple tones, emotional atmosphere",
  },
};
