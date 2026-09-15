'use client';

import React from 'react';
import Link from 'next/link';

export function EditorialOfferTicket() {
  return (
    <div id="oferta" className="max-w-4xl mx-auto my-12">
      <div className="paper-card-dark p-8 sm:p-12 relative space-y-8 text-center bg-[#0D1117]">
        {/* Ticket Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-800 pb-4 gap-4 font-mono text-xs font-bold">
          <span className="bg-[#00E676] text-[#0D1117] px-3 py-1 border border-[#00E676]">
            TICKET DE CONVERSÃO • PARCERIA DIRETA
          </span>
          <span className="text-slate-400">
            [ DOWNLOAD DIGITAL IMEDIATO ]
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-display-title font-black text-white tracking-tight">
            GARANTA O SEU PLANO DE SAÍDA HOJE
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Leve o E-Book Guia de Emancipação Prática + 6 Ferramentas Exclusivas (Planilha de Custos, Checklists Antifraude, Roteiro Familiar e Matriz de Decisão).
          </p>
        </div>

        {/* Price & Checkout Card */}
        <div className="bg-[#121824] border-2 border-[#00E676] p-6 sm:p-8 max-w-md mx-auto space-y-4 shadow-[6px_6px_0px_0px_#00E676]">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 block">
            PREÇO PROMOCIONAL DE LANÇAMENTO
          </span>

          <div className="flex items-center justify-center gap-4">
            <span className="text-slate-500 line-through text-lg font-bold font-mono">R$ 97,00</span>
            <span className="text-4xl sm:text-5xl font-black font-display-title text-[#00E676]">R$ 47,00</span>
          </div>

          <span className="text-xs font-mono text-emerald-300 font-bold block">
            OU EM ATÉ 5X NO CARTÃO • ACESSO VITALÍCIO
          </span>

          <Link href="/ebook" className="block pt-2">
            <button className="w-full py-4 bg-[#00E676] text-[#0D1117] font-mono font-black text-sm uppercase tracking-wider border-2 border-[#0D1117] hover:bg-[#00C853] transition-all">
              ⚡ COMPRAR E-BOOK AGORA (R$ 47)
            </button>
          </Link>
        </div>

        {/* Guarantees */}
        <div className="pt-4 flex flex-wrap justify-center gap-8 font-mono text-xs text-slate-400 border-t border-slate-800">
          <span>✓ GARANTIA INCONDICIONAL DE 7 DIAS</span>
          <span>✓ PAGAMENTO SEGURO</span>
          <span>✓ ENVIO DIRETO POR E-MAIL</span>
        </div>
      </div>
    </div>
  );
}
