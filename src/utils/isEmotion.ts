import type { Emotion } from "../types/emotion";

export const isEmotion = (value: string): value is Emotion => {
  return ["joy", "sad", "angry", "calm", "anxious"].includes(value);
};
