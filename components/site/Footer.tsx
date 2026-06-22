import { contato, nav, site } from "@/lib/site";
import { Container, Wordmark } from "./ui";

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark invert className="h-16" />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Consultoria em gestão de pessoas, saúde mental e desenvolvimento
              humano. Manaus · Amazonas — com técnica e humanidade.
            </p>
            <a href="#contato" className="btn btn-primary mt-7">
              Falar com a gente
            </a>
          </div>

          <div className="flex gap-14">
            <nav className="flex flex-col gap-3">
              <span className="kicker text-white/40">Navegar</span>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="kicker text-white/40">Contato</span>
              <a className="text-sm text-white/75 transition-colors hover:text-white" href={contato.whatsapp}>
                {contato.telefoneLabel}
              </a>
              <a className="text-sm text-white/75 transition-colors hover:text-white" href={`mailto:${contato.email}`}>
                {contato.email}
              </a>
              <a className="text-sm text-white/75 transition-colors hover:text-white" href={contato.instagram}>
                {contato.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-1 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {ano} {site.nomeCompleto} · Manaus/AM</span>
          <span>{contato.endereco}</span>
        </div>
      </Container>
    </footer>
  );
}
