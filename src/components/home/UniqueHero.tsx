'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function UniqueHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-navy-950 bg-grid-pattern border-b border-slate-800/80">
      {/* Editorial Gradient Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-navy-700/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Ticker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono-tag font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Manifesto de Emancipação • Edição 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.08]">
              Chega de pedir autorização para viver.{' '}
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Você precisa de um plano de saída, não de desculpas.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              O choque de realidade e o método prático que você precisa para organizar o dinheiro, vencer a acomodação e conquistar sua privacidade definitiva — sem romantismo e sem risco de voltar.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link href="/ebook">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold px-8 py-4 text-base shadow-xl shadow-emerald-500/20 rounded-xl transition-all scale-100 hover:scale-[1.02]">
                  Garantir Meu E-Book + Kit de Saída 🚀
                </Button>
              </Link>
              <Link href="/diagnostico">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-slate-200 border-slate-700/80 hover:bg-slate-800/80 px-7 py-4 text-base rounded-xl font-semibold">
                  Fazer o Diagnóstico Grátis
                </Button>
              </Link>
            </div>

            {/* Microcopy & Trust Features */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono-tag border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Download Imediato em PDF
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Planilhas & Checklists Inclusos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Garantia de 7 Dias
              </span>
            </div>
          </div>

          {/* Right Column: Tactile E-Book Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Glowing Background Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-navy-700/30 rounded-3xl blur-2xl transform rotate-3" />

              {/* Book Front Card */}
              <div className="relative bg-gradient-to-b from-navy-900 to-slate-950 border border-slate-700/80 rounded-3xl p-7 shadow-2xl space-y-6">
                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono-tag uppercase tracking-widest text-emerald-400 font-bold block">KIT COMPLETO DIGITAL</span>
                    <h3 className="text-xl font-black text-white mt-1">#PartiuMorarSozinho</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-lg border border-emerald-500/40">
                    PDF + EXCEL
                  </span>
                </div>

                {/* Simulated Book Cover Graphic */}
                <div className="bg-gradient-to-br from-emerald-950 via-navy-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 text-center space-y-3 relative overflow-hidden">
                  <div className="text-4xl mb-1">📘</div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">O Plano de Saída</h4>
                  <p className="text-xs text-slate-300">Como Organizar Dinheiro, Rotina e Decisões para Morar Sozinho sem Voltar</p>
                  <span className="inline-block text-[10px] font-mono-tag text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/50">
                    Edição Revista & Atualizada 2026
                  </span>
                </div>

                {/* Included Tools Checklist */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span>📖 Livro Digital Principal</span>
                    <span className="font-bold text-emerald-400">140 Páginas</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span>📊 Planilha Custo de Liberdade</span>
                    <span className="font-bold text-emerald-400">Modelo Excel</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span>📋 5 Checklists & Roteiros</span>
                    <span className="font-bold text-emerald-400">PDFs Práticos</span>
                  </div>
                </div>

                {/* Offer Price Highlight */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono-tag block">De R$ 97,00 por</span>
                    <span className="text-2xl font-black text-emerald-400">R$ 47,00</span>
                  </div>
                  <Link href="/ebook">
                    <Button variant="primary" size="sm" className="bg-emerald-500 text-white font-bold py-2.5 px-4 text-xs">
                      Adquirir Agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
