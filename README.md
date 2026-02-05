# 🎨 Mood Canvas

텍스트로 기록한 하루의 감정을 AI가 분석하고,  
그 감정에 어울리는 이미지를 생성해 주는 감정 일기 웹 애플리케이션입니다.

React와 TypeScript 기반의 Vite 환경에서 UI를 구성하고,
OpenAI API를 활용해 사용자 입력 텍스트를 감정으로 분류한 뒤
해당 감정을 시각적으로 표현하는 이미지를 생성하는 웹 애플리케이션을 구현했습니다.
API Key 보호를 위해 Vercel Serverless Functions를 사용했으며,
GitHub–Vercel 연동을 통해 자동 배포 환경을 구성했습니다.

## ✨ Demo

👉 https://mood-canvas-ochre.vercel.app

## 🧠 핵심 기능

- 하루의 감정을 텍스트로 입력
- AI 기반 감정 분석 (joy / sad / angry / calm / anxious)
- 감정에 어울리는 이미지 자동 생성
- 로딩 / 결과 상태 분리 UI

## 🛠 기술 스택

- **Frontend**: React, TypeScript, Vite
- **Routing**: React Router
- **State**: React Hooks
- **AI API**: OpenAI (Text + Image Generation)
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier, Husky

## 📂 프로젝트 구조

```txt
src/
 ├─ pages/
 │   └─ Home.tsx
 ├─ components/
 │   ├─ DiaryInput.tsx
 │   ├─ ResultView.tsx
 │   └─ Loading.tsx
 └─ services/
     └─ ai.ts
```
