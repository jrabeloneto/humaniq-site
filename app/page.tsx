import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Manifesto from "@/components/site/Manifesto";
import Servicos from "@/components/site/Servicos";
import ComoTrabalhamos from "@/components/site/ComoTrabalhamos";
import Lideranca from "@/components/site/Lideranca";
import Equipe from "@/components/site/Equipe";
import Contato from "@/components/site/Contato";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Servicos />
        <ComoTrabalhamos />
        <Lideranca />
        <Equipe />
        {/*
          07 — Conteúdo / Blog: omitido por ora (não há artigos reais).
          Quando houver conteúdo, criar componente <Conteudo /> com título
          "Ideias e prática de RH" e 3 chamadas reais (título + data).
        */}
        <Contato />
      </main>
      <Footer />
    </>
  );
}
