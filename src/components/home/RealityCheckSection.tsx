import React from 'react';

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
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-rose-900/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400 bg-rose-950/80 border border-rose-800/80 px-4 py-1.5 rounded-full shadow-lg">
          ⚠️ O Choque de Realidade que Ninguém te Dá
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          4 Verdades Desconfortáveis Sobre Continuar no Quarto dos Seus Pais
        </h2>
        <p className="text-slate-300 text-base">
          Chega de desculpas. A verdade dói, mas é ela que vai te fazer tomar vergonha na cara e construir o seu plano de saída.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {TRUTHS.map((truth, idx) => (
          <div key={idx} className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-rose-900/50 transition-all flex items-start gap-4">
            <span className="text-2xl font-black text-rose-500/40 bg-rose-950/30 px-3 py-1 rounded-xl border border-rose-900/30">
              {truth.num}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{truth.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{truth.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
