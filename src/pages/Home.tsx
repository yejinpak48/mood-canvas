import DiaryInput from "../components/DiaryInput";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-6 text-center">
        Mood Canvas 🎨
      </h1>
      <p className="text-center text-purple-700 mb-8 max-w-md">
        오늘 하루의 기분을 입력하면, AI가 당신의 감정을 분석하고 그에 맞는
        그림을 만들어 줍니다.
      </p>

      <DiaryInput />
    </div>
  );
}
