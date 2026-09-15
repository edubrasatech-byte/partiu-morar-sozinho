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
    <div className="paper-card p-6 sm:p-10 bg-white space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="warning">
          03. Confronto Direto
        </Badge>
        <h3 className="text-2xl sm:text-4xl font-display-title font-black text-[#0D1117]">
          Sair no Impulso vs. Método PMS
        </h3>
        <p className="text-slate-700 text-xs sm:text-sm font-medium">
          A diferença entre uma mudança que vira pesadelo e uma transição que te dá orgulho.
        </p>
      </div>

      <div className="space-y-4">
        {COMPARISONS.map((comp, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-4 p-4 border-2 border-[#0D1117] bg-[#FAF8F5] items-center">
            <div className="md:col-span-3 font-mono font-bold text-xs text-[#0D1117] uppercase tracking-wider">
              {comp.topic}
            </div>

            <div className="md:col-span-4 bg-rose-100 border border-rose-900 p-3 text-xs text-rose-950 font-medium">
              <span className="font-mono font-bold text-rose-700 block mb-1">❌ SAIR NO IMPULSO</span>
              {comp.impulse}
            </div>

            <div className="md:col-span-5 bg-[#E2FF54] border border-[#0D1117] p-3 text-xs text-[#0D1117] font-medium">
              <span className="font-mono font-bold text-[#0D1117] block mb-1">✅ MÉTODO PMS</span>
              {comp.pms}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
