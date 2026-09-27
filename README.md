# 바이브 코딩 컨설팅 랜딩 페이지

바이브 코딩(Vibe Coding) 컨설팅 회사의 대외 소개용 정적 홈페이지입니다.
회원가입/로그인, 결제, 실제 폼 전송 없이 **회사 소개 + 프로세스 안내 + 문의 폼(클라이언트 유효성 검사만)** 으로 범위를 한정합니다.
상세 요구사항은 [`PRD.md`](./PRD.md), 작업 목록은 [`.taskmaster/tasks/tasks.json`](./.taskmaster/tasks/tasks.json)을 참고하세요.

## 기술 스택

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (config-less, `app/globals.css`의 `@theme inline` 토큰 사용)
- 배포: Vercel (완전 정적, 백엔드 없음)
- 폰트: Pretendard Variable(CDN) + Inter(`next/font/google`, 폴백)

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 주요 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (Vercel 배포 전 필수 성공)
npm run lint      # ESLint
```

## 폴더 구조

```
app/
  layout.tsx       # 루트 레이아웃 (lang="ko", Pretendard/Inter 폰트)
  globals.css       # Tailwind v4 진입점 + 디자인 토큰(@theme inline)
  page.tsx          # 메인 페이지
public/images/       # 슬라이드 이미지
```

설계 배경은 [`docs/architecture/task-01-project-init.md`](./docs/architecture/task-01-project-init.md)에서 확인할 수 있습니다.
