'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function EditorialManifestoHero() {
  const [idade, setIdade] = useState(23);
  const [guardado, setGuardado] = useState(2500);

  const getDiagnosticsMessage = () => {
    if (guardado < 3000) {
      return {
        tag: 'CRÍTICO: RISCO MÁXIMO DE VOLTA',
        color: 'bg-rose-500 text-white',
        msg: 'Você tem vontade, mas zero proteção. Sair agora sem o E-Book é pedir para voltar derrotado em 60 dias.'
      };
    } else if (guardado < 8000) {
      return {
        tag: 'FASE DE PREPARAÇÃO TÁTICA',
        color: 'bg-[#E2FF54] text-[#0D1117]',
        msg: 'Você já tem um começo. O E-Book vai te ensinar a montar o custo de instalação e escolher a rota ideal.'
      };
    } else {
      return {
        tag: 'PRONTIDÃO ALTA COM PLANO',
        color: 'bg-[#00E676] text-[#0D1117]',
        msg: 'Sua reserva é boa! O E-Book vai impedir que você assine contratos abusivos ou cometa erros de iniciante.'
      };
    }
  };

  const diag = getDiagnosticsMessage();

  return (
    <section className="relative pt-12 pb-20 bg-[#FAF8F5] bg-paper-grid border-b-2 border-[#0D1117] text-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Editorial Bar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#0D1117] pb-3 mb-10 gap-3 font-mono text-xs font-bold uppercase tracking-wider">
          <span className="bg-[#0D1117] text-[#00E676] px-3 py-1">
            MANIFESTO DE EMANCIPAÇÃO DO JOVEM ADULTO
          </span>
          <span className="text-slate-600">
            DISPONÍVEL EM FORMATO DIGITAL (PDF + EXCEL)
          </span>
          <span className="bg-[#E2FF54] border border-[#0D1117] px-2.5 py-0.5 text-[#0D1117]">
            EDIÇÃO REVISADA 2026
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bold Headline & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-display-title font-black leading-[0.98] tracking-tight text-[#0D1117]">
              CHEGA DE PEDIR <br className="hidden sm:inline" />
              <span className="bg-[#E2FF54] px-3 py-0.5 border-2 border-[#0D1117] inline-block mt-1 transform -rotate-1 shadow-[4px_4px_0px_0px_#0D1117]">
                AUTORIZAÇÃO PARA VIVER.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed pt-2">
              Morar com os pais depois dos 20 anos é confortável — até você perceber que a sua autonomia está morrendo aos poucos. Você não precisa de mais desculpas, <strong className="underline underline-offset-4 decoration-[#00E676] decoration-4">precisa do Plano de Saída.</strong>
            </p>

            {/* Direct Purchase CTA Box */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch">
              <Link href="/ebook" className="flex-1">
                <button className="w-full py-4 px-8 bg-[#00E676] text-[#0D1117] font-mono font-bold text-sm sm:text-base uppercase tracking-wider border-2 border-[#0D1117] shadow-[5px_5px_0px_0px_#0D1117] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center">
                  🔥 QUERO O E-BOOK + KIT DE SAÍDA (R$ 47)
                </button>
              </Link>
              <Link href="/diagnostico">
                <button className="py-4 px-6 bg-white text-[#0D1117] font-mono font-bold text-sm uppercase tracking-wider border-2 border-[#0D1117] shadow-[5px_5px_0px_0px_#0D1117] hover:bg-slate-100 transition-all">
                  TESTE DE PRONTIDÃO
                </button>
              </Link>
            </div>

            <div className="pt-3 flex flex-wrap gap-4 text-xs font-mono font-bold text-slate-700">
              <span>⚡ DOWNLOAD IMEDIATO</span>
              <span>•</span>
              <span>🛡️ GARANTIA DE 7 DIAS</span>
              <span>•</span>
              <span>📊 INCLUI 6 FERRAMENTAS</span>
            </div>
          </div>

          {/* Right Column: Interactive Reality Check Calculator Widget */}
          <div className="lg:col-span-5">
            <div className="paper-card p-6 sm:p-8 space-y-6 relative">
              <div className="flex justify-between items-center border-b-2 border-[#0D1117] pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">SIMULADOR RÁPIDO</span>
                <span className="bg-[#0D1117] text-white text-[10px] font-mono font-bold px-2 py-0.5">CHECK DE REALIDADE</span>
              </div>

              <h3 className="text-xl font-display-title font-bold text-[#0D1117]">
                Qual a sua situação hoje?
              </h3>

              {/* Slider 1: Age */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>Sua Idade Atual:</span>
                  <span className="bg-[#E2FF54] px-2 border border-[#0D1117]">{idade} anos</span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={35}
                  value={idade}
                  onChange={(e) => setIdade(Number(e.target.value))}
                  className="w-full accent-[#0D1117] cursor-pointer"
                />
              </div>

              {/* Slider 2: Money Saved */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>Dinheiro Guardado Hoje:</span>
                  <span className="bg-[#00E676] px-2 border border-[#0D1117]">R$ {guardado.toLocaleString('pt-BR')}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={20000}
                  step={500}
                  value={guardado}
                  onChange={(e) => setGuardado(Number(e.target.value))}
                  className="w-full accent-[#0D1117] cursor-pointer"
                />
              </div>

              {/* Dynamic Diagnosis Result */}
              <div className="p-4 border-2 border-[#0D1117] bg-[#FAF8F5] space-y-2">
                <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 border border-[#0D1117] ${diag.color}`}>
                  {diag.tag}
                </span>
                <p className="text-xs font-medium text-slate-800 leading-relaxed">
                  {diag.msg}
                </p>
              </div>

              <Link href="/ebook" className="block">
                <button className="w-full py-3 bg-[#0D1117] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#0D1117] shadow-[3px_3px_0px_0px_#00E676] hover:bg-slate-900 transition-all">
                  VER O PLANO DE SAÍDA NO E-BOOK →
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
