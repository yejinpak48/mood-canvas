import { Emotion } from "../types/emotion";
import { emotionConfig } from "../utils/emotionConfig";

interface ResultCardProps {
  emotion: Emotion;
  message: string;
}

export default function ResultCard({ emotion, message }: ResultCardProps) {
  const config = emotionConfig[emotion];

  return (
    <div
      className={`mt-6 max-w-xl mx-auto rounded-xl p-6 shadow ${config.bgClass}`}
    >
      <p className="text-sm text-slate-500">감정 결과</p>

      <div className="mt-2 flex items-center gap-2">
        <span className={`text-lg font-semibold ${config.colorClass}`}>
          {config.label}
        </span>
      </div>

      <p className="mt-3 text-slate-700 leading-relaxed">{message}</p>

      {/* 감정 이미지 */}
      <div className="mt-4 overflow-hidden rounded-lg">
        <img
          src={config.image}
          alt={config.label}
          className="h-48 w-full object-cover"
        />
      </div>
    </div>
  );
}
