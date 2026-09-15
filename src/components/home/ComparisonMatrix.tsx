import React from 'react';

export function ComparisonMatrix() {
  const COMPARISONS = [
    {
      topic: 'Motivação Inicial',
      impulse: 'Emocional, impulso por briga ou cansaço temporário da rotina.',
      pms: 'Consciente, motivada por projeto pessoal de autonomia e maturidade.'
    },
    {
      topic: 'Cálculo de Custo',
      impulse: 'Olha apenas o valor do aluguel e assume que "dá para se virar".',
      pms: 'Calcula Custo Fixo Mensal + Custo de Instalação + Margem de Risco.'
    },
    {
      topic: 'Reserva de Emergência',
      impulse: 'Nenhuma ou poupança zerada logo no primeiro mês de caução.',
      pms: 'Garantida para 3 a 6 meses de custo de vida antes de assinar contrato.'
    },
    {
      topic: 'Relação com a Família',
      impulse: 'Rompimento ruidoso, saída com briga ou saída escondida.',
      pms: 'Conversa madura com roteiro, mostrando planejamento e mantendo laços.'
    },
    {
      topic: 'Gestão Doméstica',
      impulse: 'Alimentação via delivery, contas atrasadas e rotina caótica.',
      pms: 'Plano de 90 dias com rotina de limpeza, refeições e orçamento sob controle.'
    },
    {
      topic: 'Resultado Final',
      impulse: 'Risco altíssimo de voltar para a casa dos pais em menos de 12 meses.',
      pms: 'Moradia sustentável, autonomia definitiva e zero risco de retorno forçado.'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full">
          Diferença Fundamental
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
          Sair no Impulso vs. Método PMS
        </h3>
        <p className="text-slate-300 text-sm">
          A diferença entre uma mudança que vira pesadelo e uma transição que te dá orgulho.
        </p>
      </div>

      <div className="space-y-4">
        {COMPARISONS.map((comp, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 items-center">
            <div className="md:col-span-3 text-sm font-bold text-slate-200 border-b md:border-b-0 md:border-r border-slate-800 pb-2 md:pb-0">
              {comp.topic}
            </div>

            <div className="md:col-span-4 bg-rose-950/30 border border-rose-900/40 p-3.5 rounded-xl text-xs text-rose-200">
              <span className="font-bold text-rose-400 block mb-1">❌ Sair no Impulso</span>
              {comp.impulse}
            </div>

            <div className="md:col-span-5 bg-emerald-950/40 border border-emerald-800/50 p-3.5 rounded-xl text-xs text-emerald-200">
              <span className="font-bold text-emerald-400 block mb-1">✅ Método PMS</span>
              {comp.pms}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
