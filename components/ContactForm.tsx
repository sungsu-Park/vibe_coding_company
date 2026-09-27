"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM_DATA: FormData = { name: "", phone: "", email: "" };

const PHONE_REGEX = /^\d{2,3}-\d{3,4}-\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "이름을 입력해주세요.";
  }

  if (!data.phone.trim()) {
    errors.phone = "전화번호를 입력해주세요.";
  } else if (!PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)";
  }

  if (!data.email.trim()) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  return errors;
}

const FIELDS = [
  {
    name: "name" as const,
    label: "이름",
    type: "text",
    placeholder: "홍길동",
    autoComplete: "name",
  },
  {
    name: "phone" as const,
    label: "전화번호",
    type: "tel",
    placeholder: "010-1234-5678",
    autoComplete: "tel",
  },
  {
    name: "email" as const,
    label: "이메일",
    type: "email",
    placeholder: "example@email.com",
    autoComplete: "email",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) =>
      prev[name as keyof FormData] ? { ...prev, [name]: undefined } : prev,
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      // 실제 서버 전송/이메일 발송은 구현하지 않음 (PRD 범위 밖)
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand mx-auto">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h2 className="mt-4 text-lg font-semibold text-zinc-900 sm:text-xl">
          문의가 접수되었습니다!
        </h2>
        <p className="mt-2 text-sm text-zinc-600 sm:text-base">
          빠른 시일 내에 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
    >
      {FIELDS.map((field) => {
        const errorId = `${field.name}-error`;
        const error = errors[field.name];

        return (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label
              htmlFor={field.name}
              className="text-sm font-medium text-zinc-700"
            >
              {field.label} <span className="text-brand">*</span>
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              value={formData[field.name]}
              onChange={handleChange}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className={`h-12 rounded-lg border px-4 text-sm text-zinc-900 outline-none transition-colors focus:ring-2 focus:ring-brand ${
                error ? "border-red-400" : "border-zinc-300"
              }`}
            />
            {error && (
              <p id={errorId} className="text-sm text-red-500">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="mt-2 h-12 rounded-full bg-brand text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:text-base"
      >
        문의하기
      </button>
    </form>
  );
}
