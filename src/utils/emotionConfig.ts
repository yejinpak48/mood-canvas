import type { Emotion } from "../types/emotion";

export const emotionConfig: Record<
  Emotion,
  {
    label: string;
    colorClass: string;
    bgClass: string;
    image: string;
    imagePrompt: string;
  }
> = {
  joy: {
    label: "기쁨",
    colorClass: "text-yellow-600",
    bgClass: "bg-yellow-50",
    image: "/emotions/joy.jpg",
    imagePrompt: "A warm, bright illustration representing joy...",
  },
  sad: {
    label: "슬픔",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    image: "/emotions/sad.jpg",
    imagePrompt: "A calm, melancholic illustration with rain...",
  },
  angry: {
    label: "분노",
    colorClass: "text-red-600",
    bgClass: "bg-red-50",
    image: "/emotions/angry.jpg",
    imagePrompt: "An intense illustration showing anger...",
  },
  calm: {
    label: "평온",
    colorClass: "text-green-600",
    bgClass: "bg-green-50",
    image: "/emotions/calm.jpg",
    imagePrompt: "A peaceful and calming illustration...",
  },
  anxious: {
    label: "불안",
    colorClass: "text-purple-600",
    bgClass: "bg-purple-50",
    image: "/emotions/anxious.jpg",
    imagePrompt: "An abstract illustration expressing anxiety...",
  },
};
