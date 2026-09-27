# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 현황 (중요)

이 저장소는 **아직 코드가 없는 계획 단계**다. `package.json`, `app/`, `components/` 등 실제 Next.js 소스는 존재하지 않는다. 지금까지 존재하는 것은:
- `PRD.md` — 제품 요구사항 정의서 (아래 요약 참고, 최신 버전은 항상 이 파일을 직접 읽을 것)
- `.taskmaster/tasks/tasks.json` — PRD를 기반으로 생성된 8개 작업(하위 작업 포함) 목록, 전부 `status: pending`

따라서 세션을 시작하면 먼저 `task-master next` (또는 `task-master list`)로 다음 작업을 확인하고, `task-master show <id>`로 상세 스펙(구현 예시 코드 포함)을 읽은 뒤 구현을 시작한다. `tasks.json`에는 각 작업에 대한 참고용 예시 코드가 이미 들어있지만, 그대로 복붙하지 말고 실제 코드베이스 상태에 맞게 조정할 것.

## 제품 개요 (PRD.md 요약)

바이브 코딩(Vibe Coding) 컨설팅 회사의 대외 소개용 정적 홈페이지. 범위는 **정적 소개 + 프로세스 안내 + 문의 폼(실제 발송 없음)** 으로 한정된다.

**페이지 구성**
- `/` — 메인 페이지: 상단 이미지 슬라이드(3장, 자동 전환 + 좌우 버튼 + 인디케이터) → 회사 소개 → "컨설팅 문의하기" CTA
- `/process` — 컨설팅 프로세스 페이지: 5단계 타임라인 시각화 + 하단 CTA
- `/contact` — 문의 페이지: 이름/전화번호/이메일 폼, **클라이언트 측 유효성 검사만 수행하고 실제 서버 전송·이메일 발송은 구현하지 않는다** (제출 성공 시 안내 메시지만 표시)

**명시적 제외 범위**: 실제 폼 발송, 회원가입/로그인, 결제/가격 페이지, 다국어 지원, CMS 연동. 이 범위를 벗어나는 기능을 임의로 추가하지 말 것.

## 기술 스택 (계획)

| 항목 | 내용 |
|------|------|
| 프레임워크 | Next.js App Router (TypeScript) |
| 스타일링 | Tailwind CSS |
| 배포 | Vercel |
| 백엔드 | 없음 (완전 정적, 폼은 클라이언트 유효성 검사만) |
| 이미지 | `next/image` 사용, 슬라이드 이미지는 `public/images/`에 배치 |

## 계획된 아키텍처

`tasks.json`에 정의된 목표 폴더 구조:

```
app/
  layout.tsx        # 루트 레이아웃 (lang="ko", Header/Footer 포함)
  page.tsx           # 메인 페이지
  contact/page.tsx    # 문의 페이지
  process/page.tsx    # 프로세스 페이지
components/
  Header.tsx          # 반응형 내비게이션 (모바일: 세로 스택/햄버거)
  Footer.tsx
  ImageSlider.tsx      # 'use client', useState+useInterval 기반 캐러셀
  ContactForm.tsx      # 'use client', useState 기반 폼 상태+유효성 검사
public/images/         # 슬라이드 placeholder 이미지 3장
```

**작업 의존성 순서** (`task-master list`로 항상 최신 상태 확인): 1. 프로젝트 초기화/Tailwind 설정 → 2. 공통 레이아웃(Header/Footer) → 3. ImageSlider → 4. 메인 페이지 → 5. ContactForm UI → 6. ContactForm 유효성 검사 → 7. 프로세스 페이지 → 8. 반응형 최적화(전체 페이지 대상 마무리 단계).

**디자인 원칙** (PRD 4절): 무채색(화이트/그레이/블랙) 기반 + 포인트 컬러 1개(`tailwind.config.js`의 `brand` 색상), 넉넉한 여백, 장식 요소(그림자·그라디언트·애니메이션) 최소화, Pretendard/Inter 계열 산세리프 폰트. 반응형 기준 화면: 375px(모바일) / 768px(태블릿) / 1280px(데스크톱).

## 개발 명령어 (Next.js 스캐폴딩 완료 후)

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (Vercel 배포 전 반드시 성공해야 함)
npm run lint     # ESLint
```

## Task Master AI 워크플로우

**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md
