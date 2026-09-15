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
      desc: 'Se você ficar esperando ter R$ 50 mil na conta para sair de casa, vai continuar no seu quarto de infância até os 35 anos. O que falta é método.'
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
        <Badge variant="danger">
          ⚠️ O Choque de Realidade que Ninguém te Dá
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          4 Verdades Desconfortáveis Sobre Continuar no Quarto dos Seus Pais
        </h2>
        <p className="text-base text-slate-600 font-normal leading-relaxed">
          Chega de desculpas. A verdade dói, mas é ela que vai te fazer tomar vergonha na cara e construir o seu plano de saída.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {TRUTHS.map((truth, idx) => (
          <div key={idx} className="bestseller-card p-7 space-y-3 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-900 font-extrabold text-xs flex items-center justify-center font-heading">
                {truth.num}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">CHOQUE DE REALIDADE</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">{truth.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">{truth.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
