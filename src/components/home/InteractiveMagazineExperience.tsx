'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function InteractiveMagazineExperience() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [selectedTruth, setSelectedTruth] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(0);

  // Interactive Calculator State
  const [aluguel, setAluguel] = useState(1400);
  const [instalacao, setInstalacao] = useState(5000);
  const custoFixoMensal = Math.round(aluguel * 1.55);
  const reserva3Meses = custoFixoMensal * 3;
  const capitalTotal = instalacao + reserva3Meses;

  const SPREADS = [
    { id: 'manifesto', name: '01. MANIFESTO & O TAPA NA CARA' },
    { id: 'simulador', name: '02. SIMULADOR VIVO DE CUSTOS' },
    { id: 'leitor', name: '03. DEGUSTAÇÃO DO E-BOOK' },
    { id: 'metodo', name: '04. O MÉTODO PMS (6 ETAPAS)' },
    { id: 'oferta', name: '05. ADQUIRIR O KIT (R$ 47)' },
  ];

  const TRUTHS = [
    {
      title: 'Comodismo é uma prisão disfarçada de conforto',
      desc: 'Você acha que economiza dinheiro morando com os pais, mas paga com a sua privacidade, maturidade e autonomia. Ter suas próprias regras exige pagar suas próprias contas.'
    },
    {
      title: 'O "momento perfeito" nunca vai chegar',
      desc: 'Esperar R$ 50 mil na conta ou um cargo de diretor para sair de casa aos 35 anos é uma ilusão. O que falta não é dinheiro infinito, é método de preparação.'
    },
    {
      title: 'Sair de casa no impulso de uma briga é infantilidade',
      desc: 'Fugir de casa sem calcular o custo de instalação e a reserva de emergência é o caminho mais rápido para voltar derrotado 3 meses depois.'
    },
    {
      title: 'Privacidade não se pede, se constrói',
      desc: 'Sob o teto dos seus pais, as regras são deles. Para viver do seu jeito, você precisa de um plano tático de emancipação.'
    }
  ];

  const CHAPTERS = [
    {
      part: 'PARTE 01',
      title: 'O Preço Invisível da Falsa Liberdade',
      quote: '“Privacidade não se pede em uma conversa; se conquista no orçamento.”',
      summary: 'Como identificar os motivos reais para sair de casa sem romantizar a vida adulta e sem tomar decisões impulsivas.'
    },
    {
      part: 'PARTE 02',
      title: 'A Saída Falsa & O Risco de Retorno',
      quote: '“Fugir em uma briga é a receita exata para voltar derrotado com as malas na mão.”',
      summary: 'Estudo de caso dos erros clássicos e como neutralizar a ansiedade substituindo o impulso por um plano de 90 dias.'
    },
    {
      part: 'PARTE 03',
      title: 'Engenharia do Dinheiro Real',
      quote: '“Aluguel representa apenas 35% do custo. O resto é a instalação invisível.”',
      summary: 'Fórmulas exatas para separar Custo Fixo Mensal de Custo Único de Instalação (caução, frete, mobília e utilitários).'
    },
    {
      part: 'PARTE 04',
      title: 'Rotina Doméstica & Manutenção sem Caos',
      quote: '“Quem não sabe fazer feira gasta R$ 1.500 por mês só em delivery.”',
      summary: 'Manual tático de supermercado, faxina ágil, conservação do lar e gestão de contas sem atrasos.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#111111] font-sans flex flex-col justify-between">

      {/* Top Magazine Header */}
      <header className="border-b-2 border-[#111111] bg-white py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#111111] text-[#00E676] font-mono-code font-bold text-sm flex items-center justify-center border border-[#111111]">
              #
            </div>
            <span className="font-italiana font-extrabold text-2xl tracking-tight text-[#111111]">
              PartiuMorarSozinho
            </span>
          </Link>

          {/* Navigation Spread Controller */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 max-w-full">
            {SPREADS.map((spread, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSpread(idx)}
                className={`px-3.5 py-1.5 font-mono-code text-[11px] font-bold uppercase transition-all shrink-0 border border-[#111111] ${
                  currentSpread === idx
                    ? 'bg-[#111111] text-[#00E676] shadow-[2px_2px_0px_0px_#00E676]'
                    : 'bg-[#F7F5F0] text-[#111111] hover:bg-[#E2FF54]'
                }`}
              >
                {spread.name}
              </button>
            ))}
          </div>

          <Link href="/ebook" className="hidden sm:block">
            <button className="px-4 py-2 bg-[#00E676] text-[#111111] font-mono-code font-bold text-xs uppercase tracking-wider border border-[#111111] shadow-[2px_2px_0px_0px_#111111]">
              COMPRAR E-BOOK (R$ 47)
            </button>
          </Link>
        </div>
      </header>

      {/* Main Magazine Viewport */}
      <main className="flex-1 py-10 px-4 sm:px-8 max-w-7xl mx-auto w-full">

        {/* SPREAD 01: MANIFESTO & O TAPA NA CARA */}
        {currentSpread === 0 && (
          <div className="magazine-spread p-8 sm:p-14 space-y-10 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b-2 border-[#111111] pb-4 font-mono-code text-xs font-bold">
              <span className="bg-[#111111] text-[#00E676] px-3 py-1">[ SPREAD 01 / 05 ]</span>
              <span>MANIFESTO DE EMANCIPAÇÃO 2026</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-6xl font-italiana font-bold leading-[0.95] text-[#111111]">
                  Chega de pedir autorização para viver.{' '}
                  <span className="bg-[#E2FF54] px-2 py-0.5 border border-[#111111] block mt-2 text-3xl sm:text-5xl">
                    Você precisa de um plano de saída.
                  </span>
                </h1>

                <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                  Morar com os pais depois dos 20 anos é confortável — até você perceber que a sua autonomia está morrendo aos poucos. Você não precisa de mais desculpas, precisa tomar vergonha na cara e adquirir o método.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link href="/ebook">
                    <button className="px-8 py-4 bg-[#111111] text-[#00E676] font-mono-code font-bold text-sm uppercase tracking-wider border-2 border-[#111111] shadow-[4px_4px_0px_0px_#00E676] hover:bg-slate-900 transition-all">
                      🔥 GARANTIR O E-BOOK + KIT (R$ 47)
                    </button>
                  </Link>
                  <button onClick={() => setCurrentSpread(1)} className="px-6 py-4 bg-[#F7F5F0] text-[#111111] font-mono-code font-bold text-sm uppercase tracking-wider border-2 border-[#111111]">
                    SIMULAR CUSTOS AGORA →
                  </button>
                </div>
              </div>

              {/* Truth Cards Drawer */}
              <div className="lg:col-span-5 space-y-3">
                <span className="font-mono-code text-xs font-bold uppercase text-slate-500 block mb-2">
                  CLIQUE NAS VERDADES DESCONFORTÁVEIS:
                </span>
                {TRUTHS.map((truth, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedTruth(idx)}
                    className={`p-4 border-2 border-[#111111] cursor-pointer transition-all ${
                      selectedTruth === idx
                        ? 'bg-[#111111] text-white shadow-[4px_4px_0px_0px_#00E676]'
                        : 'bg-[#F7F5F0] text-[#111111] hover:bg-[#E2FF54]'
                    }`}
                  >
                    <div className="font-mono-code text-xs font-bold mb-1">VERDADE 0{idx + 1}</div>
                    <h3 className="font-italiana font-bold text-lg leading-tight">{truth.title}</h3>
                    {selectedTruth === idx && (
                      <p className="text-xs text-slate-300 mt-2 pt-2 border-t border-slate-800 leading-relaxed font-sans">
                        {truth.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SPREAD 02: SIMULADOR VIVO DE CUSTOS */}
        {currentSpread === 1 && (
          <div className="magazine-spread p-8 sm:p-14 space-y-8 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b-2 border-[#111111] pb-4 font-mono-code text-xs font-bold">
              <span className="bg-[#111111] text-[#00E676] px-3 py-1">[ SPREAD 02 / 05 ]</span>
              <span>SIMULADOR DE CUSTO REAL</span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-italiana font-bold text-[#111111]">
                  Quanto dinheiro você realmente precisa?
                </h2>
                <p className="text-sm text-slate-700 font-medium">
                  Deslize os seletores abaixo para ver a mágica da Engenharia de Custos do Método PMS em tempo real.
                </p>

                <div className="space-y-4 bg-[#F7F5F0] p-6 border-2 border-[#111111]">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code font-bold">
                      <span>Aluguel Desejado:</span>
                      <span className="bg-[#111111] text-[#00E676] px-2">R$ {aluguel.toLocaleString('pt-BR')}</span>
                    </div>
                    <input
                      type="range"
                      min={700}
                      max={4000}
                      step={100}
                      value={aluguel}
                      onChange={(e) => setAluguel(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code font-bold">
                      <span>Mobília + Caução Única:</span>
                      <span className="bg-[#111111] text-[#00E676] px-2">R$ {instalacao.toLocaleString('pt-BR')}</span>
                    </div>
                    <input
                      type="range"
                      min={1500}
                      max={15000}
                      step={500}
                      value={instalacao}
                      onChange={(e) => setInstalacao(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="md:col-span-6">
                <div className="bg-[#111111] text-white p-8 border-2 border-[#111111] space-y-4 shadow-[6px_6px_0px_0px_#00E676]">
                  <span className="font-mono-code text-xs font-bold text-slate-400 block uppercase">
                    CAPITAL MÍNIMO RECOMENDADO PARA NÃO VOLTAR
                  </span>
                  <div className="text-4xl sm:text-5xl font-italiana font-bold text-[#00E676]">
                    R$ {capitalTotal.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-xs font-mono-code text-slate-300 space-y-1.5 pt-3 border-t border-slate-800">
                    <div>• Custo Fixo Mensal Estimado: <strong>R$ {custoFixoMensal.toLocaleString('pt-BR')}</strong></div>
                    <div>• Reserva de Segurança (3 Meses): <strong>R$ {reserva3Meses.toLocaleString('pt-BR')}</strong></div>
                  </div>
                  <Link href="/ebook" className="block pt-2">
                    <button className="w-full py-3.5 bg-[#00E676] text-[#111111] font-mono-code font-bold text-xs uppercase tracking-wider border border-[#111111]">
                      ADQUIRIR PLANILHA COMPLETA NO E-BOOK →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SPREAD 03: DEGUSTAÇÃO DO E-BOOK */}
        {currentSpread === 2 && (
          <div className="magazine-spread p-8 sm:p-14 space-y-8 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b-2 border-[#111111] pb-4 font-mono-code text-xs font-bold">
              <span className="bg-[#111111] text-[#00E676] px-3 py-1">[ SPREAD 03 / 05 ]</span>
              <span>LEITOR DE CAPÍTULOS DO E-BOOK</span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 space-y-2 font-mono-code text-xs font-bold">
                {CHAPTERS.map((chap, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedChapter(idx)}
                    className={`w-full text-left p-3.5 border-2 border-[#111111] transition-all flex items-center justify-between ${
                      selectedChapter === idx
                        ? 'bg-[#111111] text-[#00E676]'
                        : 'bg-[#F7F5F0] text-[#111111] hover:bg-[#E2FF54]'
                    }`}
                  >
                    <span>{chap.part}</span>
                    <span>{selectedChapter === idx ? '➔' : '+'}</span>
                  </button>
                ))}
              </div>

              <div className="md:col-span-8 bg-[#F7F5F0] p-8 border-2 border-[#111111] space-y-4">
                <span className="font-mono-code text-xs font-bold bg-[#E2FF54] px-2 py-0.5 border border-[#111111]">
                  {CHAPTERS[selectedChapter].part}
                </span>
                <h3 className="text-2xl font-italiana font-bold text-[#111111]">
                  {CHAPTERS[selectedChapter].title}
                </h3>
                <blockquote className="p-4 bg-white border-l-4 border-[#00E676] font-italiana italic text-base text-slate-800">
                  {CHAPTERS[selectedChapter].quote}
                </blockquote>
                <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                  {CHAPTERS[selectedChapter].summary}
                </p>
                <div className="pt-4 border-t border-[#111111]">
                  <Link href="/ebook">
                    <button className="px-6 py-3 bg-[#111111] text-[#00E676] font-mono-code font-bold text-xs uppercase tracking-wider">
                      ADQUIRIR O E-BOOK COMPLETO (R$ 47) →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SPREAD 04: O MÉTODO PMS */}
        {currentSpread === 3 && (
          <div className="magazine-spread p-8 sm:p-14 space-y-8 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b-2 border-[#111111] pb-4 font-mono-code text-xs font-bold">
              <span className="bg-[#111111] text-[#00E676] px-3 py-1">[ SPREAD 04 / 05 ]</span>
              <span>AS 6 ETAPAS DO MÉTODO PMS</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
              {[
                { num: '01', title: 'Diagnosticar', desc: 'Avaliação de prontidão financeira, emocional e prática.' },
                { num: '02', title: 'Organizar', desc: 'Separação entre Custo Fixo Mensal e Custo de Instalação.' },
                { num: '03', title: 'Proteger', desc: 'Construção da Reserva de Emergência de 3 a 6 meses.' },
                { num: '04', title: 'Preparar', desc: 'Domínio da rotina doméstica, refeições e compras.' },
                { num: '05', title: 'Escolher', desc: 'Matriz técnica de decisão: Alugar, Dividir ou Comprar.' },
                { num: '06', title: 'Transicionar', desc: 'Roteiro de conversa familiar e os primeiros 90 dias.' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 border-2 border-[#111111] bg-[#F7F5F0] space-y-2">
                  <span className="font-mono-code font-bold text-lg text-[#00E676] bg-[#111111] px-2 py-0.5">{item.num}</span>
                  <h3 className="font-italiana font-bold text-xl text-[#111111]">{item.title}</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPREAD 05: ADQUIRIR O KIT */}
        {currentSpread === 4 && (
          <div className="magazine-spread-dark p-8 sm:p-14 space-y-8 text-center animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b-2 border-slate-800 pb-4 font-mono-code text-xs font-bold">
              <span className="bg-[#00E676] text-[#111111] px-3 py-1">[ SPREAD 05 / 05 ]</span>
              <span>CHECKOUT & CONVERSÃO</span>
            </div>

            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-4xl sm:text-5xl font-italiana font-bold text-white">
                Garanta Seu Plano de Saída
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                E-Book Principal (140 Páginas em PDF) + 6 Ferramentas Bônus (Planilha de Custos, Checklists Antifraude, Roteiro Familiar e Matriz de Decisão).
              </p>

              <div className="bg-[#121824] p-8 border-2 border-[#00E676] space-y-4 shadow-[6px_6px_0px_0px_#00E676]">
                <div className="font-mono-code text-xs font-bold text-slate-400">PREÇO ESPECIAL DE LANÇAMENTO</div>
                <div className="flex justify-center items-center gap-3">
                  <span className="text-slate-500 line-through text-lg font-mono-code">R$ 97,00</span>
                  <span className="text-5xl font-italiana font-bold text-[#00E676]">R$ 47,00</span>
                </div>
                <span className="text-xs font-mono-code text-slate-300 block">OU EM ATÉ 5X NO CARTÃO</span>

                <Link href="/ebook" className="block pt-2">
                  <button className="w-full py-4 bg-[#00E676] text-[#111111] font-mono-code font-bold text-sm uppercase tracking-wider border-2 border-[#111111]">
                    ⚡ COMPRAR AGORA — DOWNLOAD IMEDIATO
                  </button>
                </Link>
              </div>

              <div className="pt-4 flex justify-center gap-6 font-mono-code text-xs text-slate-400">
                <span>✓ GARANTIA DE 7 DIAS</span>
                <span>✓ PAGAMENTO SEGURO</span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Bottom Magazine Controls */}
      <footer className="border-t-2 border-[#111111] bg-white py-4 px-4 sm:px-8 font-mono-code text-xs font-bold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentSpread(Math.max(0, currentSpread - 1))}
              disabled={currentSpread === 0}
              className="px-3 py-1.5 border border-[#111111] disabled:opacity-30 hover:bg-[#E2FF54]"
            >
              ← ANTERIOR
            </button>
            <button
              onClick={() => setCurrentSpread(Math.min(SPREADS.length - 1, currentSpread + 1))}
              disabled={currentSpread === SPREADS.length - 1}
              className="px-3 py-1.5 border border-[#111111] disabled:opacity-30 hover:bg-[#E2FF54]"
            >
              PRÓXIMO SPREAD →
            </button>
          </div>

          <div>
            PÁGINA {currentSpread + 1} DE {SPREADS.length}
          </div>

          <div className="text-slate-600 text-[11px]">
            © 2026 #PARTIUMORARSOZINHO. TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
}
