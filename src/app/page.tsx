"use client";

import Image from "next/image";

const whatsappNumber = "5561984728861";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20um%20orçamento!`;

export default function Home() {
  const whatsappNumber = "5561984728861";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20um%20orçamento!`;
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-orange-600">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-12 gap-8 bg-black/80">
        <div className="flex flex-col items-center justify-center max-w-2xl w-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-2 tracking-tight drop-shadow-lg text-center">FOX</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Engenharia e Construção</h2>
          <p className="text-zinc-200 text-lg md:text-xl mb-6 text-center">Projetos, laudos, ART, estruturas metálicas e de concreto, acompanhamento, vistoria, consultoria, execução de obra e muito mais. Qualidade, segurança e inovação para sua obra!</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg md:text-xl transition-colors shadow-lg mb-4"
          >
            Solicitar Orçamento no WhatsApp
          </a>
          <div className="flex flex-col gap-1 mt-2 items-center">
            <span className="text-orange-400 font-mono text-xl">(61) 98472-8861</span>
            <span className="text-white text-sm">isacdesaengenheiro10@gmail.com</span>
            <span className="text-zinc-300 text-xs">Eng. Civil Isac de Sá - Brasília/DF</span>
          </div>
        </div>
        <div className="flex justify-center mt-8 w-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Engenharia civil"
            className="rounded-lg shadow-2xl w-full max-w-md object-cover border-4 border-orange-500"
            loading="lazy"
          />
        </div>
      </section>

      {/* Serviços */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-black/70">
        <div className="flex flex-col items-center max-w-2xl w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4 text-center">Nossos Serviços</h3>
          <ul className="text-zinc-100 text-lg md:text-xl space-y-1 text-center">
            <li>Projetos arquitetônicos e estruturais</li>
            <li>Laudos e vistorias técnicas</li>
            <li>ART (Anotação de Responsabilidade Técnica)</li>
            <li>Estruturas metálicas e de concreto pré-moldado</li>
            <li>Acompanhamento e execução de obras</li>
            <li>Consultoria especializada</li>
            <li>Cálculos estruturais</li>
            <li>Arquitetura e planejamento</li>
          </ul>
        </div>
        <div className="flex justify-center mt-8 w-full">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Projeto de engenharia"
            className="rounded-lg shadow-xl w-full max-w-xs object-cover border-2 border-orange-500"
            loading="lazy"
          />
        </div>
      </section>

      {/* Galeria */}
      <section className="w-full flex flex-col items-center justify-center bg-zinc-900/80 py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center">Galeria de Inspiração</h3>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <img
            src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=400&q=80"
            alt="Obra civil"
            className="rounded-lg shadow-lg w-60 h-40 object-cover border border-orange-500"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            alt="Construção moderna"
            className="rounded-lg shadow-lg w-60 h-40 object-cover border border-orange-500"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1503389152951-9c3d8bca6c63?auto=format&fit=crop&w=400&q=80"
            alt="Engenharia estrutural"
            className="rounded-lg shadow-lg w-60 h-40 object-cover border border-orange-500"
            loading="lazy"
          />
        </div>
      </section>

      {/* Rodapé */}
      <footer className="w-full text-center py-6 text-zinc-400 text-sm bg-black/80 mt-auto">
        &copy; {new Date().getFullYear()} FOX Engenharia e Construção. Todos os direitos reservados.
      </footer>
    </main>
  );
}
