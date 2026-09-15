'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';

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
    <div className="paper-card p-6 sm:p-10 bg-white space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="default">
          05. Perguntas Frequentes
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-display-title font-black text-[#0D1117]">
          Dúvidas & Objeções
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm font-medium">
          Tudo o que você precisa saber antes de iniciar seu planejamento.
        </p>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {OBJECTIONS.map((obj, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-2 border-[#0D1117] bg-[#FAF8F5] overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 text-left font-display-title font-bold text-[#0D1117] text-sm sm:text-base flex justify-between items-center hover:bg-[#E2FF54] transition-colors focus:outline-none"
              >
                <span>{obj.q}</span>
                <span className="font-mono font-black text-lg ml-4">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="p-4 pt-2 text-xs sm:text-sm text-slate-800 border-t-2 border-[#0D1117] leading-relaxed bg-white font-medium">
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
