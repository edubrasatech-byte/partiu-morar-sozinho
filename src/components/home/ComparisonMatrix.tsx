import React from 'react';
import { Badge } from '@/components/ui/Badge';

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
    <div className="bestseller-card p-7 sm:p-10 space-y-8 bg-white">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="warning">
          03. Confronto Direto
        </Badge>
        <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
          Sair no Impulso vs. Método PMS
        </h3>
        <p className="text-slate-600 text-sm font-normal">
          A diferença entre uma mudança que vira pesadelo e uma transição que te dá orgulho.
        </p>
      </div>

      <div className="space-y-4">
        {COMPARISONS.map((comp, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 items-center">
            <div className="md:col-span-3 font-bold text-sm text-slate-900 font-heading">
              {comp.topic}
            </div>

            <div className="md:col-span-4 bg-rose-50 border border-rose-200 p-4 rounded-xl text-xs text-rose-900 font-medium">
              <span className="font-bold text-rose-700 block mb-1">❌ SAIR NO IMPULSO</span>
              {comp.impulse}
            </div>

            <div className="md:col-span-5 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-950 font-medium">
              <span className="font-bold text-emerald-700 block mb-1">✅ MÉTODO PMS</span>
              {comp.pms}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
