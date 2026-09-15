'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function BestsellerHero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      {/* Soft Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="success">
              ✨ Edição Atualizada 2026 • Guia Oficial de Independência
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12]">
              Você não precisa sair de casa no impulso.{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Precisa de um plano que não te faça voltar.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Descubra como organizar seu dinheiro, dominar a rotina doméstica e tomar as decisões certas para conquistar sua privacidade com segurança — mesmo que hoje você ache que não ganha o suficiente.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link href="/ebook">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-emerald-500/25">
                  Quero o E-Book + Kit de Saída 🚀
                </Button>
              </Link>
              <Link href="/diagnostico">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Fazer Teste de Prontidão Grátis
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-500 border-t border-slate-200">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Download Imediato em PDF
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Planilhas & Checklists Inclusos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Garantia Incondicional de 7 Dias
              </span>
            </div>
          </div>

          {/* Right Column: Premium Bestseller Book Cover Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Subtle Ambient Shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-navy-900/10 rounded-3xl blur-2xl transform rotate-3" />

              {/* Book Showcase Container */}
              <div className="relative bg-white border border-slate-200 rounded-3xl p-7 shadow-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">PRODUTO DIGITAL</span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-extrabold rounded-full border border-emerald-200">
                    E-BOOK + 6 BÔNUS
                  </span>
                </div>

                {/* Simulated Book Graphic */}
                <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white p-7 rounded-2xl shadow-xl text-center space-y-3 relative overflow-hidden border border-navy-700">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-2 shadow-lg shadow-emerald-500/30">
                    #
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading tracking-tight">#PartiuMorarSozinho</h3>
                  <p className="text-xs text-slate-300 font-medium">O Plano de Saída Definitivo para Conquistar sua Independência sem Risco de Voltar</p>
                  <span className="inline-block text-[11px] font-bold text-emerald-400 bg-navy-950 px-3 py-1 rounded-full border border-navy-700">
                    Edição Atualizada 2026
                  </span>
                </div>

                {/* Book Details */}
                <div className="space-y-2 text-xs font-medium text-slate-600">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span>📘 Livro Digital Completo</span>
                    <span className="font-bold text-slate-900">140 Páginas</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span>📊 Planilha de Custos Automática</span>
                    <span className="font-bold text-slate-900">Modelo Excel</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span>📋 5 Checklists & Roteiros</span>
                    <span className="font-bold text-slate-900">PDFs Práticos</span>
                  </div>
                </div>

                {/* Price CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Preço de Lançamento</span>
                    <span className="text-2xl font-extrabold text-slate-900 font-heading">R$ 47,00</span>
                  </div>
                  <Link href="/ebook">
                    <Button variant="primary" size="sm" className="font-bold">
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
