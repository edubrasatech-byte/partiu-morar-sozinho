'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function CleanStorefrontHero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="success">
              ✨ Edição Atualizada 2026 • O Manual de Emancipação
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

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link href="/ebook">
                <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold shadow-lg shadow-emerald-600/20">
                  Quero o E-Book + Kit de Saída 🚀
                </Button>
              </Link>
              <Link href="/diagnostico">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Fazer Teste de Prontidão Grátis
                </Button>
              </Link>
            </div>

            {/* Trust Points */}
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

          {/* Right Column: E-Book & Tools Visual Product Box */}
          <div className="lg:col-span-5 relative">
            <div className="clean-card p-8 bg-white space-y-6 shadow-xl relative">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">PRODUTO DIGITAL COMPLETO</span>
                <Badge variant="success">E-BOOK + 6 BÔNUS</Badge>
              </div>

              {/* Simulated Book Product Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-7 rounded-2xl shadow-md text-center space-y-3 relative overflow-hidden border border-slate-700">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl mx-auto shadow-md shadow-emerald-500/30">
                  #
                </div>
                <h3 className="text-2xl font-extrabold font-heading tracking-tight text-white">#PartiuMorarSozinho</h3>
                <p className="text-xs text-slate-300 font-medium">O Plano de Saída Definitivo para Conquistar sua Independência sem Risco de Voltar</p>
                <span className="inline-block text-[11px] font-bold text-emerald-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  Edição Atualizada 2026
                </span>
              </div>

              {/* Tools Included */}
              <div className="space-y-2 text-xs font-medium text-slate-600">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span>📘 Livro Digital Principal (140 Páginas)</span>
                  <span className="font-bold text-slate-900">PDF</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span>📊 Planilha "Quanto Custa Minha Liberdade?"</span>
                  <span className="font-bold text-slate-900">Excel</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span>📋 5 Checklists, Roteiros & Matriz</span>
                  <span className="font-bold text-slate-900">PDFs</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">De R$ 97,00 por</span>
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
    </section>
  );
}
