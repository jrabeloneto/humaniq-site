"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, contato } from "@/lib/site";
import { Container, Wordmark } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white">
      <Container className="flex h-16 items-center justify-between">
        <a href="#topo" aria-label="Humaniq — início" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-mist bg-white px-4 py-2 text-[0.9rem] font-medium text-ink/80 transition-colors hover:border-blue hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary ml-1">
            Falar com a gente
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative flex h-3.5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-ink transition-all duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 top-0 -z-10 flex flex-col justify-between bg-royal px-5 pb-12 pt-24 text-white lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease }}
                  className="font-display text-[14vw] leading-[1.06] text-white/90"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="btn btn-light w-full justify-center"
              >
                Falar com a gente
              </a>
              <a href={contato.whatsapp} className="text-center text-sm text-white/70">
                {contato.telefoneLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
