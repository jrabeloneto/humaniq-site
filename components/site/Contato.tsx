"use client";

import { useState } from "react";
import { contato } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-blue focus:outline-none";

export default function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    // Entrega garantida: monta a mensagem e abre o WhatsApp da Humaniq.
    // (Sem backend — o lead chega direto. Para receber por e-mail no futuro,
    //  dá pra plugar um Formspree aqui.)
    const texto =
      `Olá, Humaniq! Meu nome é ${data.nome}` +
      (data.empresa ? ` (${data.empresa})` : "") +
      `.\nE-mail: ${data.email}\n\n${data.mensagem}`;
    window.open(`${contato.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank");
    setEnviado(true);
    form.reset();
  }

  return (
    <section id="contato" className="bg-royal py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <Tag tone="light">Contato</Tag>
          <h2 className="font-display-black mt-6 max-w-[18ch] text-[clamp(2.4rem,6vw,5rem)] text-white">
            Vamos conversar sobre o seu time
            <span className="text-sky">?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Coordenadas */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-1">
              <Coord
                k="WhatsApp · resposta mais rápida"
                v={contato.telefoneLabel}
                href={contato.whatsapp}
              />
              <Coord
                k="Telefone"
                v={contato.telefone2Label}
                href={`tel:+55${contato.telefone2Label.replace(/\D/g, "")}`}
              />
              <Coord k="E-mail" v={contato.email} href={`mailto:${contato.email}`} />
              <Coord k="Instagram" v={contato.instagramHandle} href={contato.instagram} />
              <div>
                <span className="kicker text-white/70">Onde estamos</span>
                <p className="mt-2 max-w-xs leading-relaxed text-white">{contato.endereco}</p>
              </div>
            </div>
          </Reveal>

          {/* Form em card branco */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[var(--radius-card)] bg-white p-7 text-ink md:p-9">
              {enviado ? (
                <div role="status" aria-live="polite" className="flex min-h-[300px] flex-col items-start justify-center">
                  <span className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-2xl text-white">
                    ✓
                  </span>
                  <h3 className="font-display mt-6 text-3xl text-ink">Tudo certo!</h3>
                  <p className="mt-3 max-w-sm text-ink/65">
                    Abrimos o WhatsApp com a sua mensagem pronta — é só enviar.
                    Não abriu?{" "}
                    <a href={contato.whatsapp} className="font-medium text-blue underline">
                      Fale com a gente aqui
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
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

                  <button type="submit" className="btn btn-primary w-full justify-center">
                    Enviar pelo WhatsApp
                  </button>
                  <p className="text-center text-xs text-ink/45">
                    Resposta mais rápida — sua mensagem abre direto no WhatsApp.
                  </p>
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
      <span className="kicker text-white/70">{k}</span>
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
  const errId = `${name}-erro`;
  const borda = error ? "border-blue ring-2 ring-blue/30" : "border-mist";
  return (
    <div>
      <label htmlFor={name} className="kicker mb-2 block text-ink/60">
        {label}
        {optional && <span className="ml-1.5 lowercase tracking-normal text-ink/35">(opcional)</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={`${inputBase} ${borda} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={`${inputBase} ${borda}`}
        />
      )}
      {error && (
        <p id={errId} className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-blue">
          <span aria-hidden>⚠</span>
          {error}
        </p>
      )}
    </div>
  );
}
