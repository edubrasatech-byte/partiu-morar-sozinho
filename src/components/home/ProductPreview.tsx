'use client';

import React, { useState } from 'react';

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'ebook' | 'bonus'>('ebook');

  const EBOOK_PARTS = [
    { num: 'Parte 1', title: 'O Preço Invisível', desc: 'Privacidade, autonomia e a identificação dos motivos reais para sair de casa sem romantizar a rotina.' },
    { num: 'Parte 2', title: 'A Saída Falsa', desc: 'Como o impulso e a dependência disfarçada geram a temida volta forçada com as malas na mão.' },
    { num: 'Parte 3', title: 'Diagnóstico de Prontidão', desc: 'Avaliação em 4 pilares: financeiro, emocional, prático e familiar.' },
    { num: 'Parte 4', title: 'Engenharia do Dinheiro', desc: 'Custo mensal real, custo de instalação, reserva de emergência e margem de segurança.' },
    { num: 'Parte 5', title: 'Domínio da Vida Prática', desc: 'Rotina doméstica, alimentação saudável sem delivery, limpeza eficiente e pagamento de contas.' },
    { num: 'Parte 6', title: 'Matriz de Escolha de Moradia', desc: 'Critérios técnicos para Alugar, Dividir, Comprar pronto ou na planta, ou Permanecer com meta.' },
    { num: 'Parte 7', title: 'Plano de Saída & Conversa', desc: 'Cronograma passo a passo, roteiro de comunicação familiar e os primeiros 90 dias no novo lar.' },
    { num: 'Parte 8', title: 'Blindagem & Proteção Antifraude', desc: 'Análise de contratos de aluguel, prevenção de golpes imobiliários e documentação essencial.' },
  ];

  const BONUS_TOOLS = [
    { icon: '📊', title: '1. Planilha "Quanto Custa Minha Liberdade?"', desc: 'Calculadora pré-formatada para simular custo de instalação, garantia locatícia, gastos mensais e data exata de mudança.' },
    { icon: '📋', title: '2. Checklist do Primeiro Lar', desc: 'Lista dividida em: "Essencial para o Dia 1", "Pode Esperar 30 Dias" e "Não Comprar por Impulso".' },
    { icon: '🧩', title: '3. Matriz "Alugar x Dividir x Comprar"', desc: 'Ferramenta comparativa baseada na sua faixa de renda, objetivo de vida e prazo desejado.' },
    { icon: '🗣️', title: '4. Roteiro de Conversa Familiar', desc: 'Guia de comunicação assertiva para apresentar sua decisão aos pais sem gerar conflitos ou mágoas.' },
    { icon: '🗓️', title: '5. Plano dos Primeiros 90 Dias', desc: 'Cronograma tático de adaptação doméstica, gestão de manutenção preventiva e organização financeira.' },
    { icon: '🔍', title: '6. Lista Antifraude Imobiliária', desc: 'Checklist completo para vistoria presencial do imóvel com 10 verificações técnicas essenciais.' },
  ];

  return (
    <div id="conteudo" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
          O Que Você Recebe
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3 mb-3">
          O Kit Completo #PartiuMorarSozinho
        </h2>
        <p className="text-slate-300 text-sm">
          Tudo o que você precisa para transformar a vontade de morar sozinho em um plano concreto e à prova de falhas.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 mt-6 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('ebook')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'ebook'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📘 Livro Digital (8 Partes)
          </button>
          <button
            onClick={() => setActiveTab('bonus')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'bonus'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🎁 6 Ferramentas Bônus
          </button>
        </div>
      </div>

      {/* Ebook Tab Content */}
      {activeTab === 'ebook' && (
        <div className="grid md:grid-cols-2 gap-4 animate-in fade-in duration-300">
          {EBOOK_PARTS.map((part, idx) => (
            <div key={idx} className="p-5 bg-slate-950/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">{part.num}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-1.5">{part.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{part.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bonus Tab Content */}
      {activeTab === 'bonus' && (
        <div className="grid md:grid-cols-2 gap-4 animate-in fade-in duration-300">
          {BONUS_TOOLS.map((tool, idx) => (
            <div key={idx} className="p-5 bg-slate-950/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 transition-all flex items-start gap-4">
              <div className="text-3xl p-2 bg-slate-900 rounded-xl border border-slate-800">{tool.icon}</div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{tool.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
