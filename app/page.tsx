import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Manifesto from "@/components/site/Manifesto";
import Servicos from "@/components/site/Servicos";
import Diferenciais from "@/components/site/Diferenciais";
import Lideranca from "@/components/site/Lideranca";
import Clientes from "@/components/site/Clientes";
import FaixaFoto from "@/components/site/FaixaFoto";
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
        <Diferenciais />
        <Lideranca />
        <Clientes />
        <FaixaFoto />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
