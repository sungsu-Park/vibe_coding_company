"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/slide-1.jpg",
    alt: "모니터에 표시된 코드 화면",
    caption: "코드로 아이디어를 실현합니다",
  },
  {
    src: "/images/slide-2.jpg",
    alt: "화이트보드 앞에서 협업하는 팀",
    caption: "요구사항을 함께 진단합니다",
  },
  {
    src: "/images/slide-3.jpg",
    alt: "악수하는 두 비즈니스 파트너",
    caption: "함께 성장하는 컨설팅 파트너",
  },
] as const;

const AUTO_PLAY_INTERVAL_MS = 5000;

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, AUTO_PLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative h-[240px] w-full overflow-hidden sm:h-[360px] md:h-[480px]">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-0 bg-black/45 px-4 py-2.5 sm:px-6 sm:py-3">
            <p className="text-center text-sm font-semibold text-white sm:text-lg">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="이전 슬라이드"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 sm:left-5"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goToNext}
        aria-label="다음 슬라이드"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 sm:right-5"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`${index + 1}번 슬라이드로 이동`}
            aria-current={index === currentIndex}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
