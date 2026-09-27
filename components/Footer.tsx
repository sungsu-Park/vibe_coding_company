import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "홈" },
  { href: "/process", label: "컨설팅 프로세스" },
  { href: "/contact", label: "문의하기" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-white">
            VC
          </span>
          <p className="text-sm text-zinc-500">
            &copy; {year} 바이브 코딩 컨설팅. All rights reserved.
          </p>
        </div>

        <nav
          aria-label="푸터 메뉴"
          className="flex items-center gap-6 text-sm text-zinc-500"
        >
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
