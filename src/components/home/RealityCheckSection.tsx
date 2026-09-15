import React from 'react';
import { Badge } from '@/components/ui/Badge';

export function RealityCheckSection() {
  const TRUTHS = [
    {
      num: '01',
      title: 'Comodismo é uma prisão disfarçada de conforto',
      desc: 'Você acha que está economizando dinheiro morando com seus pais, mas está pagando um preço altíssimo em perda de autonomia, privacidade e maturidade emocional.'
    },
    {
      num: '02',
      title: 'O "momento perfeito" nunca vai chegar',
      desc: 'Se você ficar esperando ter R$ 50 mil na conta ou um salário de diretor para sair de casa, vai continuar no seu quarto de infância até os 35 anos. O que falta é método.'
    },
    {
      num: '03',
      title: 'Sair de casa no impulso de uma briga é infantilidade',
      desc: 'Juntar as malas com raiva sem calcular o custo de instalação e a reserva de emergência é a receita exata para voltar derrotado para a casa dos pais em 3 meses.'
    },
    {
      num: '04',
      title: 'Privacidade não se pede, se constrói',
      desc: 'Enquanto você morar sob o teto dos seus pais, as regras são deles. Se você quer liberdade de verdade, precisa pagar as próprias contas e ter o seu espaço.'
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="danger" className="mb-1">
          ⚠️ O Choque de Realidade que Ninguém te Dá
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-display-title font-black text-[#0D1117] tracking-tight">
          4 Verdades Desconfortáveis Sobre Continuar no Quarto dos Seus Pais
        </h2>
        <p className="text-base text-slate-700 font-medium leading-relaxed">
          Chega de desculpas. A verdade dói, mas é ela que vai te fazer tomar vergonha na cara e construir o seu plano de saída.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {TRUTHS.map((truth, idx) => (
          <div key={idx} className="paper-card p-6 bg-white space-y-3 relative">
            <div className="flex items-center justify-between border-b-2 border-[#0D1117] pb-2 font-mono text-xs font-bold">
              <span className="bg-[#0D1117] text-[#00E676] px-2.5 py-0.5">{truth.num}</span>
              <span className="text-slate-500">REALITY CHECK</span>
            </div>
            <h3 className="text-xl font-display-title font-bold text-[#0D1117]">{truth.title}</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{truth.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
