'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function TactileBookUnboxing() {
  const [activeTab, setActiveTab] = useState<'ebook' | 'bonus'>('ebook');
  const [selectedPart, setSelectedPart] = useState(0);

  const EBOOK_PARTS = [
    {
      num: 'PARTE 01',
      title: 'O Preço Invisível da Falsa Liberdade',
      quote: '"Você acha que economiza dinheiro morando com os pais, mas paga com a sua privacidade e maturidade."',
      detail: 'Análise profunda dos motivos reais para sair de casa sem romantizar a vida adulta. Identificação da dependência emocional disfarçada e como assumir a responsabilidade total do seu espaço.'
    },
    {
      num: 'PARTE 02',
      title: 'A Saída Falsa & O Risco de Retorno',
      quote: '"Fugir de casa no impulso de uma briga é o caminho mais rápido para voltar derrotado 3 meses depois."',
      detail: 'Estudo de caso dos erros clássicos de quem sai sem plano. Como neutralizar o impulso imaturo e substituir por um projeto tático de independência.'
    },
    {
      num: 'PARTE 03',
      title: 'Diagnóstico Prático de Prontidão',
      quote: '"Prontidão não é um sentimento, é uma pontuação em 4 pilares: financeiro, emocional, prático e familiar."',
      detail: 'Avaliação detalhada para descobrir exatamente a sua margem de segurança antes de procurar qualquer imóvel ou assinar contratos.'
    },
    {
      num: 'PARTE 04',
      title: 'Engenharia do Dinheiro Real',
      quote: '"Aluguel é apenas 35% da conta. Se você não calcular o Custo de Instalação, vai passar fome no 2º mês."',
      detail: 'Fórmulas matemáticas exatas para separar Custo Fixo Mensal (aluguel, luz, feira) de Custo Único de Instalação (caução, frete, fogão, colchão).'
    },
    {
      num: 'PARTE 05',
      title: 'Domínio da Vida Prática & Rotina',
      quote: '"Quem não sabe fazer feira e lavar a própria roupa gasta R$ 1.500 por mês só em delivery e desorganização."',
      detail: 'Manuais táticos de manutenção doméstica, compras eficientes de supermercado, faxina ágil e pagamento pontual de utilitários.'
    },
    {
      num: 'PARTE 06',
      title: 'Matriz de Decisão de Moradia',
      quote: '"Alugar sozinho, dividir moradia ou permanecer 6 meses com meta? Escolha pela matemática, não pelo orgulho."',
      detail: 'Comparação criteriosa de renda x prazo x autonomia. Como analisar contratos de aluguel e fugir de cláusulas abusivas.'
    },
    {
      num: 'PARTE 07',
      title: 'Plano de Saída & Conversa Familiar',
      quote: '"Apresente um plano com datas e números aos seus pais. Emancipação gera respeito, briga gera mágoa."',
      detail: 'Roteiros de comunicação assertiva para conversar com a família, cronograma de mudança de 30 dias e gestão dos primeiros 90 dias.'
    },
    {
      num: 'PARTE 08',
      title: 'Blindagem & Lista Antifraude Imobiliária',
      quote: '"Inspecione tomadas, infiltrações e ralos antes da chave. Não pague pelos estragos de inquilinos anteriores."',
      detail: 'Checklist completo de vistoria presencial para evitar golpes, taxas indevidas e cobranças abusivas na devolução do imóvel.'
    }
  ];

  const BONUS_LIST = [
    { num: 'BÔNUS 01', title: 'Planilha "Quanto Custa Minha Liberdade?"', desc: 'Simulador em Excel/Google Sheets para calcular custo de instalação, garantia e data provável de saída.' },
    { num: 'BÔNUS 02', title: 'Checklist do Primeiro Lar', desc: 'Lista dividida em "Essencial Dia 1", "Pode Esperar 30 Dias" e "Não Comprar por Impulso".' },
    { num: 'BÔNUS 03', title: 'Matriz Alugar x Dividir x Comprar', desc: 'Guia comparativo baseado no seu perfil de renda e objetivo de vida.' },
    { num: 'BÔNUS 04', title: 'Roteiro de Conversa Familiar', desc: 'Script de comunicação para apresentar a decisão aos pais de forma madura.' },
    { num: 'BÔNUS 05', title: 'Plano dos Primeiros 90 Dias', desc: 'Cronograma tático de adaptação doméstica e prevenção de imprevistos.' },
    { num: 'BÔNUS 06', title: 'Lista Antifraude Imobiliária', desc: 'Roteiro de inspeção com 10 verificações técnicas antes de assinar a vistoria.' }
  ];

  return (
    <div id="o-kit" className="bg-[#FAF8F5] text-[#0D1117] py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#0D1117] text-[#00E676] px-3.5 py-1.5 border border-[#0D1117]">
            [ O CONTEÚDO DO KIT DIGITAL ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display-title font-black tracking-tight text-[#0D1117]">
            O que você vai aprender no E-Book
          </h2>
          <p className="text-base text-slate-700 font-medium">
            Clique nos capítulos abaixo para inspecionar o conteúdo prático do livro digital.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('ebook')}
              className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#0D1117] transition-all ${
                activeTab === 'ebook'
                  ? 'bg-[#00E676] text-[#0D1117] shadow-[4px_4px_0px_0px_#0D1117]'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              📖 LIVRO DIGITAL (8 PARTES)
            </button>
            <button
              onClick={() => setActiveTab('bonus')}
              className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#0D1117] transition-all ${
                activeTab === 'bonus'
                  ? 'bg-[#00E676] text-[#0D1117] shadow-[4px_4px_0px_0px_#0D1117]'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              🎁 6 FERRAMENTAS BÔNUS
            </button>
          </div>
        </div>

        {/* Ebook Parts Reader View */}
        {activeTab === 'ebook' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left list of chapter buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {EBOOK_PARTS.map((part, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPart(idx)}
                  className={`w-full text-left p-4 border-2 border-[#0D1117] font-mono text-xs font-bold transition-all flex items-center justify-between ${
                    selectedPart === idx
                      ? 'bg-[#0D1117] text-[#00E676] shadow-[4px_4px_0px_0px_#00E676]'
                      : 'bg-white text-[#0D1117] hover:bg-[#E2FF54]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="opacity-60">{part.num}</span>
                    <span className="font-sans font-bold text-sm truncate">{part.title}</span>
                  </div>
                  <span>{selectedPart === idx ? '➔' : '+'}</span>
                </button>
              ))}
            </div>

            {/* Right inspection detail box */}
            <div className="lg:col-span-7">
              <div className="paper-card p-8 space-y-6 relative bg-white">
                <div className="flex justify-between items-center border-b-2 border-[#0D1117] pb-4 font-mono text-xs font-bold">
                  <span className="bg-[#E2FF54] text-[#0D1117] px-2.5 py-1 border border-[#0D1117]">
                    {EBOOK_PARTS[selectedPart].num}
                  </span>
                  <span>CAPÍTULO SELECIONADO</span>
                </div>

                <h3 className="text-2xl font-display-title font-black text-[#0D1117]">
                  {EBOOK_PARTS[selectedPart].title}
                </h3>

                <blockquote className="p-4 bg-[#FAF8F5] border-l-4 border-[#00E676] text-sm font-medium italic text-slate-800">
                  {EBOOK_PARTS[selectedPart].quote}
                </blockquote>

                <p className="text-sm font-normal text-slate-700 leading-relaxed">
                  {EBOOK_PARTS[selectedPart].detail}
                </p>

                <div className="pt-4 border-t-2 border-[#0D1117] flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-500">FORMATO: PDF + ILUSTRAÇÕES DE AÇÃO</span>
                  <Link href="/ebook">
                    <button className="px-5 py-2.5 bg-[#00E676] text-[#0D1117] font-mono text-xs font-bold border-2 border-[#0D1117] shadow-[3px_3px_0px_0px_#0D1117]">
                      GARANTIR O E-BOOK →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bonus Tools List View */}
        {activeTab === 'bonus' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BONUS_LIST.map((b, idx) => (
              <div key={idx} className="paper-card p-6 bg-white space-y-3">
                <span className="font-mono text-xs font-bold bg-[#E2FF54] text-[#0D1117] px-2.5 py-1 border border-[#0D1117] inline-block">
                  {b.num}
                </span>
                <h3 className="text-lg font-display-title font-bold text-[#0D1117]">{b.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
