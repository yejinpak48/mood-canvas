import { emotionConfig } from "../utils/emotionConfig";

interface ResultCardProps {
  emotion: string;
  imageUrl: string;
}

export default function ResultCard({ emotion, imageUrl }: ResultCardProps) {
  const config = emotionConfig[emotion as keyof typeof emotionConfig];

  return (
    <div
      className={`mt-6 p-6 rounded-2xl shadow-lg ${config.bgClass} flex flex-col items-center`}
    >
      <h2 className={`text-xl font-bold mb-3 ${config.colorClass}`}>
        오늘의 기분: {config.label}
      </h2>
      <img
        src={imageUrl}
        alt={config.label}
        className="w-64 h-64 object-cover rounded-xl shadow-md"
      />
    </div>
  );
}
