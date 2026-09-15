'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function EbookOfferCard() {
  return (
    <div id="oferta" className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-emerald-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <Badge variant="success" className="mb-4 text-xs font-bold uppercase tracking-wider px-4 py-1.5">
          🔥 Oferta Exclusiva de Lançamento 2026
        </Badge>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Kit Completo #PartiuMorarSozinho
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          O E-book Guia de Emancipação Prática + 6 Ferramentas Exclusivas (Planilha de Custo de Liberdade, Checklists Antifraude, Roteiro Familiar e Matriz de Decisão).
        </p>

        {/* Pricing Box */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md mx-auto mb-8 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Preço Promocional de Lançamento</span>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-slate-500 line-through text-lg font-bold">R$ 97,00</span>
            <span className="text-4xl sm:text-5xl font-black text-emerald-400">R$ 47,00</span>
          </div>
          <span className="text-xs text-emerald-400 font-semibold block mb-6">
            ou em até 5x no cartão • Acesso Vitalício
          </span>

          <Link href="/ebook">
            <Button variant="primary" size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-lg py-4 shadow-xl shadow-emerald-500/30 rounded-xl transition-all scale-100 hover:scale-105">
              Garantir Meu E-Book + Bônus 🚀
            </Button>
          </Link>

          <div className="mt-4 text-[11px] text-slate-400 flex justify-center gap-4 border-t border-slate-800/80 pt-4">
            <span>⚡ Download Imediato em PDF</span>
            <span>🛡️ Garantia de 7 Dias</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-300 max-w-2xl mx-auto border-t border-slate-800 pt-6">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            📘 E-Book Principal (8 Partes)
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            📊 Planilha de Custos Automática
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            📋 Checklist Vistoria Antifraude
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            🗣️ Roteiro Conversa com Pais
          </div>
        </div>
      </div>
    </div>
  );
}
