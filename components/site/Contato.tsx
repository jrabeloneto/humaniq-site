"use client";

import { useState } from "react";
import { contato } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-blue focus:outline-none";

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.nome?.trim()) next.nome = "Diga seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? ""))
      next.email = "E-mail inválido.";
    if (!data.mensagem?.trim()) next.mensagem = "Conte um pouco do contexto.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    try {
      // TODO (cliente): plugar envio real (route handler em app/api/contato ou Formspree).
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("falha");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-royal py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <Tag tone="light">Contato</Tag>
          <h2 className="font-display-black mt-6 max-w-[18ch] text-[clamp(2.4rem,6vw,5rem)] text-white">
            Vamos conversar sobre a sua gente
            <span className="text-sky">?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Coordenadas */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-1">
              <Coord k="WhatsApp" v={contato.telefoneLabel} href={contato.whatsapp} />
              <Coord k="Telefone" v={contato.telefone2Label} href={`tel:+55${contato.telefone2Label.replace(/\D/g, "")}`} />
              <Coord k="E-mail" v={contato.email} href={`mailto:${contato.email}`} />
              <Coord k="Instagram" v={contato.instagramHandle} href={contato.instagram} />
              <div>
                <span className="kicker text-white/45">Onde estamos</span>
                <p className="mt-2 max-w-xs leading-relaxed text-white">{contato.endereco}</p>
              </div>
            </div>
          </Reveal>

          {/* Form em card branco */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[var(--radius-card)] bg-white p-7 text-ink md:p-9">
              {status === "success" ? (
                <div className="flex min-h-[300px] flex-col items-start justify-center">
                  <span className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-2xl text-white">
                    ✓
                  </span>
                  <h3 className="font-display mt-6 text-3xl text-ink">Mensagem enviada.</h3>
                  <p className="mt-3 max-w-sm text-ink/65">
                    Obrigado pelo contato. A nossa equipe responde em breve — em
                    geral no mesmo dia útil.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn btn-primary mt-7"
                  >
                    Enviar outra
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field name="nome" label="Nome" error={errors.nome} />
                    <Field name="empresa" label="Empresa" optional />
                  </div>
                  <Field name="email" type="email" label="E-mail" error={errors.email} />
                  <Field name="mensagem" label="Mensagem" textarea error={errors.mensagem} />

                  {status === "error" && (
                    <p className="text-sm text-blue">
                      Algo deu errado. Tente novamente ou nos chame no WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === "loading" ? "Enviando…" : "Enviar mensagem"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Coord({ k, v, href }: { k: string; v: string; href: string }) {
  return (
    <a href={href} className="group block">
      <span className="kicker text-white/45">{k}</span>
      <span className="mt-2 block text-xl text-white transition-colors group-hover:text-sky">
        {v}
      </span>
    </a>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  optional,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  optional?: boolean;
  textarea?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="kicker mb-2 block text-ink/55">
        {label}
        {optional && <span className="ml-1.5 lowercase tracking-normal text-ink/35">(opcional)</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={4} className={`${inputCls} resize-none`} />
      ) : (
        <input id={name} name={name} type={type} className={inputCls} />
      )}
      {error && <p className="mt-1.5 text-sm text-blue">{error}</p>}
    </div>
  );
}
