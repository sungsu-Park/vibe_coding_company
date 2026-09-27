import Link from "next/link";

const PROCESS_STEPS = [
  {
    number: 1,
    title: "상담 신청",
    description: "홈페이지 문의 폼을 통해 간단한 상황과 목표를 남겨주세요.",
  },
  {
    number: 2,
    title: "요구사항 진단",
    description: "현재 코드베이스와 팀 구조를 분석해 문제의 핵심을 짚어드립니다.",
  },
  {
    number: 3,
    title: "컨설팅 방향 제안",
    description: "목표와 리소스에 맞는 구체적인 실행 계획과 로드맵을 제안합니다.",
  },
  {
    number: 4,
    title: "실행 및 코칭",
    description: "실제 작업을 함께 진행하며 팀이 방법론을 체득하도록 돕습니다.",
  },
  {
    number: 5,
    title: "결과 리뷰",
    description: "성과를 점검하고, 이후 팀 스스로 발전시킬 방향을 정리합니다.",
  },
] as const;

export default function ProcessPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
          컨설팅 프로세스
        </h1>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base">
          체계적인 5단계 프로세스로 최적의 결과를 만들어갑니다.
        </p>
      </div>

      <ol>
        {PROCESS_STEPS.map((step, index) => (
          <li key={step.number} className="flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white sm:h-12 sm:w-12 sm:text-base">
                {step.number}
              </span>
              {index < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="w-px flex-1 bg-zinc-200"
                />
              )}
            </div>
            <div className="pb-10">
              <h2 className="text-base font-semibold text-zinc-900 sm:text-lg">
                {step.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:px-8 sm:py-3.5 sm:text-base"
        >
          컨설팅 문의하기
        </Link>
      </div>
    </div>
  );
}
