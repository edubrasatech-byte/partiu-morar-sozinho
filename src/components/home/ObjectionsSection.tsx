'use client';

import React, { useState } from 'react';

export function ObjectionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const OBJECTIONS = [
    {
      q: '“Não ganho o suficiente para morar sozinho hoje.”',
      a: 'O primeiro resultado do Método PMS é justamente te dar clareza da distância exata entre sua renda atual e o custo de vida da sua região. Ele te ensina a ajustar o plano (como optar por dividir moradia ou criar uma meta de 6 meses) em vez de tomar uma decisão incompatível com a renda e se endividar.'
    },
    {
      q: '“Ainda não sei se é o momento certo.”',
      a: 'O método também serve para a fase de preparação. Ele transforma o vago "um dia eu me mudo" em critérios numéricos claros e um cronograma tático de ação.'
    },
    {
      q: '“Posso encontrar dicas soltas na internet de graça.”',
      a: 'Dicas soltas no YouTube ou TikTok não oferecem uma sequência estruturada, calculadoras integradas ou checklists de vistoria antifraude. O valor está no método completo e testado.'
    },
    {
      q: '“Tenho receio da reação dos meus pais.”',
      a: 'A preparação inclui um roteiro específico de comunicação familiar. Em vez de uma saída com briga ou anúncio impulsivo, você aprenderá a apresentar um plano maduro que inspira confiança nos seus pais.'
    },
    {
      q: '“Não pretendo comprar um imóvel agora, quero alugar.”',
      a: 'Comprar é apenas uma das 4 rotas explicadas. O método analisa detalhadamente o Aluguel Individual, a Moradia Compartilhada e a Permanência com Meta.'
    },
    {
      q: '“Tenho medo de sair e ter que voltar para a casa dos pais.”',
      a: 'Evitar o retorno forçado é o coração do Método PMS! Criamos a regra da reserva de emergência obrigatória, margem de segurança de orçamento e plano de gestão dos primeiros 90 dias.'
    },
    {
      q: '“Não sei por onde começar os preparativos.”',
      a: 'Sua primeira ação leva menos de 15 minutos: basta responder ao Teste de Prontidão Gratuito para descobrir sua rota ideal.'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
          Respostas Transparentes
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
          Principais Dúvidas & Objeções
        </h2>
        <p className="text-slate-300 text-sm">
          Tudo o que você precisa saber antes de iniciar seu planejamento.
        </p>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {OBJECTIONS.map((obj, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border border-slate-800 bg-slate-950/60 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left font-bold text-white text-sm sm:text-base flex justify-between items-center hover:text-emerald-400 transition-colors focus:outline-none"
              >
                <span>{obj.q}</span>
                <span className="text-emerald-400 font-extrabold text-lg ml-4">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed bg-slate-900/40">
                  {obj.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
