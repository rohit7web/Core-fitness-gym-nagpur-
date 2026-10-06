import { useState, type FormEvent } from "react";
import { BUSINESS, whatsappLink } from "../data/business";
import { PrimaryButton } from "./ui";
import { CheckIcon } from "./icons";

type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  interest: "Membership Enquiry",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      `Hello Core Fitness, I'd like to enquire.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Interested in: ${form.interest}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noreferrer");
    setSubmitted(true);
    setForm(INITIAL);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[1.5rem] border border-[#171321]/10 bg-[#D9F2D0]/40 p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171321] text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="font-display text-xl font-bold text-[#171321]">Thank you — enquiry ready to send!</h3>
        <p className="max-w-sm text-[#55515E]">
          We opened WhatsApp with your enquiry pre-filled. Hit send there and our team will get back to you
          shortly. You can also call us directly at{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold text-[#171321] underline">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-[#171321] underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-[1.5rem] border border-[#171321]/10 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#171321]">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-[#171321]/15 bg-white px-4 py-3 text-[#171321] placeholder:text-[#55515E]/50 focus:border-[#171321]/40"
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[#171321]">
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-xl border border-[#171321]/15 bg-white px-4 py-3 text-[#171321] placeholder:text-[#55515E]/50 focus:border-[#171321]/40"
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#171321]">
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-[#171321]/15 bg-white px-4 py-3 text-[#171321] placeholder:text-[#55515E]/50 focus:border-[#171321]/40"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-[#171321]">
            I'm interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={update("interest")}
            className="w-full rounded-xl border border-[#171321]/15 bg-white px-4 py-3 text-[#171321] focus:border-[#171321]/40"
          >
            <option>Membership Enquiry</option>
            <option>Strength Training</option>
            <option>Cardio Fitness</option>
            <option>Functional Training</option>
            <option>Personal Training</option>
            <option>Gym Visit / Tour</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#171321]">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="w-full resize-none rounded-xl border border-[#171321]/15 bg-white px-4 py-3 text-[#171321] placeholder:text-[#55515E]/50 focus:border-[#171321]/40"
          placeholder="Tell us about your fitness goals..."
        />
      </div>

      <PrimaryButton type="submit" className="w-full sm:w-auto">
        Send Enquiry via WhatsApp
      </PrimaryButton>
      <p className="text-xs text-[#55515E]">
        Submitting will open WhatsApp with your details pre-filled so our team can respond quickly.
      </p>
    </form>
  );
}
