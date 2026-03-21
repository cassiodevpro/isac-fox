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
            src="/galeria/logo_top.jpg"
            alt="Logo Fox Engenharia"
            className="rounded-lg shadow-2xl w-full max-w-md object-contain border-4 border-orange-500 bg-white"
            loading="lazy"
            style={{background: '#fff'}}
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
            src="/galeria/logo_bottom.jpg"
            alt="Logo Fox Engenharia Bottom"
            className="rounded-lg shadow-xl w-full max-w-xs object-contain border-2 border-orange-500 bg-white"
            loading="lazy"
            style={{background: '#fff'}}
          />
        </div>
      </section>


      {/* Galeria */}
      <section className="w-full flex flex-col items-center justify-center bg-zinc-900/80 py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-[#2563eb] mb-8 text-center tracking-wide drop-shadow-lg" style={{fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '1.5px'}}>Galeria</h3>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {[
            'WhatsApp Image 2026-03-10 at 18.00.02.jpeg',
            'WhatsApp Image 2026-03-10 at 18.00.44.jpeg',
            'WhatsApp Image 2026-03-10 at 18.00.49.jpeg',
            'WhatsApp Image 2026-03-10 at 18.00.50.jpeg',
            'WhatsApp Image 2026-03-10 at 18.01.55.jpeg',
            'WhatsApp Image 2026-03-10 at 18.02.26.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.41.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.44 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.44.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.46.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.48.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.49 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.49 (2).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.49 (3).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.49.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.50 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.50.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.51 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.51 (2).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.51 (3).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.51.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.52 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.52 (2).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.52 (3).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.52.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.53 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.53 (2).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.53 (3).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.53.jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.54 (1).jpeg',
            'WhatsApp Image 2026-03-10 at 18.07.54.jpeg',
          ].slice(0, 6).map((img, idx) => (
            <div key={img} className="relative rounded-lg shadow-lg w-60 h-40 border-2 border-[#2563eb] bg-white overflow-hidden flex items-center justify-center">
              <img
                src={`/galeria/${img}`}
                alt={`Fox Engenharia galeria ${idx+1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Logo sobreposta */}
              <div className="absolute bottom-2 right-2 bg-white/80 rounded-full px-3 py-1 flex items-center gap-2 shadow-md border border-[#2563eb]">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="15" fill="#2563eb" stroke="#1e293b" strokeWidth="2"/>
                  <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="Arial, sans-serif">FOX</text>
                </svg>
                <span className="text-[#2563eb] font-bold text-sm tracking-wide">Engenharia</span>
              </div>
            </div>
          ))}
        </div>
        <a href="/galeria" className="mt-8 inline-block bg-[#2563eb] hover:bg-[#1e293b] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">Ver galeria completa</a>
      </section>

      {/* Informações completas */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-linear-to-br from-[#f8fafc] to-[#e0e7ef]">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#2563eb] mb-6 text-center tracking-wide drop-shadow-lg" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Informações e Serviços</h3>
        <ul className="text-[#1e293b] text-xl md:text-2xl font-semibold space-y-3 text-center columns-2 max-w-3xl w-full mx-auto bg-white/80 rounded-xl p-6 shadow-lg border border-[#2563eb22]">
          <li>Fox Engenharia e construção</li>
          <li>Projetos</li>
          <li>ART</li>
          <li>Acompanhamento</li>
          <li>Vistoria Técnica</li>
          <li>Laudos</li>
          <li>Pre moldados</li>
          <li>Estrutura metálica</li>
          <li>Concreto Armado</li>
          <li>Alvenaria</li>
          <li>Projetos</li>
          <li>Arquitetura</li>
          <li>Fundação</li>
          <li>Estrutural</li>
          <li>Instalações</li>
          <li>Individualização de hidrômetro CAESB</li>
          <li>Individualização de Medidores Neo Energia</li>
        </ul>
      </section>

      {/* Rodapé */}
      <footer className="w-full text-center py-6 text-zinc-400 text-sm bg-black/80 mt-auto">
        &copy; {new Date().getFullYear()} FOX Engenharia e Construção. Todos os direitos reservados.
      </footer>
    </main>
  );
}
