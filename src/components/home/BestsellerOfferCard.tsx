'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function BestsellerOfferCard() {
  return (
    <div id="oferta" className="bestseller-card-dark p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-4">
        <Badge variant="info">OFERTA DE LANÇAMENTO 2026</Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Adquira o Kit #PartiuMorarSozinho
        </h2>
        <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
          Leve o E-Book Guia de Emancipação Prática + 6 Ferramentas Exclusivas (Planilha de Custos, Checklists Antifraude, Roteiro Familiar e Matriz de Decisão).
        </p>
      </div>

      {/* Pricing Box */}
      <div className="bg-navy-950/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 max-w-md mx-auto space-y-4 shadow-xl">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">PREÇO ESPECIAL</span>
        <div className="flex items-center justify-center gap-3">
          <span className="text-slate-500 line-through text-lg font-bold">R$ 97,00</span>
          <span className="text-4xl sm:text-5xl font-extrabold font-heading text-emerald-400">R$ 47,00</span>
        </div>
        <span className="text-xs text-emerald-300 font-medium block">ou 5x no cartão • Acesso Vitalício</span>

        <Link href="/ebook" className="block pt-2">
          <Button variant="primary" size="lg" className="w-full font-bold py-4">
            Comprar E-Book com Desconto 🚀
          </Button>
        </Link>
      </div>

      <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium border-t border-navy-800">
        <span>⚡ Download Imediato em PDF</span>
        <span>🛡️ Garantia de 7 Dias</span>
        <span>🔒 Pagamento Seguro</span>
      </div>
    </div>
  );
}
