'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function EbookPage() {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 24;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full flex-grow">
        {/* Navigation back and quick CTA */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-[#0D7C3E] flex items-center gap-1.5 transition-colors"
          >
            ← Voltar para a página inicial
          </Link>

          <Link
            href="/#oferta"
            className="btn-primary text-sm py-2.5 px-5 hidden sm:inline-flex"
          >
            Quero o e-book completo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Book Reader Mockup - Mockup 05 */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            {/* Reader Header */}
            <div className="bg-[#0B1F3A] text-white px-6 py-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#28C76F]">#PartiuMorarSozinho</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-200 font-medium">Prévia do Leitor</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-300">
                <span>Página {currentPage} de {totalPages}</span>
                <span className="bg-[#163A5F] px-2.5 py-1 rounded text-[#28C76F] font-semibold uppercase tracking-wider">
                  Amostra
                </span>
              </div>
            </div>

            {/* Book Spread Pages */}
            <div className="p-6 sm:p-10 bg-[#FAFAFA] border-b border-gray-200 min-h-[480px] flex items-center justify-center">
              <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden">
                {/* Diagonal Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 rotate-[-25deg]">
                  <span className="text-8xl font-black text-gray-900">PRÉVIA</span>
                </div>

                {/* Left Page (Page 08) */}
                <div className="border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#0D7C3E] uppercase tracking-wider">
                      ETAPA 02
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-3">
                      Organizar
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Transforme estimativas em um orçamento que você realmente consiga usar no dia a dia.
                    </p>

                    {/* Diagram preview from mockup */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="border border-gray-200 rounded-lg p-3 text-center bg-gray-50">
                        <div className="text-xs font-semibold text-gray-700">Receitas</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Líquidas reais</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 text-center bg-gray-50">
                        <div className="text-xs font-semibold text-gray-700">Fixos</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Aluguel + Contas</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 text-center bg-gray-50">
                        <div className="text-xs font-semibold text-gray-700">Variáveis</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Mercado + Lazer</div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 text-center bg-gray-50">
                        <div className="text-xs font-semibold text-gray-700">Reserva</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Margem de segurança</div>
                      </div>
                    </div>

                    <div className="bg-[#ECFDF3] border border-[#0D7C3E]/20 rounded-lg p-3 text-xs text-[#0D7C3E] flex items-center gap-2">
                      <span>✓</span>
                      <span>Clareza total antes de assinar qualquer contrato.</span>
                    </div>
                  </div>

                  <div className="mt-8 text-xs text-gray-400 font-mono">
                    08
                  </div>
                </div>

                {/* Right Page (Page 09) */}
                <div className="md:pl-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Mapa de custos mensais
                    </h3>

                    {/* Table mockup */}
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Moradia (Aluguel + Condomínio)</span>
                        <span className="text-gray-400 font-mono">R$ —</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Contas básicas (Luz, Gás, Net)</span>
                        <span className="text-gray-400 font-mono">R$ —</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Alimentação e Mercado</span>
                        <span className="text-gray-400 font-mono">R$ —</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Transporte e Mobilidade</span>
                        <span className="text-gray-400 font-mono">R$ —</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Saúde e Cuidados</span>
                        <span className="text-gray-400 font-mono">R$ —</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Fundo de Imprevistos</span>
                        <span className="text-gray-400 font-mono">R$ —</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="text-[#0D7C3E]">✓</span> Revisar valores reais com histórico
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="text-[#0D7C3E]">✓</span> Criar margem de segurança de 15%
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="text-[#0D7C3E]">✓</span> Comparar cenários de moradia sozinho x dividido
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-right text-xs text-gray-400 font-mono">
                    09
                  </div>
                </div>
              </div>
            </div>

            {/* Reader Controls Bar */}
            <div className="bg-[#0B1F3A] text-white px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="hover:text-[#28C76F] transition-colors flex items-center gap-1 cursor-pointer"
              >
                ‹ Anterior
              </button>
              <div className="text-gray-300 font-mono">
                Página {currentPage} de {totalPages}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className="hover:text-[#28C76F] transition-colors flex items-center gap-1 cursor-pointer"
              >
                Próxima ›
              </button>
            </div>
          </div>

          {/* Right Column: Book Details & Unlock Action */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-24 h-32 bg-[#0B1F3A] rounded-lg mx-auto shadow-md p-3 text-center flex flex-col justify-between mb-4 border border-[#163A5F]">
                <span className="text-[8px] text-[#28C76F] font-bold">#Partiu</span>
                <span className="text-[11px] text-white font-bold leading-tight">O PLANO DE SAÍDA</span>
                <span className="text-[7px] text-gray-400">Guia Prático</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center">
                #PartiuMorarSozinho
              </h3>
              <p className="text-xs text-gray-500 text-center mt-1 mb-6">
                O Plano de Saída Completo
              </p>

              <div className="space-y-3.5 text-sm mb-6 border-y border-gray-100 py-5">
                <div className="flex items-start gap-3">
                  <span className="text-[#0D7C3E] font-bold">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">E-book prático</span>
                    <p className="text-xs text-gray-500">Leitura no celular, tablet e computador</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#0D7C3E] font-bold">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Método em 6 etapas</span>
                    <p className="text-xs text-gray-500">Da decisão até os primeiros 90 dias</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#0D7C3E] font-bold">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Exercícios aplicáveis</span>
                    <p className="text-xs text-gray-500">Planilha de custos e checklists preenchíveis</p>
                  </div>
                </div>
              </div>

              <Link
                href="/#oferta"
                className="btn-primary w-full text-center py-3.5 block font-semibold text-sm"
              >
                Quero o conteúdo completo
              </Link>

              <p className="text-[11px] text-gray-400 text-center mt-3">
                A prévia mostra uma seleção de páginas. Acesso completo liberado após aquisição.
              </p>
            </div>

            {/* Guarantee reminder */}
            <div className="bg-[#ECFDF3] border border-[#0D7C3E]/20 rounded-xl p-4 text-xs text-gray-700 flex items-center gap-3">
              <span className="text-lg">🔒</span>
              <span>Garantia incondicional de 7 dias com devolução integral.</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
