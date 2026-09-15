'use client';

import React from 'react';
import Link from 'next/link';

export function BoutiqueOfferCard() {
  return (
    <div id="oferta" className="boutique-card-dark p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden bg-[#12151B]">
      <div className="max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#00D66C] bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
          Oferta de Lançamento • Edição 2026
        </span>
        <h2 className="text-3xl sm:text-5xl font-sans-heading font-black text-white">
          Garante o Seu Plano de Saída
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
          Leve o E-Book Guia de Emancipação Prática + 6 Ferramentas Exclusivas (Planilha de Custos, Checklists Antifraude, Roteiro Familiar e Matriz de Decisão).
        </p>
      </div>

      {/* Pricing Box */}
      <div className="bg-[#0B0D10] border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md mx-auto space-y-4 shadow-xl">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">PREÇO PROMOCIONAL DE LANÇAMENTO</span>
        <div className="flex items-center justify-center gap-3">
          <span className="text-slate-500 line-through text-lg font-bold">R$ 97,00</span>
          <span className="text-4xl sm:text-5xl font-black font-sans-heading text-[#00D66C]">R$ 47,00</span>
        </div>
        <span className="text-xs text-emerald-300 font-medium block">ou 5x no cartão • Acesso Vitalício</span>

        <Link href="/ebook" className="block pt-2">
          <button className="w-full py-4 bg-[#00D66C] hover:bg-[#00B359] text-[#0B0D10] font-sans font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20">
            Adquirir E-Book + Bônus Agora 🚀
          </button>
        </Link>
      </div>

      <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium border-t border-slate-800">
        <span>⚡ Download Imediato em PDF</span>
        <span>🛡️ Garantia Incondicional de 7 Dias</span>
        <span>🔒 Checkout Seguro</span>
      </div>
    </div>
  );
}
