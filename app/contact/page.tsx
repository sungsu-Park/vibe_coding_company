import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-16 sm:py-24">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
          컨설팅 문의
        </h1>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base">
          아래 정보를 입력하시면 빠른 시일 내에 연락드리겠습니다.
        </p>
      </div>

      <ContactForm />

      <Link
        href="/"
        className="mt-8 text-center text-sm font-medium text-zinc-500 transition-colors hover:text-brand"
      >
        ← 메인 페이지로 돌아가기
      </Link>
    </div>
  );
}
