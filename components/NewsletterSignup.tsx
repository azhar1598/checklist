"use client";

import { useState, type FormEvent } from "react";

type NewsletterSignupProps = {
  variant?: "light" | "dark";
  className?: string;
  showIntro?: boolean;
};

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup({
  variant = "light",
  className = "",
  showIntro = true,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isDark = variant === "dark";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          website: formData.get("website"),
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        alreadySubscribed?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        data.alreadySubscribed
          ? "You're already on the list — thank you."
          : "You're subscribed. We'll be in touch.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const inputClass = isDark
    ? "border-nor-cream/20 bg-nor-cream/5 text-nor-cream placeholder:text-nor-cream/40"
    : "border-nor-black/15 bg-nor-white text-nor-black placeholder:text-nor-muted";

  const labelClass = isDark ? "text-nor-cream/40" : "text-nor-muted";

  return (
    <div className={className}>
      {showIntro && (
        <>
          <p
            className={`text-xs font-medium uppercase tracking-[0.15em] ${labelClass}`}
          >
            Newsletter
          </p>
          <p
            className={`mt-3 max-w-sm text-sm leading-relaxed ${
              isDark ? "text-nor-cream/60" : "text-nor-muted"
            }`}
          >
            Occasional updates on NoR products, research, and what we&apos;re
            building next.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className={showIntro ? "mt-5 space-y-3" : "space-y-3"}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`newsletter-email-${variant}`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === "loading" || status === "success"}
            placeholder="you@example.com"
            className={`min-w-0 flex-1 rounded-md border px-4 py-3 text-sm transition-colors focus:border-nor-yellow disabled:opacity-60 ${inputClass}`}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`shrink-0 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-colors disabled:opacity-60 ${
              isDark
                ? "bg-nor-yellow text-nor-black hover:bg-nor-yellow/90"
                : "bg-nor-black text-nor-white hover:bg-nor-warm-mid"
            }`}
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </div>

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {message && (
          <p
            role="status"
            className={`text-sm ${
              status === "error"
                ? "text-red-500"
                : isDark
                  ? "text-nor-yellow"
                  : "text-doop-green"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
