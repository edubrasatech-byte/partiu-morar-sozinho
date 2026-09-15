'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function BoutiqueHero() {
  const [activePreview, setActivePreview] = useState(0);

  const PREVIEWS = [
    {
      title: 'Parte 1: O Preço Invisível',
      quote: '“Comodismo não é economia. É a moeda com a qual você paga a perda da sua autonomia.”',
      tag: 'CAPÍTULO DE ABERTURA'
    },
    {
      title: 'Parte 4: Engenharia do Dinheiro',
      quote: '“Aluguel representa só 35% do custo. Quem não calcula o Custo de Instalação volta derrotado no 2º mês.”',
      tag: 'CÁLCULO DE CUSTOS'
    },
    {
      title: 'Bônus 1: Planilha de Liberdade',
      quote: '“Simulação automática de caução, mobília inicial e a data exata da sua mudança segura.”',
      tag: 'FERRAMENTA EXCEL'
    }
  ];

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-[#FBFBF9] bg-boutique-grid border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Provocative Manifesto Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D66C]" />
              <span>Manual de Emancipação do Jovem Adulto • Edição 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-sans-heading font-black text-[#0B0D10] tracking-tight leading-[1.06]">
              Você não precisa sair de casa no impulso.{' '}
              <span className="font-serif-title font-normal text-slate-600 block mt-1">
                Precisa de um plano que não te faça voltar.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              O choque de realidade e a engenharia financeira para vencer a acomodação, organizar o dinheiro e conquistar a sua privacidade definitiva.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link href="/ebook">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#0B0D10] hover:bg-[#12151B] text-white font-sans text-sm font-bold rounded-2xl shadow-xl shadow-slate-900/10 transition-all hover:scale-[1.02]">
                  Adquirir O E-Book + Kit de Saída — R$ 47 🚀
                </button>
              </Link>
              <Link href="/diagnostico">
                <button className="w-full sm:w-auto px-7 py-4 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-sans text-sm font-semibold rounded-2xl transition-colors shadow-sm">
                  Fazer Teste de Prontidão
                </button>
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <span>✓ Formato PDF + Planilhas</span>
              <span>✓ Download Imediato</span>
              <span>✓ Garantia de 7 Dias</span>
            </div>
          </div>

          {/* Right Column: Interactive Digital Book Artifact Preview */}
          <div className="lg:col-span-5">
            <div className="boutique-card p-7 bg-white relative space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Degustação do Produto</span>
                <span className="text-xs font-semibold text-[#00D66C] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {PREVIEWS[activePreview].tag}
                </span>
              </div>

              {/* Display Box */}
              <div className="p-6 rounded-2xl bg-[#0B0D10] text-white space-y-4 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span>📖 E-BOOK #PARTIUMORARSOZINHO</span>
                  <span>140 PÁGINAS</span>
                </div>
                <h3 className="text-lg font-bold font-sans-heading text-white">{PREVIEWS[activePreview].title}</h3>
                <blockquote className="font-serif-title text-base sm:text-lg text-slate-200 leading-snug">
                  {PREVIEWS[activePreview].quote}
                </blockquote>
              </div>

              {/* Navigation Dots / Selector Buttons */}
              <div className="flex gap-2">
                {PREVIEWS.map((prev, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePreview(idx)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all ${
                      activePreview === idx
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Exemplo 0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">PREÇO PROMOCIONAL</span>
                  <span className="font-extrabold text-slate-900 text-lg font-sans-heading">R$ 47,00</span>
                </div>
                <Link href="/ebook">
                  <button className="px-5 py-2.5 bg-[#00D66C] hover:bg-[#00B359] text-[#0B0D10] font-bold rounded-xl transition-colors shadow-sm">
                    Garantir Acesso
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
