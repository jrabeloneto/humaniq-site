import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** Rótulo de seção em caixa alta, sem símbolo. */
export function Tag({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "light" | "ink";
}) {
  const text =
    tone === "light" ? "text-white/70" : tone === "ink" ? "text-ink/60" : "text-blue";
  return <span className={`kicker ${text}`}>{children}</span>;
}

/** Marca tipográfica — "humaniq" forte, sem símbolos. */
export function Wordmark({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={`font-display-black text-[1.5rem] leading-none ${
        invert ? "text-white" : "text-ink"
      } ${className}`}
    >
      humaniq
    </span>
  );
}
