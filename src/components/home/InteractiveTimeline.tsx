'use client';

import React, { useState } from 'react';

export function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      num: '01',
      title: 'Diagnosticar',
      subtitle: 'Saber se é maturidade ou impulso',
      desc: 'Avaliação estrita da prontidão financeira, emocional, prática e familiar. Identifica os motivos reais da saída para não tomar decisões precipitadas.',
      risk: 'Evita: Sair sem estar pronto e passar sufoco no 1º mês.'
    },
    {
      num: '02',
      title: 'Organizar',
      subtitle: 'Engenharia do Orçamento Real',
      desc: 'Separação matemática entre Custo Fixo Mensal (aluguel, feira, luz) e Custo de Instalação (mobília, garantia, frete e pequenas reformas).',
      risk: 'Evita: Estouro do cartão de crédito e dívidas em cascata.'
    },
    {
      num: '03',
      title: 'Proteger',
      subtitle: 'Construção da Margem de Segurança',
      desc: 'Criação da Reserva de Emergência equivalente a 3 a 6 meses de custo de vida antes de colocar os pés fora da casa dos pais.',
      risk: 'Evita: A temida volta forçada com as malas na mão.'
    },
    {
      num: '04',
      title: 'Preparar',
      subtitle: 'Domínio da Rotina Doméstica',
      desc: 'Treinamento tático de lavagem de roupas, manutenção básica, limpeza rápida e compras de supermercado inteligentes sem depender de delivery.',
      risk: 'Evita: Caos doméstico e gastos excessivos com fast-food.'
    },
    {
      num: '05',
      title: 'Escolher',
      subtitle: 'Matriz de Seleção de Moradia',
      desc: 'Escolha da rota ideal: Alugar sozinho, Dividir moradia, Comprar ou Permanecer com Meta. Análise estrita de cláusulas contratuais.',
      risk: 'Evita: Assinar contratos abusivos ou aluguel caro demais.'
    },
    {
      num: '06',
      title: 'Transicionar',
      subtitle: 'Comunicação & Primeiros 90 Dias',
      desc: 'Roteiro de conversa assertiva com os pais para manter laços familiares saudáveis, cronograma de mudança e plano dos primeiros 90 dias.',
      risk: 'Evita: Rompimento familiar e improviso no novo lar.'
    }
  ];

  return (
    <div id="metodo" className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Mecanismo Passo a Passo
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans-heading font-black text-[#0B0D10]">
          O Método PMS em Linha do Tempo
        </h2>
        <p className="text-slate-600 text-sm font-normal">
          Clique nos números abaixo para visualizar como cada etapa neutraliza os erros mais comuns.
        </p>
      </div>

      {/* Horizontal Step Selector */}
      <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none justify-start md:justify-center">
        {STEPS.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`px-5 py-3 rounded-2xl font-sans font-bold text-xs transition-all shrink-0 flex items-center gap-2 border ${
              activeStep === idx
                ? 'bg-[#0B0D10] text-white border-[#0B0D10] shadow-lg shadow-slate-900/10'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className={activeStep === idx ? 'text-[#00D66C]' : 'text-slate-400'}>{step.num}</span>
            <span>{step.title}</span>
          </button>
        ))}
      </div>

      {/* Selected Step Display Card */}
      <div className="boutique-card p-8 bg-white max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-slate-900 text-[#00D66C] font-mono font-bold text-sm flex items-center justify-center">
              {STEPS[activeStep].num}
            </span>
            <div>
              <h3 className="text-xl font-bold font-sans-heading text-[#0B0D10]">{STEPS[activeStep].title}</h3>
              <span className="text-xs text-slate-500 font-medium">{STEPS[activeStep].subtitle}</span>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
          {STEPS[activeStep].desc}
        </p>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900">
          🛡️ {STEPS[activeStep].risk}
        </div>
      </div>
    </div>
  );
}
