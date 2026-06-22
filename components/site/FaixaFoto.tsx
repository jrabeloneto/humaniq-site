import { fechamento } from "@/lib/site";
import { Container } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

export default function FaixaFoto() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagem do portfólio. TODO: confirmar uso/licença ou trocar por foto própria */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/foto-cuidar.jpg"
        alt="Equipe em ambiente de trabalho saudável"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-royal/85" />

      <Container className="relative z-10 py-24 md:py-32">
        <Reveal>
          <p className="font-display-black max-w-[20ch] text-[clamp(2rem,5vw,4rem)] leading-[1.02] text-white">
            {fechamento}
          </p>
          <a href="#contato" className="btn btn-light mt-8">
            Falar com a gente
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
