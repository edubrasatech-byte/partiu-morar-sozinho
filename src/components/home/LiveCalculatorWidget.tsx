'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function LiveCalculatorWidget() {
  const [aluguel, setAluguel] = useState(1300);
  const [instalacao, setInstalacao] = useState(4500);

  const custoFixoEstimado = Math.round(aluguel * 1.6); // Rent + Condomínio + IPTU + Luz + Mercado
  const reserva3Meses = custoFixoEstimado * 3;
  const capitalTotal = instalacao + reserva3Meses;

  return (
    <div id="simulador" className="boutique-card-dark p-8 sm:p-12 max-w-4xl mx-auto space-y-8 bg-[#12151B]">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#00D66C] bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          Calculadora de Liberdade Real
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans-heading font-black text-white">
          Quanto você realmente precisa para sair?
        </h2>
        <p className="text-slate-300 text-sm font-normal">
          Ajuste as estimativas abaixo e veja o resultado do capital necessário.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center pt-2">
        {/* Sliders */}
        <div className="space-y-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Aluguel Desejado:</span>
              <span className="text-[#00D66C] font-mono">R$ {aluguel.toLocaleString('pt-BR')}</span>
            </div>
            <input
              type="range"
              min={600}
              max={4000}
              step={100}
              value={aluguel}
              onChange={(e) => setAluguel(Number(e.target.value))}
              className="w-full accent-[#00D66C] cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Estimativa de Mobília & Caução:</span>
              <span className="text-[#00D66C] font-mono">R$ {instalacao.toLocaleString('pt-BR')}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={15000}
              step={500}
              value={instalacao}
              onChange={(e) => setInstalacao(Number(e.target.value))}
              className="w-full accent-[#00D66C] cursor-pointer"
            />
          </div>
        </div>

        {/* Live Capital Result */}
        <div className="bg-[#0B0D10] p-7 rounded-2xl border border-slate-800 space-y-4 text-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Capital Inicial Seguro Recomendado</span>
          <div className="text-3xl sm:text-4xl font-black font-sans-heading text-[#00D66C]">
            R$ {capitalTotal.toLocaleString('pt-BR')}
          </div>
          <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
            <div>• Custo Fixo Mensal Estimado: <strong>R$ {custoFixoEstimado.toLocaleString('pt-BR')}</strong></div>
            <div>• Reserva de Emergência (3 Meses): <strong>R$ {reserva3Meses.toLocaleString('pt-BR')}</strong></div>
          </div>
          <Link href="/ebook" className="block pt-2">
            <button className="w-full py-3 bg-[#00D66C] hover:bg-[#00B359] text-[#0B0D10] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm">
              Ver Planilha Completa no E-Book →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
