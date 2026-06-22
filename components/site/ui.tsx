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

/** Logo oficial da Humaniq (azul no claro, branca no escuro). */
export function Wordmark({
  className = "h-11",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={invert ? "/logo-branca.png" : "/logo-azul.png"}
      alt="Humaniq"
      className={`w-auto ${className}`}
    />
  );
}
