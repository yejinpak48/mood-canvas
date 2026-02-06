import { useState } from "react";
import { isEmotion } from "../utils/isEmotion";
import ResultCard from "./ResultCard";

export default function DiaryInput() {
  const [text, setText] = useState("");
  const [emotion, setEmotion] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setEmotion(null);

    try {
      const aiResult = await fakeAiAnalysis(text);
      setEmotion(aiResult.emotion);
      setImageUrl(aiResult.imageUrl);
    } catch (err) {
      console.error(err);
      setError("AI 분석 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
        Mood Canvas 🎨
      </h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="오늘 하루는 어땠나요?"
        className="w-full h-48 p-5 rounded-xl border border-gray-300 shadow-inner resize-none focus:outline-none focus:ring-4 focus:ring-indigo-200 placeholder-gray-400 text-lg font-sans"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-5 w-full py-3 rounded-xl text-white font-semibold transition-all ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 shadow-md"
        }`}
      >
        {loading ? "분석 중..." : "오늘의 기분 분석하기"}
      </button>

      {error && <p className="mt-3 text-center text-red-500">{error}</p>}

      {emotion && isEmotion(emotion) && (
        <ResultCard emotion={emotion} imageUrl={imageUrl} />
      )}
    </div>
  );
}

const fakeAiAnalysis = async (text: string) => {
  return new Promise<{ emotion: string; imageUrl: string }>(
    (resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve({ emotion: "joy", imageUrl: "/emotions/joy.jpg" });
        } else {
          reject(new Error("AI 호출 실패"));
        }
      }, 1500);
    },
  );
};
