
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOX Engenharia e Construção",
  description: "Projetos, laudos, ART, estruturas metálicas e de concreto, acompanhamento, vistoria, consultoria, execução de obra. Eng. Civil Isac de Sá - Brasília/DF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Projetos, laudos, ART, estruturas metálicas e de concreto, acompanhamento, vistoria, consultoria, execução de obra. Eng. Civil Isac de Sá - Brasília/DF." />
        <meta name="author" content="Eng. Civil Isac de Sá" />
        <meta name="keywords" content="engenharia, construção, projetos, laudos, ART, estrutura metálica, estrutura de concreto, consultoria, Brasília, DF" />
        <title>FOX Engenharia e Construção</title>
        {/* Contatos e informações importantes */}
        <meta name="contact:phone" content="(61) 98472-8861" />
        <meta name="contact:email" content="isacdesaengenheiro10@gmail.com" />
        <meta name="contact:whatsapp" content="https://wa.me/5561984728861" />
        <meta name="address" content="Brasília/DF" />
        {/* Redes sociais fake */}
        <meta name="social:instagram" content="https://instagram.com/foxengenharia.fake" />
        <meta name="social:facebook" content="https://facebook.com/foxengenharia.fake" />
        <meta name="social:linkedin" content="https://linkedin.com/company/foxengenharia-fake" />
        <meta name="social:youtube" content="https://youtube.com/@foxengenhariafake" />
        {/* Ícone fake */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Cabeçalho fixo com contatos e redes sociais */}
        <header className="w-full bg-black/90 py-2 px-4 flex flex-col items-center justify-center gap-2 border-b border-orange-500 z-50 sticky top-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-orange-500 font-bold text-lg">FOX Engenharia</span>
            <span className="text-zinc-200 text-sm ml-0 md:ml-4">Contato: <a href="tel:+5561984728861" className="text-orange-400 hover:underline">(61) 98472-8861</a></span>
            <span className="text-zinc-200 text-sm ml-0 md:ml-4">Email: <a href="mailto:isacdesaengenheiro10@gmail.com" className="text-orange-400 hover:underline">isacdesaengenheiro10@gmail.com</a></span>
            <span className="text-zinc-200 text-sm ml-0 md:ml-4">Brasília/DF</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 md:mt-0">
            <a href="https://instagram.com/foxengenharia.fake" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange-500 text-zinc-200 text-xl">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 1 1 12 7.838a4.162 4.162 0 0 1 0 8.324zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
            <a href="https://facebook.com/foxengenharia.fake" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange-500 text-zinc-200 text-xl">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://linkedin.com/company/foxengenharia-fake" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-500 text-zinc-200 text-xl">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 12.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-11h2.881v1.501h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v6.461z"/></svg>
            </a>
            <a href="https://youtube.com/@foxengenhariafake" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-orange-500 text-zinc-200 text-xl">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.413 0 12 0 12s0 3.587.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.837 20.5 12 20.5 12 20.5s7.163 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.587 24 12 24 12s0-3.587-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg>
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
