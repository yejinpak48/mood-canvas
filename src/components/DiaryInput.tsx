import { useState } from "react";

interface DiaryInputProps {
  onSubmit: (text: string) => void;
  maxLength?: number;
}

export default function DiaryInput({
  onSubmit,
  maxLength = 300,
}: DiaryInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        placeholder="오늘 하루는 어땠나요?"
        className="w-full h-40 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
      />

      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-slate-500">
          {text.length} / {maxLength}
        </span>

        <button
          onClick={handleSubmit}
          disabled={!text.trim()}
          className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium disabled:opacity-40"
        >
          감정 분석하기
        </button>
      </div>
    </div>
  );
}
