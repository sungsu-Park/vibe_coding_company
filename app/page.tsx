import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";

const VALUE_PROPS = [
  {
    title: "빠른 프로토타이핑",
    description: "아이디어를 며칠 안에 실제로 동작하는 제품으로 만들어 드립니다.",
  },
  {
    title: "실전 코칭",
    description: "팀의 개발자와 함께 문제를 진단하고, 현장에서 바로 쓰는 방법을 전달합니다.",
  },
  {
    title: "지속 가능한 코드베이스",
    description: "컨설팅이 끝난 뒤에도 팀이 스스로 유지보수할 수 있는 구조로 설계합니다.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <ImageSlider />

      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-24">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          바이브 코딩 컨설팅
        </h1>
        <p className="text-lg font-medium text-brand sm:text-xl">
          코드에 생명을 불어넣는 컨설팅 파트너
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          바이브 코딩은 단순히 코드를 작성하는 것을 넘어, 비즈니스의 본질을 이해하고
          기술적 가치를 창출하는 컨설팅 서비스입니다. 귀사의 성장과 혁신을 위한
          최적의 솔루션을 함께 만들어갑니다.
        </p>
        <Link
          href="/contact"
          className="mt-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:px-8 sm:py-3.5 sm:text-base"
        >
          컨설팅 문의하기
        </Link>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-3 sm:py-20">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6"
            >
              <h2 className="text-base font-semibold text-zinc-900 sm:text-lg">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
