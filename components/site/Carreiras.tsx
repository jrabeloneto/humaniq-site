import { contato } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

export default function Carreiras() {
  return (
    <section id="vagas" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="rounded-[var(--radius-card)] bg-royal p-8 text-white md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Tag tone="light">Trabalhe conosco</Tag>
                <h2 className="font-display-black mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.02] text-white">
                  Faça parte do nosso time.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  Estamos sempre de olho em gente boa que gosta de cuidar de
                  gente. Cadastre seu currículo no nosso banco de talentos e
                  participe dos processos seletivos da Humaniq.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:col-span-5 lg:items-end">
                <a
                  href={contato.vagasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light w-full justify-center sm:w-auto"
                >
                  Cadastrar currículo →
                </a>
                <div className="text-sm lg:text-right">
                  <span className="kicker block text-white/60">
                    E-mail de recrutamento
                  </span>
                  <a
                    href={`mailto:${contato.emailRecrutamento}`}
                    className="mt-1 inline-block text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    {contato.emailRecrutamento}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
