import { useState } from "react";
import DiaryInput from "../components/DiaryInput";
import { Emotion } from "../types/emotion";
import ResultCard from "../components/ResultCard";

interface Result {
  emotion: Emotion;
  message: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleSubmit = (text: string) => {
    console.log("입력된 텍스트:", text);

    // 1️⃣ 분석 시작
    setLoading(true);
    setResult(null);

    // 2️⃣ 지금은 AI 대신 fake 결과 (1초 후)
    setTimeout(() => {
      setResult({
        emotion: "calm",
        message: "오늘은 비교적 차분한 하루였어요.",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <h1 className="text-2xl font-bold text-center">Mood Canvas</h1>

      <DiaryInput onSubmit={handleSubmit} />

      {/* 로딩 상태 */}
      {loading && (
        <p className="mt-6 text-center text-slate-500">
          AI가 감정을 분석하고 있어요…
        </p>
      )}

      {/* 결과 상태 */}
      {result && (
        <ResultCard emotion={result.emotion} message={result.message} />
      )}
    </div>
  );
}
